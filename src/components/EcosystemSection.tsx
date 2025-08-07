import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    category: "Program",
    title: "Zero to One Launchpad",
    src: "/zero-to-one.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Zero to One Launchpad</h3>
            <p className="text-muted-foreground">From idea to product-market fit</p>
          </div>
          <p className="sm:hidden text-muted-foreground text-sm">Validate your idea, build an MVP, and land your first paying customers.</p>
          
          <div className="space-y-4 hidden sm:block">
            <div>
              <h4 className="font-semibold mb-2">Duration</h4>
              <p className="text-sm text-muted-foreground">8-12 weeks</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Investment</h4>
              <p className="text-sm text-muted-foreground">₹4,999 - ₹49,999</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Founder-market fit validation</li>
                <li>• MVP development guidance</li>
                <li>• Customer discovery framework</li>
                <li>• Investor-ready pitch deck</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Expected Outcomes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Validated product-market fit</li>
                <li>• First 10 paying customers</li>
                <li>• Clear go-to-market strategy</li>
              </ul>
            </div>
          </div>
          
          <a href="/programs/zero-to-one" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn More
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "Program",
    title: "One to Ten Acceleration",
    src: "/one-to-ten.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">One to Ten Acceleration</h3>
            <p className="text-muted-foreground">From traction to scale</p>
          </div>
          <p className="sm:hidden text-muted-foreground text-sm">Scale early traction with growth systems and sales ops.</p>
          
          <div className="space-y-4 hidden sm:block">
            <div>
              <h4 className="font-semibold mb-2">Duration</h4>
              <p className="text-sm text-muted-foreground">6 months</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Investment</h4>
              <p className="text-sm text-muted-foreground">By application</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Growth marketing strategies</li>
                <li>• Sales optimization</li>
                <li>• Team building guidance</li>
                <li>• Operational excellence</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Expected Outcomes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• ₹1 Cr+ annual run rate</li>
                <li>• Scalable growth systems</li>
                <li>• Strong team foundation</li>
              </ul>
            </div>
          </div>
          
          <a href="/programs/one-to-ten" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn More
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "Program",
    title: "Ten to Hundred Growth",
    src: "/ten-to-hundred.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ten to Hundred Growth Engine</h3>
            <p className="text-muted-foreground">Scale to growth engine</p>
          </div>
          <p className="sm:hidden text-muted-foreground text-sm">Build repeatable growth and prepare for Series A.</p>
          
          <div className="space-y-4 hidden sm:block">
            <div>
              <h4 className="font-semibold mb-2">Duration</h4>
              <p className="text-sm text-muted-foreground">9 months</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Investment</h4>
              <p className="text-sm text-muted-foreground">By application</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Advanced growth strategies</li>
                <li>• Leadership development</li>
                <li>• Series A preparation</li>
                <li>• International expansion</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Expected Outcomes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• ₹10 Cr+ ARR</li>
                <li>• Series A funding ready</li>
                <li>• International presence</li>
              </ul>
            </div>
          </div>
          
          <a href="/programs/ten-to-hundred" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn More
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "Network",
    title: "Founder Community",
    src: "/founder-community.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Founder Community</h3>
            <p className="text-muted-foreground">Connect with like-minded entrepreneurs</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Community Size</h4>
              <p className="text-sm text-muted-foreground">547+ active founders</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Private forums and discussions</li>
                <li>• Weekly networking events</li>
                <li>• Peer support and mentorship</li>
                <li>• Expert AMA sessions</li>
                <li>• Resource sharing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Events</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 50+ events per month</li>
                <li>• 25+ cities covered</li>
                <li>• Weekly founder meetups</li>
                <li>• Industry deep dives</li>
              </ul>
            </div>
          </div>
          
          <a href="/community" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Join Community
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "Services",
    title: "Fractional Expert Teams",
    src: "/fractional-experts.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Fractional Expert Teams</h3>
            <p className="text-muted-foreground">Access to expert leadership</p>
          </div>
          <p className="sm:hidden text-muted-foreground text-sm">On-demand CXO talent for strategy and execution.</p>
          
          <div className="space-y-4 hidden sm:block">
            <div>
              <h4 className="font-semibold mb-2">Available Roles</h4>
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium">Fractional CTO</h5>
                  <p className="text-sm text-muted-foreground">₹2.5L/month</p>
                  <p className="text-xs text-muted-foreground">Technical strategy, team building, architecture</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium">Fractional CMO</h5>
                  <p className="text-sm text-muted-foreground">₹2L/month</p>
                  <p className="text-xs text-muted-foreground">Growth strategy, marketing, analytics</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium">Fractional CFO</h5>
                  <p className="text-sm text-muted-foreground">₹3L/month</p>
                  <p className="text-xs text-muted-foreground">Financial modeling, investor relations</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Track Record</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 50+ experts available</li>
                <li>• 100+ startups served</li>
                <li>• 15+ years avg experience</li>
                <li>• ₹50 Cr+ value created</li>
              </ul>
            </div>
          </div>
          
          <a href="/services/fractional-experts" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Hire Expert
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "Studio",
    title: "Co-Build & Co-Invest",
    src: "/co-build-invest.jpg",
    content: (
      <div className="bg-background text-foreground p-8 rounded-3xl max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Co-Build & Co-Invest</h3>
            <p className="text-muted-foreground">Partnership for exceptional founders</p>
          </div>
          <p className="sm:hidden text-muted-foreground text-sm">Partner with us to co-build and co-invest in exceptional ventures.</p>
          
          <div className="space-y-4 hidden sm:block">
            <div>
              <h4 className="font-semibold mb-2">Co-Build Services</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Technical development</li>
                <li>• Product strategy</li>
                <li>• Team building</li>
                <li>• Go-to-market execution</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Co-Invest Benefits</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Seed funding available</li>
                <li>• Strategic guidance</li>
                <li>• Network access</li>
                <li>• Follow-on support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Track Record</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 25+ companies built</li>
                <li>• ₹100 Cr+ invested</li>
                <li>• 8 successful exits</li>
                <li>• ₹500 Cr+ value created</li>
              </ul>
            </div>
          </div>
          
          <a href="/studio/co-build" className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium hover:opacity-90 transition-opacity">
            Apply Now
          </a>
        </div>
      </div>
    ),
  },
];

const EcosystemSection = () => {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <section className="bg-background py-12 sm:py-20" id="programs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center space-y-4">
          <h2 className="section-title text-foreground">Our Complete Ecosystem</h2>
          <p className="section-subtitle text-muted-foreground mx-auto">
            Everything you need to build, scale, and succeed - from idea to IPO
          </p>
        </div>
      </div>
      <Carousel items={cards} />
    </section>
  );
};

export default EcosystemSection;