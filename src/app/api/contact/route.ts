import { google } from "googleapis";
import { NextResponse } from "next/server";

type InquiryPayload = {
  fullName?: string;
  company?: string;
  phone?: string;
  city?: string;
  inquiryType?: string;
  requirement?: string;
};

const SPREADSHEET_ID = "1eL09JcNnQlMuVVg1myVKFYYw2JjLu6z63Xa_gb8eR0Q";
const DEFAULT_RANGE = "Sheet1!A:G";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;

    const fullName = body.fullName?.trim() || "";
    const company = body.company?.trim() || "";
    const phone = body.phone?.trim() || "";
    const city = body.city?.trim() || "";
    const inquiryType = body.inquiryType?.trim() || "";
    const requirement = body.requirement?.trim() || "";

    if (!fullName || !phone || !city || !requirement) {
      return NextResponse.json(
        { message: "Please complete all required fields before submitting." },
        { status: 400 },
      );
    }

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const range = process.env.GOOGLE_SHEETS_RANGE || DEFAULT_RANGE;

    if (!clientEmail || !privateKey) {
      return NextResponse.json(
        {
          message:
            "Google Sheets integration is not configured yet. Add the service account credentials to enable submissions.",
        },
        { status: 500 },
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), fullName, company, phone, city, inquiryType, requirement]],
      },
    });

    return NextResponse.json({
      message: "Inquiry sent successfully. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Failed to submit contact inquiry", error);

    return NextResponse.json(
      { message: "Something went wrong while sending your inquiry. Please try again." },
      { status: 500 },
    );
  }
}
