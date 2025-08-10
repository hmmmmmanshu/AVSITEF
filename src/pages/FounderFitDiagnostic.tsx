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
      {/* Hero with improved mobile formatting - full viewport */}
      <section className="relative overflow-hidden text-white min-h-[100svh] flex items-center">
        {/* Better fallback background for when video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        
        {/* Video background (optional - will fallback to gradient above) */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero background video"
          onError={(e) => {
            // Hide video on error, fallback to gradient background
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        />
        
        {/* Refined overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative w-full max-w-4xl mx-auto text-center px-6 py-16 sm:px-8 sm:py-20">
          {/* Improved badge styling for mobile */}
          <div className="inline-flex items-center gap-2 bg-pulse-500/25 border border-pulse-400/40 text-pulse-200 px-4 py-2 rounded-full text-sm font-medium mb-8 sm:mb-10 backdrop-blur-sm">
            <Clock className="w-4 h-4" /> Next 8 call slots available
          </div>

          {/* LARGE, CATCHY typography that hooks users immediately */}
          <h1 className="text-4xl leading-[1.05] sm:text-7xl lg:text-8xl font-black mb-8 sm:mb-10 tracking-tight px-2 animate-fade-in">
            <span className="block text-white">Stuck between</span>
            <span className="block text-pulse-300 text-shadow-lg">"launched"</span>
            <span className="block text-white">and</span>
            <span className="block text-pulse-300 text-shadow-lg">"lift-off"?</span>
          </h1>

          {/* Larger, more impactful sub-headline */}
          <div className="mb-10 sm:mb-14 text-white/95 px-2">
            <TypingAnimation startOnView={true} speedMs={60} className="text-lg leading-relaxed sm:text-3xl lg:text-4xl font-medium">
              Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder Aditya Bajaj.
            </TypingAnimation>
          </div>

          {/* Enhanced CTA button for mobile */}
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-pulse-600 text-white text-base sm:text-xl w-full max-w-sm sm:max-w-none sm:w-auto px-8 py-4 sm:px-9 sm:py-6 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Improved spacing and layout for mobile */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-6 text-sm sm:text-base text-white/80">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span>Next slot in:</span>
              <span className="font-mono font-bold text-pulse-300 text-base">
                {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            
            {/* Enhanced down arrow for mobile */}
            <button
              type="button"
              onClick={() => smoothScrollTo("why")}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Diagnostic First - Enhanced with animations */}
      <section id="why" className="relative snap-start py-16 sm:py-24 px-4 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pulse-100/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pulse-200/30 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pulse-300/10 rounded-full blur-md animate-float" style={{animationDelay: "2s"}}></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            {/* Animated section badge */}
            <div className="inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-pulse-500 rounded-full animate-pulse"></div>
              Why Start Here?
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Why a <span className="text-pulse-600">diagnostic</span> first?
            </h2>
            
            <div className="space-y-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Startups don't fail for lack of hustle; they fail for building the <span className="text-foreground font-semibold">wrong thing</span>,
                marketing it the <span className="text-foreground font-semibold">wrong way</span>, or hiring the <span className="text-foreground font-semibold">wrong team</span>.
              </p>
              
              {/* Highlighted cost comparison with animation */}
              <div className="bg-gradient-to-r from-pulse-50 to-orange-50 border-l-4 border-pulse-500 p-6 rounded-r-xl animate-fade-in" style={{animationDelay: "0.6s"}}>
                <p className="text-lg sm:text-xl text-foreground font-medium">
                  A 60-minute call costs you <span className="text-pulse-600 font-bold text-2xl">₹499</span> — burning another
                  <span className="text-red-600 font-bold text-2xl"> ₹50,000</span> on ads or dev costs you <span className="underline decoration-red-500">much more</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced guarantee section */}
          <div className="text-center animate-fade-in" style={{animationDelay: "0.8s"}}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Shield className="w-5 h-5 animate-pulse" /> 
              <span>Money-back guarantee if you get zero value</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
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

      {/* Perfect For / Not For - Enhanced Design */}
      <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Perfect Fit Assessment
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Is this <span className="text-pulse-600">right for you?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Perfect For - Enhanced */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800">Perfect for you if...</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { icon: "🚀", text: "Founders 3-18 months in, stitched together an MVP, but revenue is flat." },
                    { icon: "🦴", text: "Side-hustlers who've spent on marketing/dev and still hear crickets." },
                    { icon: "💰", text: "Early teams prepping for pre-seed and need an outside lens on metrics." },
                    { icon: "📊", text: "Coachable entrepreneurs who prefer data over guesswork." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                      <span className="text-base sm:text-lg text-green-800 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Not For - Enhanced */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-800">Not a fit if...</h3>
                </div>
                
                <ul className="space-y-4 mb-6">
                  {[
                    { icon: "🪙", text: '"Get-rich-quick" seekers looking for the next crypto.' },
                    { icon: "🙈", text: "Founders who refuse feedback." },
                    { icon: "💸", text: "Anyone who thinks more funding alone will fix the business." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                      <span className="text-base sm:text-lg text-red-800 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Humorous callout */}
                <div className="relative bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-pulse-500 p-4 rounded-r-xl">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-pulse-500 rounded-full animate-ping"></div>
                  <p className="text-base sm:text-lg text-red-800 italic font-medium">
                    If you're <Highlighter action="underline" color="#f97316">already the smartest person in the room</Highlighter>,
                    congrats — go build your unicorn; we'll watch the IPO from our sofas. 🛋️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process - Proper Container */}
      <section className="py-12 sm:py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-pulse-500 rounded-full animate-pulse"></div>
              How It Works
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
              Simple <span className="text-pulse-600">Process</span>
            </h2>
          </div>
          <StickyScrollRevealDemo />
        </div>
      </section>

      {/* About Aditya - Enhanced */}
      <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-br from-muted/40 via-background to-muted/60 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-pulse-100/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-pulse-200/30 rounded-full blur-xl animate-float"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet Your Mentor
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
              About <span className="text-pulse-600">Aditya Bajaj</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 sm:gap-12 items-center">
            {/* Enhanced Photo Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glowing ring around photo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pulse-500 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative">
                  <img 
                    src="/aditya-bajaj.jpg" 
                    alt="Aditya Bajaj - Serial Entrepreneur & Startup Mentor" 
                    className="h-64 w-64 rounded-full object-cover border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image doesn't exist - simple colored placeholder
                      (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmOTczMTYiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMDAiIHI9IjUwIiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTUwIDIwMCBRIDEyOCAxNTAgMjA2IDIwMCBMIDIwNiAyNTYgTCA1MCAyNTYgWiIgZmlsbD0iI2ZmZmZmZiIvPjx0ZXh0IHg9IjEyOCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZjk3MzE2Ij5BRElUWUEgQkFKQUo8L3RleHQ+PC9zdmc+";
                    }}
                  />
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="text-center lg:text-left">
              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "15 years", value: "Experience" },
                  { icon: TrendingUp, label: "3 exits", value: "Successful" },
                  { icon: Users, label: "547", value: "Founders mentored" },
                  { icon: Star, label: "₹200 Cr", value: "Capital raised" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm border border-pulse-200/50 rounded-xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-6 h-6 text-pulse-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-sm border border-pulse-200/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-pulse-500 leading-none">"</div>
                  <blockquote className="text-base sm:text-lg text-foreground leading-relaxed italic">
                    I have been where you are multiple times. Some success and many failures later, I realized why 90% of the startups end up failing despite raising external capital. I am on a mission to change that stat and enable more founders to build, scale, and thrive with clarity and confidence.
                  </blockquote>
                </div>
                <div className="text-right mt-4">
                  <div className="text-pulse-600 font-semibold">— Aditya Bajaj</div>
                  <div className="text-sm text-muted-foreground">Serial Entrepreneur & Startup Mentor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Snapshots - Enhanced */}
      <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-br from-background via-pulse-50/30 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-pulse-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-pulse-300/15 rounded-full blur-lg animate-pulse-slow"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Real Results
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Success <span className="text-pulse-600">Snapshots</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real founders, real breakthroughs, real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                quote: "Aditya spotted in 20 minutes what we missed for six months — pivoted, hit ₹1L MRR.", 
                initials: "RP", 
                name: "Rahul P.",
                company: "SaaS Startup",
                metric: "₹1L MRR",
                timeframe: "6 months after call"
              },
              { 
                quote: "Call saved us ₹5L in dev costs and mapped our GTM in one week.", 
                initials: "PS", 
                name: "Priya S.",
                company: "EdTech Platform",
                metric: "₹5L saved",
                timeframe: "1 week implementation"
              },
            ].map((testimonial, i) => (
              <div key={i} className="group">
                <Card className="border-0 bg-gradient-to-br from-white via-white to-pulse-50/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8">
                    {/* Quote */}
                    <div className="mb-6">
                      <div className="text-4xl text-pulse-500 mb-4 leading-none">"</div>
                      <blockquote className="text-base sm:text-lg text-foreground leading-relaxed italic">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-pulse-50/50 rounded-xl border border-pulse-200/30">
                      <div className="text-center">
                        <div className="text-xl font-bold text-pulse-600">{testimonial.metric}</div>
                        <div className="text-xs text-muted-foreground">Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-foreground">{testimonial.timeframe}</div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Additional social proof */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-pulse-200/50 px-6 py-4 rounded-full shadow-lg">
              <div className="flex -space-x-2">
                {Array.from({length: 5}).map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-pulse-400 to-pulse-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">500+ founders</span>
                <span className="text-muted-foreground"> have seen breakthrough results</span>
              </div>
            </div>
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

      {/* Final CTA - Enhanced */}
      <section className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pulse-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pulse-600/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pulse-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            Only 8 slots available this week
          </div>

          <h2 className="text-3xl sm:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to remove <span className="text-pulse-300">guesswork</span> and unlock your next milestone?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ founders who turned uncertainty into clarity with one call.
          </p>

          {/* Enhanced CTA */}
          <div className="space-y-6">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-7 rounded-full font-bold transition-all duration-300 mb-4 shadow-2xl hover:shadow-pulse-500/25 hover:scale-105 transform"
            >
              <span className="flex items-center gap-3">
                Book My Diagnostic Call – ₹499
                <ArrowRight className="w-6 h-6" />
              </span>
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Money-back guarantee</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Limited to 8 calls per week</span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default FounderFitDiagnostic;
