import { BoltIcon, CableIcon, ShieldIcon } from "@/components/icons";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";
import { trustBadges } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-8 md:pb-24 md:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(135deg,rgba(255,253,252,1),rgba(255,246,243,1)_48%,rgba(252,225,220,0.96)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] grid-overlay opacity-60" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-up flex flex-col gap-8 py-10 text-brand-charcoal md:py-16">
            <span className="inline-flex w-fit rounded-full border border-brand-red/15 bg-white/70 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">
              Har Din Surakshit
            </span>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl lg:text-7xl">
                Reliable Wires for a Safer Tomorrow
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/78 md:text-xl">
                Gen-5 delivers durable, fire-resistant wires and cables that help homes, commercial
                spaces, and factories stay safer under real-world electrical demand.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#contact">Get Quote</PrimaryButton>
              <SecondaryButton href="#features">Explore Products</SecondaryButton>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-brand-charcoal shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-up-delay relative">
            <div className="absolute -left-8 top-14 hidden h-24 w-24 rounded-full bg-white/10 blur-2xl md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/92 p-5 shadow-soft md:p-7">
              <div className="metal-panel section-pattern rounded-[1.7rem] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-red">
                      Industrial Performance
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-brand-charcoal">Built for trust</p>
                  </div>
                  <div className="rounded-2xl bg-brand-red p-3 text-white">
                    <CableIcon className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Safer insulation",
                      body: "Designed for dependable resistance and everyday load confidence.",
                      icon: ShieldIcon,
                    },
                    {
                      title: "Efficient conductivity",
                      body: "Strong conductor quality for smoother power delivery.",
                      icon: BoltIcon,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-soft"
                    >
                      <div className="mb-4 inline-flex rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-lg font-extrabold text-brand-charcoal">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-black/62">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-brand-red/15 bg-[linear-gradient(135deg,#171717_0%,#2b2b2b_100%)] px-5 py-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                    Quick assurance
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Preferred by dealers and installers who want safety, durability, and dependable
                    supply support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
