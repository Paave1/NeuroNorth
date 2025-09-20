"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const BRAND = {
  black: "#0D0D0D",
  white: "#FFFFFF",
  blue: "#3B82F6",
  violet: "#8B5CF6",
};

const CONTACT = {
  email: "pavelkarasev987@gmial.com",
  phone: "+358 46 5740203",
};

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [contactOpen]);
  return (
    <div className="min-h-dvh w-full bg-[#0D0D0D] text-white antialiased">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] shadow-[0_0_24px_-6px_#3B82F6]"></div>
            <span className="text-sm tracking-widest uppercase text-white/90 group-hover:text-white">
              NeuroNorth
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#why" className="hover:text-white transition">Why us</a>
            <a href="#cases" className="hover:text-white transition">Cases</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5">
              <a href="#cases">See case studies</a>
            </Button>
            <Button asChild className="bg-[#3B82F6] hover:bg-[#2563EB]">
              <a href="#contact">Request a solution</a>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setMobileOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-[82%] max-w-xs rounded-l-2xl border-l border-white/10 bg-[#0D0D0D]/95 backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-widest uppercase text-white/90">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              <nav className="mt-6 grid gap-4 text-base text-white/80">
                <a onClick={() => setMobileOpen(false)} className="hover:text-white" href="#services">Services</a>
                <a onClick={() => setMobileOpen(false)} className="hover:text-white" href="#why">Why us</a>
                <a onClick={() => setMobileOpen(false)} className="hover:text-white" href="#cases">Cases</a>
                <a onClick={() => setMobileOpen(false)} className="hover:text-white" href="#about">About</a>
                <a onClick={() => setMobileOpen(false)} className="hover:text-white" href="#contact">Contact</a>
                <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="hover:text-white">Portfolio</Link>
              </nav>
              <div className="mt-6 grid gap-3">
                <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 w-full">
                  <a href="#cases" onClick={() => setMobileOpen(false)}>See case studies</a>
                </Button>
                <Button asChild className="bg-[#3B82F6] hover:bg-[#2563EB] w-full">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Request a solution</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GridOverlay />
        <AuroraBackground />
        <ParticlesCanvas className="pointer-events-none absolute inset-0 z-0 opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              AI & Automation • Web Platforms • Integrations
            </div>
            <h1 className="mt-6 text-4xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Digital solutions that{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                move business forward
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-white/70 md:text-lg">
              From websites to AI automation – NeuroNorth builds tools that solve real business
              challenges.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="bg-[#3B82F6] hover:bg-[#2563EB]">
                <a href="#contact">Request a solution</a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5">
                <a href="#cases">See case studies</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <span>Next.js</span>
              <span>Tailwind</span>
              <span>AI Integrations</span>
              <span>Automations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D] to-[#0D0D0D]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-3 text-white/70">
              We design, build, and scale your digital layer – from UX to automation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Web solutions"
              subtitle="Websites, web apps, e‑commerce"
              points={["Next.js + Tailwind", "Scalable architecture", "SEO & performance"]}
              icon={<IconGlobe />}
            />
            <ServiceCard
              title="Automation"
              subtitle="CRM, ERP, integrations"
              points={["Internal tools", "APIs & webhooks", "No-code where it fits"]}
              icon={<IconWorkflow />}
            />
            <ServiceCard
              title="AI solutions"
              subtitle="Chatbots, assistants, analytics"
              points={["RAG & vector search", "Process copilots", "Data pipelines"]}
              icon={<IconBrain />}
            />
            <ServiceCard
              title="Support & scaling"
              subtitle="Maintenance, upgrades"
              points={["SLAs & monitoring", "Feature iterations", "Cost optimization"]}
              icon={<IconRocket />}
            />
          </div>
        </div>
      </section>

      {/* Why NeuroNorth */}
      <section id="why" className="relative border-t border-white/5 bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why NeuroNorth</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Business-first strategy with modern engineering. We ship meaningful outcomes, not jargon.
              </p>
              <ul className="mt-8 space-y-4 text-white/80">
                <WhyItem title="Business-first approach" desc="Outcomes tied to metrics and ROI." />
                <WhyItem title="Fast & flexible development" desc="Short cycles, measurable releases." />
                <WhyItem title="Modern stack" desc="Next.js, AI integrations, robust infra." />
                <WhyItem title="Clear communication" desc="Plain language, transparent decisions." />
                <WhyItem title="Post-launch support" desc="Continuous improvements and monitoring." />
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/10 blur-2xl" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-1">
                <div className="rounded-xl border border-white/10 bg-[#0D0D0D] p-6">
                  <Image
                    src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1400&auto=format&fit=crop"
                    alt="Neural grid abstract"
                    width={1200}
                    height={800}
                    className="rounded-lg object-cover"
                  />
                  <p className="mt-3 text-sm text-white/60">Scandinavian minimalism, engineered for speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Case studies</h2>
            <p className="mt-3 text-white/70">Real business problems addressed with modern software.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseCard
              company="Nordic Retail (Placeholder)"
              problem="Fragmented product data across tools slowed updates."
              solution="Unified admin app with Next.js + automation to sync ERP, PIM, and storefront."
              result="Update time cut by 72%, catalog errors down 90%."
            />
            <CaseCard
              company="B2B SaaS (Placeholder)"
              problem="Support overwhelmed by repetitive ‘how-to’ questions."
              solution="AI assistant trained on docs and tickets; integrated into app and Slack."
              result="Deflected ~38% tickets, CSAT +11pts."
            />
            <CaseCard
              company="Logistics (Placeholder)"
              problem="Manual scheduling led to delays and costs."
              solution="Routing engine + dashboard; predictive ETAs and automated notifications."
              result="On‑time deliveries +24%, ops costs −15%."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-white/5 bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-white/70">
                NeuroNorth is a young tech company from Finland. We combine business and IT experience
                to deliver working solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-white/50">Values</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <ValuePill title="Innovation" />
                <ValuePill title="Transparency" />
                <ValuePill title="Results" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What clients say</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="NeuroNorth turned a messy process into a smooth system. We shipped in weeks."
              author="COO, Logistics"
            />
            <TestimonialCard
              quote="Clear roadmap, tight execution, measurable impact. Exactly what we needed."
              author="Head of Product, B2B SaaS"
            />
            <TestimonialCard
              quote="They speak business, not jargon. The AI assistant saved our support team."
              author="Support Lead, SaaS"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative border-t border-white/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#8B5CF6]/30 to-[#3B82F6]/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Is your business ready for a digital leap?
                </h3>
                <p className="mt-3 text-white/70">
                  Tell us your challenge. We’ll propose an actionable solution and roadmap.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Button className="bg-[#3B82F6] hover:bg-[#2563EB] w-full md:w-auto" onClick={() => setContactOpen(true)}>
                  Contact us
                </Button>
                <p className="text-sm text-white/60">Email: {CONTACT.email}</p>
                <p className="text-sm text-white/60">Phone: {CONTACT.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6]" />
                <span className="text-sm tracking-widest uppercase text-white/90">NeuroNorth</span>
              </div>
              <p className="mt-3 text-sm text-white/60">
                Digital business solutions – websites, apps, AI, and automation.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Menu</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#services">Services</a></li>
                <li><a className="hover:text-white" href="#cases">Case studies</a></li>
                <li><a className="hover:text-white" href="#about">About</a></li>
                <li><a className="hover:text-white" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Social</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    className="hover:text-white"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm text-white/60">
              <p>© {new Date().getFullYear()} NeuroNorth. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Smooth scrolling + minor globals */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>
      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-100 animate-[fadeIn_200ms_ease-out]"
            onClick={() => setContactOpen(false)}
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div
              className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0E0E0E] shadow-2xl shadow-black/40 p-6 md:p-8 opacity-100 scale-100 animate-[popIn_200ms_ease-out]"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Quick contact"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">Quick contact</h3>
                  <p className="mt-1 text-sm text-white/60">Tell us briefly about your need, we’ll reply same day.</p>
                </div>
                <button
                  aria-label="Close dialog"
                  onClick={() => setContactOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <ContactForm />
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes popIn { from { opacity: 0; transform: translateY(8px) scale(0.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
          `}</style>
        </div>
      )}
    </div>
  );
}

/* ======================= Visual FX ======================= */

function GridOverlay() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(to right, ${BRAND.white}10 1px, transparent 1px), linear-gradient(to bottom, ${BRAND.white}10 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D] to-[#0D0D0D]" />
    </div>
  );
}

function AuroraBackground() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -inset-x-40 -top-40 h-[32rem] -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
        <div className="absolute inset-0 aurora" />
      </div>
      <style jsx>{`
        .aurora {
          background: conic-gradient(from 180deg at 50% 50%, #8b5cf620, #3b82f620, #8b5cf620);
          filter: blur(40px);
          animation: auroraFloat 14s ease-in-out infinite alternate;
        }
        @keyframes auroraFloat {
          0% { transform: translateY(0px) scale(1); opacity: 0.8; }
          100% { transform: translateY(30px) scale(1.05); opacity: 1; }
        }
      `}</style>
    </>
  );
}

function ParticlesCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const dpi = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  const config = useMemo(
    () => ({ count: 90, maxSpeed: 0.35, linkDist: 140, dot: 1.4, line: 0.6 }),
    []
  );

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0, height = 0, raf = 0;
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpi);
      canvas.height = Math.floor(height * dpi);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
      // re-seed
      particles.current = Array.from({ length: config.count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.maxSpeed,
        vy: (Math.random() - 0.5) * config.maxSpeed,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // update + draw dots
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, config.dot, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.55)";
        ctx.fill();
      }

      // draw links
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < config.linkDist) {
            const t = 1 - dist / config.linkDist;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, "rgba(139, 92, 246, 0.45)");
            grad.addColorStop(1, "rgba(59, 130, 246, 0.45)");
            ctx.strokeStyle = grad;
            ctx.lineWidth = config.line * t;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    step();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [dpi, config]);

  return <canvas ref={ref} className={className} aria-hidden />;
}

/* ======================= UI Bits ======================= */

function ServiceCard({
  title,
  subtitle,
  points,
  icon,
}: {
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-tr from-[#8B5CF6]/40 to-[#3B82F6]/40 hover:from-[#8B5CF6] hover:to-[#3B82F6] transition">
      <Card className="h-full rounded-2xl bg-[#0E0E0E] border-white/10">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="grid place-items-center h-10 w-10 rounded-lg bg-white/5 text-white/90">{icon}</div>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <p className="text-xs text-white/60">{subtitle}</p>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="mt-2 space-y-2 text-sm text-white/70">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3B82F6]/80" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-60"
        style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
      />
    </div>
  );
}

function WhyItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#8B5CF6]" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
    </li>
  );
}

function CaseCard({
  company,
  problem,
  solution,
  result,
}: {
  company: string;
  problem: string;
  solution: string;
  result: string;
}) {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-tr from-[#8B5CF6]/30 to-[#3B82F6]/30 hover:from-[#8B5CF6] hover:to-[#3B82F6] transition">
      <Card className="h-full rounded-2xl bg-[#0E0E0E] border-white/10">
        <CardContent className="pt-6">
          <h4 className="text-sm uppercase tracking-widest text-white/60">{company}</h4>
          <div className="mt-4 space-y-3 text-sm">
            <Row label="Problem" text={problem} />
            <Row label="Solution" text={solution} />
            <Row label="Result" text={result} />
          </div>
        </CardContent>
      </Card>
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-60"
        style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
      />
    </div>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid grid-cols-[88px,1fr] gap-4">
      <span className="text-white/50">{label}</span>
      <p className="text-white/80">{text}</p>
    </div>
  );
}

function ValuePill({ title }: { title: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 text-sm">
      {title}
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-white/80">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm text-white/60">— {author}</p>
    </div>
  );
}

function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = encodeURIComponent(`New inquiry from ${name || "Website"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm text-white/80" htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Your name" className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 outline-none focus:border-white/30" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/80" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@company.com" className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 outline-none focus:border-white/30" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/80" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" placeholder="+358 ..." className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 outline-none focus:border-white/30" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/80" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required placeholder="How can we help?" className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 outline-none focus:border-white/30" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <Button type="submit" className="bg-[#3B82F6] hover:bg-[#2563EB]">Send</Button>
        <p className="text-xs text-white/50">Or email: {CONTACT.email}</p>
      </div>
    </form>
  );
}

/* ======================= Minimal Inline Icons ======================= */

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.85" />
      <path d="M2 12h20M12 2c3 3.5 3 16.5 0 20M12 2c-3 3.5-3 16.5 0 20" stroke="currentColor" strokeOpacity="0.85" />
    </svg>
  );
}
function IconWorkflow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeOpacity="0.85" />
      <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeOpacity="0.85" />
      <path d="M10 7h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeOpacity="0.85" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 6a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0V6Z" stroke="currentColor" strokeOpacity="0.85" />
      <path d="M6 8a3 3 0 1 0 0 6M18 8a3 3 0 1 1 0 6" stroke="currentColor" strokeOpacity="0.85" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M14 10l-4 4" stroke="currentColor" strokeOpacity="0.85" />
      <path d="M6 18c0-3 2-7 6-11s8-6 11-6c0 3-2 7-6 11s-8 6-11 6Z" stroke="currentColor" strokeOpacity="0.85" />
      <path d="M12 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0Z" stroke="currentColor" strokeOpacity="0.85" />
    </svg>
  );
}
