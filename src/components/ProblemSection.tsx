import React from "react";
import { AlertTriangle, BarChart3, Users2 } from "lucide-react";
const ProblemSection = () => {
  const failurePoints = [{
    icon: AlertTriangle,
    title: "Wrong Product",
    description: "Building something nobody wants or needs in the market. 70% of startups fail because they don't validate their product-market fit before scaling.",
    percentage: "70%",
    color: "from-red-500 to-red-600"
  }, {
    icon: BarChart3,
    title: "Wrong Go-to-Market",
    description: "Poor customer acquisition and retention strategies. 68% of startups struggle with finding the right channels and messaging to reach their target audience.",
    percentage: "68%",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: Users2,
    title: "Wrong Team",
    description: "Lack of right skills, experience, and founder-market fit. 65% of startups fail because they don't have the right people with the right expertise.",
    percentage: "65%",
    color: "from-orange-500 to-orange-600"
  }];
  return <section className="py-8 sm:py-16 bg-background relative overflow-hidden my-[100px]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl my-[500px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            <span className="text-primary">90%</span> of startups fail.<br />
            Most on 3 fronts.
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding these critical failure points is the first step toward 
            building a <span className="text-foreground font-semibold">successful venture</span>.
          </p>
        </div>

        {/* The 3 Critical Failure Points */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
            The 3 Critical Failure Points
          </h3>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scroll through each problem to understand why startups fail and how to avoid these pitfalls
          </p>
        </div>

        {/* Failure Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {failurePoints.map((point, index) => {
          const IconComponent = point.icon;
          return <div key={index} className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 animate-on-scroll opacity-0" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {point.percentage}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {point.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>;
        })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Don't become another statistic. Learn how to beat the odds.
          </p>
          
          <a href="#programs" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Explore Programs
          </a>
        </div>
      </div>
    </section>;
};
export default ProblemSection;