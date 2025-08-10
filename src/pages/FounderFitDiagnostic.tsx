import React, { useEffect, useState } from "react";
import { Check, Clock, Users, TrendingUp, Star, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FounderFitDiagnostic = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const title = "Founder Fit Diagnostic Call | Acharya Ventures";
    document.title = title;

    const metaDesc = "Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder Aditya Bajaj. Get personalized action plan and investor checklist.";
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", metaDesc);

    // Countdown timer for next 8 call slots
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date();
      target.setHours(23, 59, 59, 999); // End of day
      
      const distance = target - now;
      
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
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
      {/* Hero Section - Dark Navy Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Next 8 call slots available
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stuck between{" "}
            <span className="text-yellow-400">"launched"</span> and{" "}
            <span className="text-yellow-400">"lift-off"?</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fix your biggest traction blocker in a 1-hour Founder Fit Diagnostic with serial founder{" "}
            <span className="text-yellow-400 font-semibold">Aditya Bajaj</span>.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 text-xl px-8 py-6 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          {/* Countdown Timer */}
          <div className="mt-8 flex justify-center gap-4 text-sm text-slate-400">
            <span>Next slot in:</span>
            <span className="font-mono font-bold text-yellow-400">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      {/* Why Diagnostic First Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why a diagnostic first?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Startups don't fail for lack of hustle; they fail for building the wrong thing, 
              marketing it the wrong way, or hiring the wrong team.
            </p>
            <p className="text-lg text-slate-700 mt-4 font-medium">
              A 60-minute call costs you <span className="text-orange-600 font-bold">₹499</span>—burning another{" "}
              <span className="text-orange-600 font-bold">₹50,000</span> on ads or dev costs you much more.
            </p>
          </div>

          {/* Money-back Guarantee Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-6 py-3 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Money-back guarantee if you get zero value
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What you'll walk away with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">Founder-Market-Fit Scorecard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Know if you are the right person to solve this problem.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">Traction-Leak Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Identify the single metric stalling growth and how to fix it.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">14-Day Validation or Growth Sprint Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Step-by-step tests you can run immediately.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">Personal Sprint Prescription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Recommendation to join Validation, MVP, or GTM Sprint—only if it fits.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who This Call Is Perfect For */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-500" />
                Who this call is perfect for
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Founders 3-18 months in, stitched together an MVP, but revenue is flat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Side-hustlers who've spent on marketing/dev and still hear crickets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Early teams prepping for pre-seed and need an outside lens on metrics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Coachable entrepreneurs who prefer data over guesswork.</span>
                </li>
              </ul>
            </div>

            {/* Who It's Not For */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-red-500" />
                Who it's not for
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">"Get-rich-quick" seekers looking for the next crypto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Founders who refuse feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Anyone who thinks more funding alone will fix the business.</span>
                </li>
              </ul>

              {/* Humorous Block */}
              <div className="mt-6 p-4 bg-slate-100 rounded-lg border-l-4 border-orange-500">
                <p className="text-slate-700 italic">
                  If you're "already the smartest person in the room," congrats—go build your unicorn; 
                  we'll watch the IPO from our sofas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aditya Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Aditya Bajaj</h2>
            <div className="flex justify-center items-center gap-4 text-slate-600 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 years
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                3 exits
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                547 founders mentored
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                ₹200 Cr raised
              </span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <blockquote className="text-lg text-slate-700 leading-relaxed italic">
              "I have been where you are multiple times. Some success and many failures later, 
              I realized why 90% of the startups end up failing despite raising external capital. 
              I'm on a mission to change that stat and enabling more founders to build, scale and 
              thrive with clarity and confidence."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Success Snapshots Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Success Snapshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-slate-50">
              <CardContent className="p-6">
                <blockquote className="text-slate-700 mb-4">
                  "Aditya spotted in 20 minutes what we missed for six months—pivoted, hit ₹1L MRR."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">RP</span>
                  </div>
                  <span className="font-medium text-slate-900">Rahul P.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-slate-50">
              <CardContent className="p-6">
                <blockquote className="text-slate-700 mb-4">
                  "Call saved us ₹5L in dev costs and mapped our GTM in one week."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">PS</span>
                  </div>
                  <span className="font-medium text-slate-900">Priya S.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Simple Process</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Book your slot and pay ₹499</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Fill a 5-minute pre-call form</h3>
                <p className="text-slate-600">(metrics, goals, links)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">1-hour Zoom — live diagnosis, Q&A, personalised roadmap</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Action plan PDF emailed within 24h</h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Credit — apply your ₹499 toward any sprint within 14 days</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">FAQ</h2>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Is the call really 1-on-1?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Yes—direct with Aditya, no junior coach.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">What if I already know I need funding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">We'll verify if funding is the right next step or if traction is the first fix.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Is there a replay?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">You will receive a recap of the call and a personalized plan PDF within 24 hours of the call.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="py-8 px-4 bg-green-50 border-y border-green-200">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 text-green-700">
            <Shield className="w-6 h-6" />
            <span className="text-lg font-semibold">100% Value-Back Promise</span>
          </div>
          <p className="text-green-600 mt-2">
            If after the call you feel it gave you zero clarity, email us within 24h for a full refund.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to remove guesswork and unlock your next milestone?
          </h2>
          
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 text-xl px-8 py-6 rounded-full font-bold transform hover:scale-105 transition-all duration-300 mb-4"
          >
            Book My Diagnostic Call – ₹499
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <p className="text-slate-400 text-sm">
            Limited to 8 calls per week to ensure depth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FounderFitDiagnostic;
