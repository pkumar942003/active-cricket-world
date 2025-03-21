
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1494&auto=format&fit=crop')", 
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-cricket-600/20 text-cricket-600 backdrop-blur-sm">
            Premier Cricket Academy in Bangalore
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Master the Art of Cricket at <span className="text-cricket-400">HR Sportzz</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            Professional coaching, world-class facilities, and proven methodologies to help you reach your cricketing potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-cricket-600 hover:bg-cricket-700 text-white">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              Book a Trial Session
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Stats Cards */}
      <div className="absolute bottom-12 left-0 right-0 z-10 px-4 hidden md:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "10+", label: "Professional Coaches" },
              { number: "500+", label: "Success Stories" },
              { number: "8", label: "Training Facilities" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-5 transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-4xl font-bold text-cricket-600">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
