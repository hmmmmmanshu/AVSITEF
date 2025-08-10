import React, { useEffect, useState } from "react";
import { Check, Clock, Users, TrendingUp, Star, ArrowRight, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rectTop = el.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerWidth < 768 ? 100 : 80;
    window.scrollTo({ top: rectTop - offset, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with video-ready background - full viewport */}
      <section className="relative overflow-hidden text-white px-4 min-h-[100svh] flex items-center">
        {/* Video background placeholder (add /public/hero-bg.mp4) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero background video"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative container mx-auto max-w-3xl text-center py-12 sm:py-20">
          <div className="inline-flex items-center gap-2 bg-pulse-500/20 border border-pulse-500/30 text-pulse-300 px-3 py-1.5 rounded-full text-sm sm:text-base font-medium mb-6 sm:mb-8">
            <Clock className="w-4 h-4" /> Next 8 call slots available
          </div>

          <h1 className="text-[2.6rem] leading-tight sm:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Stuck between <span className="text-pulse-300">"launched"</span> and
            <br className="hidden sm:block" /> <span className="text-pulse-300">"lift-off"?</span>
          </h1>

          {/* Typing animation sub-line (slower) */}
          <div className="mb-7 sm:mb-10 text-white/85">
            <TypingAnimation startOnView={true} speedMs={70} className="text-lg sm:text-2xl">
              Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder Aditya Bajaj.
            </TypingAnimation>
          </div>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-pulse-600 text-primary-foreground text-lg sm:text-xl w-full sm:w-auto px-7 sm:px-9 py-5 sm:py-6 rounded-full font-bold transition-all duration-300"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <div className="mt-5 sm:mt-8 flex flex-col items-center gap-4 text-sm sm:text-base text-white/80">
            <div className="flex items-center gap-2">
              <span>Next slot in:</span>
              <span className="font-mono font-bold text-pulse-300">
                {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            {/* Animated Down Arrow to next section */}
            <button
              type="button"
              onClick={() => smoothScrollTo("why")}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-2 text-white hover:bg-white/20 transition"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Diagnostic First */}
      <section id="why" className="snap-start py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Why a diagnostic first?</h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Startups don't fail for lack of hustle; they fail for building the wrong thing,
              marketing it the wrong way, or hiring the wrong team.
            </p>
            <p className="text-base sm:text-lg text-foreground mt-4 font-medium">
              A 60-minute call costs you <span className="text-pulse-600 font-bold">₹499</span> — burning another
              <span className="text-pulse-600 font-bold"> ₹50,000</span> on ads or dev costs you much more.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium">
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
      <section className="py-12 sm:py-16 px-0 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="px-4 text-2xl sm:text-3xl font-bold text-foreground text-center mb-6 sm:mb-10">Simple Process</h2>
          <StickyScrollRevealDemo />
        </div>
      </section>

      {/* About Aditya */}
      <section className="py-12 sm:py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[120px,1fr] gap-6 items-start">
            <div className="flex justify-center md:justify-start">
              <img src="/aditya-bajaj.jpg" alt="Aditya Bajaj" className="h-24 w-24 rounded-full object-cover border border-border shadow-sm" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Aditya Bajaj</h2>
              <div className="flex flex-wrap gap-3 text-muted-foreground mt-3">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm"><Clock className="w-4 h-4" /> 15 years</span>
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm"><TrendingUp className="w-4 h-4" /> 3 exits</span>
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm"><Users className="w-4 h-4" /> 547 founders mentored</span>
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm"><Star className="w-4 h-4" /> ₹200 Cr raised</span>
              </div>
              <div className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm mt-4">
                <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  I have been where you are multiple times. Some success and many failures later, I realized why 90% of the startups end up failing despite raising external capital. I am on a mission to change that stat and enable more founders to build, scale, and thrive with clarity and confidence.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Snapshots */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">Success Snapshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { quote: "Aditya spotted in 20 minutes what we missed for six months — pivoted, hit ₹1L MRR.", initials: "RP", name: "Rahul P." },
              { quote: "Call saved us ₹5L in dev costs and mapped our GTM in one week.", initials: "PS", name: "Priya S." },
            ].map((q, i) => (
              <Card key={i} className="border border-border bg-muted/40">
                <CardContent className="p-5">
                  <blockquote className="text-sm sm:text-base text-foreground/80 mb-4">{q.quote}</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pulse-100 rounded-full flex items-center justify-center">
                      <span className="text-pulse-600 font-semibold">{q.initials}</span>
                    </div>
                    <span className="font-medium text-foreground">{q.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">FAQ</h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "Is the call really 1-on-1?", a: "Yes — direct with Aditya, no junior coach." },
              { q: "What if I already know I need funding?", a: "We will verify if funding is the right next step or if traction is the first fix." },
              { q: "Is there a replay?", a: "You will receive a recap of the call and a personalized plan PDF within 24 hours of the call." },
            ].map((f, i) => (
              <Card key={i} className="border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-foreground">{f.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="py-8 px-4 bg-green-50 border-y border-green-200">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-green-700">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg font-semibold">100% Value-Back Promise</span>
          </div>
          <p className="text-sm sm:text-base text-green-600 mt-2">If after the call you feel it gave you zero clarity, email us within 24 hours for a full refund.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-dark-900 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to remove guesswork and unlock your next milestone?</h2>
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-pulse-600 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full font-bold transition-all duration-300 mb-3"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <p className="text-white/70 text-xs sm:text-sm">Limited to 8 calls per week to ensure depth.</p>
        </div>
      </section>
    </div>
  );
};

export default FounderFitDiagnostic;
