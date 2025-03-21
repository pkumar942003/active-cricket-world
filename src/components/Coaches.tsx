
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const Coaches = () => {
  const coaches = [
    {
      name: "Rahul Sharma",
      position: "Head Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bio: "Former Ranji Trophy player with 15+ years of coaching experience. Specializes in batting technique and mental conditioning.",
      achievements: [
        "Level 3 BCCI Certified Coach",
        "Head Coach of Karnataka U-19 Team (2015-2018)",
        "Coached 12 players who reached national level"
      ]
    },
    {
      name: "Anjali Patel",
      position: "Batting Specialist",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Former India women's international cricketer. Her technical expertise and analytical approach have helped transform many batsmen.",
      achievements: [
        "Represented India in 24 ODIs",
        "Level 2 ECB Coaching Certification",
        "Specialized in video analysis and technique correction"
      ]
    },
    {
      name: "Vikram Singh",
      position: "Bowling Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bio: "Fast bowling expert who played at the domestic level. Known for his ability to develop bowlers of all styles.",
      achievements: [
        "150+ first-class wickets",
        "Specialized training in sports biomechanics",
        "Developed 5 fast bowlers selected for national camps"
      ]
    },
    {
      name: "David Kumar",
      position: "Fitness Trainer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bio: "Sports science specialist with expertise in cricket-specific fitness training and injury prevention programs.",
      achievements: [
        "MS in Sports Science",
        "Certified Strength & Conditioning Specialist",
        "Previously worked with IPL franchises"
      ]
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Our <span className="text-cricket-600">Expert Coaches</span></h2>
          <p className="section-subtitle">
            Learn from experienced professionals with proven track records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden group hover-scale"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{coach.name}</h3>
                  <p className="text-cricket-300">{coach.position}</p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">{coach.bio}</p>
                
                <div className="space-y-2 mb-4">
                  {coach.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <Trophy className="h-4 w-4 text-cricket-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-cricket-600 text-cricket-600 hover:bg-cricket-50"
                >
                  Full Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
