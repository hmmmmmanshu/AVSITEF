import React from "react";
import { Users, TrendingUp, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "547",
      label: "Founders Mentored",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "₹200 Cr",
      label: "Capital Raised",
      color: "text-primary"
    },
    {
      icon: Star,
      number: "4.9★",
      label: "Average Rating",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;