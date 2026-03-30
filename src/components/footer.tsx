import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-black/6 bg-white py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/gen-5-logo-cropped.png"
              alt="Gen-5 Wires and Cables logo"
              width={260}
              height={118}
              className="h-auto w-[190px] sm:w-[220px]"
            />
            <p className="mt-4 text-base leading-8 text-black/65">
              Trusted wire and cable solutions built for safety, durability, and modern industrial
              performance.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-base font-semibold text-brand-charcoal">
              <Link href="/#solution">Why Gen-5</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Contact</p>
            <div className="mt-4 space-y-3 text-base leading-7 text-black/65">
              <p>Gen-5 Wires & Cables</p>
              <p>Bawana Industrial Area, Delhi</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Follow</p>
            <div className="mt-4 flex flex-col gap-3 text-base font-semibold text-brand-charcoal">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://wa.me/919315946113?text=Hello%20Gen-5" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
