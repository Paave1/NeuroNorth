"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Varatek",
    description: "Corporate website for Varatek.",
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop",
    tags: ["Website", "Corporate"],
    href: "https://www.varatek.fi",
  },
  {
    title: "E‑commerce Revamp",
    description: "Modern storefront with headless CMS and search.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    title: "Internal Ops Dashboard",
    description: "Real‑time metrics, workflows and automation.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "Automation", "Charts"],
  },
  {
    title: "AI Support Assistant",
    description: "Docs‑aware chatbot with RAG and analytics.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
    tags: ["AI", "RAG", "Vector"],
  },
  {
    title: "B2B Marketing Site",
    description: "Lightning‑fast website with great SEO.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "SEO", "Vercel"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-dvh w-full bg-[#0D0D0D] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] shadow-[0_0_24px_-6px_#3B82F6]"></div>
            <span className="text-sm tracking-widest uppercase text-white/90 group-hover:text-white">
              NeuroNorth
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link className="hover:text-white" href="/">Home</Link>
            <Link className="hover:text-white" href="/portfolio">Portfolio</Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5">
              <a href="#projects">See projects</a>
            </Button>
            <Button asChild className="bg-[#3B82F6] hover:bg-[#2563EB]">
              <a href="mailto:hello@neuronorth.io">Work with us</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
            <h1 className="text-4xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Portfolio
            </h1>
            <p className="mt-4 md:mt-6 text-white/70 md:text-lg max-w-2xl">
              Selected projects demonstrating our approach to shipping measurable outcomes.
            </p>
          </div>
        </section>

        <section id="projects" className="relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 text-sm text-white/60">
          <p>© {new Date().getFullYear()} NeuroNorth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-tr from-[#8B5CF6]/30 to-[#3B82F6]/30 hover:from-[#8B5CF6] hover:to-[#3B82F6] transition">
      <Card className="h-full rounded-2xl bg-[#0E0E0E] border-white/10 overflow-hidden">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/70">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {t}
              </span>
            ))}
          </div>
          {project.href && (
            <div className="mt-4">
              <Button asChild size="sm" className="bg-[#3B82F6] hover:bg-[#2563EB]">
                <a href={project.href} target="_blank" rel="noreferrer">View</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-60"
        style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
      />
    </div>
  );
}


