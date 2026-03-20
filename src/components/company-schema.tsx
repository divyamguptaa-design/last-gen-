export function CompanySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gen-5 Wires & Cables",
    url: "https://gen-5.in",
    slogan: "Reliable Wires for a Safer Tomorrow",
    description:
      "Gen-5 supplies fire-resistant, durable wires and cables for residential, commercial, and industrial applications.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bawana Industrial Area",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
