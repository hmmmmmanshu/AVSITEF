import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";

const About: React.FC = () => {
  useEffect(() => {
    const title = "About Acharya Ventures | Why, Mission & Programs";
    document.title = title;

    const metaDesc =
      "Learn about Acharya Ventures—our mission, founder community, programs, services, and studio to go from zero to scale.";
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", metaDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/about");

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Acharya Ventures",
      url: window.location.origin + "/about",
      publisher: { "@type": "Organization", name: "Acharya Ventures" },
      description: metaDesc,
    } as const;

    const existing = document.getElementById("about-jsonld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "about-jsonld";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-28 pb-20 text-left">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in">
            About Acharya Ventures
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed animate-fade-in [animation-delay:120ms]">
            We help ambitious founders turn ideas into products, products into growth, and growth into enduring companies.
          </p>

          <section className="mt-10 animate-fade-in [animation-delay:200ms]">
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="text-lg font-semibold text-foreground">
                We believe the future is built by small, focused teams with superpowers.
              </p>
              <p className="mt-2 text-muted-foreground">
                That’s why we blend human intuition with practical AI and a tight operator network to compound founder momentum.
              </p>
            </div>
          </section>

          <section className="mt-10 space-y-6 animate-fade-in [animation-delay:260ms]">
            <h2 className="text-2xl font-semibold text-foreground">What we do</h2>
            <div className="grid gap-4">
              <div className="rounded-lg bg-secondary/30 p-5">
                <h3 className="font-semibold text-foreground">Programs</h3>
                <p className="text-muted-foreground mt-1">
                  Guided tracks for each stage: Zero-to-One (ship an MVP), One-to-Ten (find repeatable growth), Ten-to-Hundred (scale systems).
                </p>
              </div>
              <div className="rounded-lg bg-secondary/30 p-5">
                <h3 className="font-semibold text-foreground">Founder Community</h3>
                <p className="text-muted-foreground mt-1">
                  A trusted circle of peers, operators, and fractional experts to unblock you fast and share real playbooks.
                </p>
              </div>
              <div className="rounded-lg bg-secondary/30 p-5">
                <h3 className="font-semibold text-foreground">Services</h3>
                <p className="text-muted-foreground mt-1">
                  Fractional product, growth, and engineering firepower to help you execute when it matters most.
                </p>
              </div>
              <div className="rounded-lg bg-secondary/30 p-5">
                <h3 className="font-semibold text-foreground">Studio</h3>
                <p className="text-muted-foreground mt-1">
                  We co-build with exceptional founders and spin up new ventures around clear customer problems.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 animate-fade-in [animation-delay:320ms]">
            <div className="rounded-xl border text-card-foreground bg-background p-6 shadow-sm">
              <p className="font-medium text-foreground">Our principles</p>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                <li>Ship small, learn fast, compound weekly.</li>
                <li>Default to clarity and real customer signals.</li>
                <li>Automate the boring; keep humans for judgment.</li>
                <li>Make it beautiful and reliable—design is a feature.</li>
              </ul>
            </div>
          </section>

          <section className="mt-12 animate-fade-in [animation-delay:380ms]">
            <h2 className="text-2xl font-semibold text-foreground">Who we’re for</h2>
            <p className="mt-2 text-muted-foreground">
              Builders who want momentum: operators leaving big tech, repeat founders, and first-time founders with sharp domain insight.
            </p>
          </section>

          <aside className="mt-12 rounded-xl bg-primary/5 p-6 animate-fade-in [animation-delay:420ms]">
            <p className="text-foreground font-semibold">Ready to collaborate?</p>
            <p className="mt-1 text-muted-foreground">
              Tell us where you are on the journey and we’ll point you to the right program or partner.
            </p>
            <div className="mt-4">
              <Button asChild size="lg">
                <a href="#contact" aria-label="Contact Acharya Ventures">Contact us</a>
              </Button>
            </div>
          </aside>
        </article>
        {/* Moved from Home: Proven Framework and Results */}
        <Features />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
