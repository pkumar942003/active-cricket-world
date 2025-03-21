
import { Button } from "@/components/ui/button";
import { Activity, Calendar, Clock, Star } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Junior Academy (Ages 6-12)",
      description: "A fun and engaging introduction to cricket focusing on basic skills and love for the game.",
      features: [
        "Fundamental batting, bowling, and fielding skills",
        "Age-appropriate fitness activities",
        "Mini-matches and game scenarios",
        "Holiday camps and special events"
      ],
      icon: <Star className="h-6 w-6" />,
      level: "Beginner",
      duration: "2-3 sessions per week",
      price: "₹5,000/month"
    },
    {
      title: "Youth Development (Ages 13-16)",
      description: "Comprehensive training focused on technique refinement and competitive match preparation.",
      features: [
        "Advanced technique development",
        "Position-specific training",
        "Match strategy and game awareness",
        "Fitness and strength conditioning"
      ],
      icon: <Activity className="h-6 w-6" />,
      level: "Intermediate",
      duration: "3-4 sessions per week",
      price: "₹7,500/month"
    },
    {
      title: "Elite Performance (Ages 17+)",
      description: "High-performance program for serious cricketers aiming for district, state, or national selection.",
      features: [
        "Personalized coaching plans",
        "Video analysis and performance tracking",
        "Mental conditioning and match preparation",
        "Tournament exposure and selection opportunities"
      ],
      icon: <Calendar className="h-6 w-6" />,
      level: "Advanced",
      duration: "5-6 sessions per week",
      price: "₹12,000/month"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Our <span className="text-cricket-600">Programs</span></h2>
          <p className="section-subtitle">
            Structured training programs designed for cricketers at every stage of development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-cricket-600 to-cricket-700 p-6 text-white">
                <h3 className="text-xl font-bold">{program.title}</h3>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-muted-foreground mb-6">{program.description}</p>
                
                <div className="space-y-4 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-cricket-100 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-cricket-600"></div>
                      </div>
                      <span className="ml-3 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-cricket-600 mr-2" />
                    <span className="text-sm">Level: {program.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-cricket-600 mr-2" />
                    <span className="text-sm">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center font-medium">
                    <span>Price: {program.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-secondary">
                <Button className="w-full bg-cricket-600 hover:bg-cricket-700">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Looking for specialized training? We also offer one-on-one coaching sessions and custom training plans.
          </p>
          <Button variant="outline" className="border-cricket-600 text-cricket-600 hover:bg-cricket-50">
            Contact Us for Custom Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
