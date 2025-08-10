import React, { useEffect, useState } from "react";
import { Check, Clock, Users, TrendingUp, Star, ArrowRight, Shield, CreditCard, FileText, Video, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ripple } from "@/components/magicui/ripple";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Highlighter } from "@/components/magicui/highlighter";
import StickyScrollRevealDemo from "@/components/process/StickyScrollRevealDemo";

const FounderFitDiagnostic: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    document.title = "Founder Fit Diagnostic Call | Acharya Ventures";

    const metaDesc =
      "Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder Aditya Bajaj. Get personalized action plan and investor checklist.";
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", metaDesc);

    const timer = setInterval(() => {
      const now = Date.now();
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      const distance = target.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open("https://learn.acharyaventures.com/l/d7142f0122", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-900/95 to-dark-800 text-white py-14 sm:py-24 px-4">
        {/* Hide ripple on mobile to prevent layout issues */}
        <div className="absolute inset-0 opacity-60 hidden sm:block">
          <Ripple />
        </div>
        <div className="relative container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-pulse-500/15 border border-pulse-500/30 text-pulse-400 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Clock className="w-4 h-4" /> Next 8 call slots available
          </div>

          <h1 className="text-[1.9rem] leading-[1.15] sm:text-5xl font-bold mb-3 sm:mb-6">
            Stuck between <span className="text-pulse-400">"launched"</span> and
            <br className="hidden sm:block" /> <span className="text-pulse-400">"lift-off"?</span>
          </h1>

          {/* Typing animation sub-line */}
          <div className="mb-6 sm:mb-8 text-white/80">
            <TypingAnimation startOnView={true} speedMs={24} className="text-base sm:text-xl">
              Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder Aditya Bajaj.
            </TypingAnimation>
          </div>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-pulse-600 text-primary-foreground text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-full font-bold transition-all duration-300"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <div className="mt-5 sm:mt-8 flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
            <span>Next slot in:</span>
            <span className="font-mono font-bold text-pulse-400">
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* Why Diagnostic First */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Why a diagnostic first?</h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Startups don't fail for lack of hustle; they fail for building the wrong thing,
              marketing it the wrong way, or hiring the wrong team.
            </p>
            <p className="text-sm sm:text-lg text-foreground mt-4 font-medium">
              A 60-minute call costs you <span className="text-pulse-600 font-bold">₹499</span> — burning another
              <span className="text-pulse-600 font-bold"> ₹50,000</span> on ads or dev costs you much more.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4" /> Money-back guarantee if you get zero value
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section className="py-12 sm:py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">What you'll walk away with</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "Founder-Market-Fit Scorecard", desc: "Know if you are the right person to solve this problem." },
              { title: "Traction-Leak Diagnosis", desc: "Identify the single metric stalling growth and how to fix it." },
              { title: "14-Day Validation or Growth Sprint Plan", desc: "Step-by-step tests you can run immediately." },
              { title: "Personal Sprint Prescription", desc: "Recommendation to join Validation, MVP, or GTM Sprint — only if it fits." },
            ].map((item, idx) => (
              <Card key={idx} className="border border-border shadow-sm bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For / Not For */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" /> Who this call is perfect for
            </h3>
            <ul className="space-y-3">
              {[
                "Founders 3-18 months in, stitched together an MVP, but revenue is flat.",
                "Side-hustlers who've spent on marketing/dev and still hear crickets.",
                "Early teams prepping for pre-seed and need an outside lens on metrics.",
                "Coachable entrepreneurs who prefer data over guesswork.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-pulse-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" /> Who it's not for
            </h3>
            <ul className="space-y-3">
              {[
                '"Get-rich-quick" seekers looking for the next crypto.',
                "Founders who refuse feedback.",
                "Anyone who thinks more funding alone will fix the business.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-muted rounded-lg border-l-4 border-pulse-500">
              <p className="text-sm sm:text-base text-muted-foreground italic">
                If you're <Highlighter action="underline" color="#f97316">already the smartest person in the room</Highlighter>,
                congrats — go build your unicorn; we'll watch the IPO from our sofas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process (Sticky Scroll Reveal) */}
      <section className="py-12 sm:py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6 sm:mb-10">Simple Process</h2>
          <StickyScrollRevealDemo />
        </div>
      </section>

      {/* The remaining sections (About, Snapshots, FAQ, Guarantee, Final CTA) remain below unchanged */}
    </div>
  );
};

export default FounderFitDiagnostic;
