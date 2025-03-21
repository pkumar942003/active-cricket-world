
import { Award, Target, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-10 w-10 text-cricket-600" />,
      title: "Personalized Training",
      description: "We create custom training programs tailored to individual player strengths and weaknesses."
    },
    {
      icon: <Users className="h-10 w-10 text-cricket-600" />,
      title: "Expert Coaching",
      description: "Learn from former professionals and certified coaches with international experience."
    },
    {
      icon: <Award className="h-10 w-10 text-cricket-600" />,
      title: "Proven Track Record",
      description: "Our academy has produced numerous district, state, and national level players."
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">About <span className="text-cricket-600">HR Sportzz</span></h2>
          <p className="section-subtitle">
            Building cricket champions through discipline, technique, and passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Established in 2010, HR Sportzz Cricket Academy has grown to become one of Bangalore's premier cricket training institutions. Our philosophy combines traditional cricket values with modern training methodologies.
            </p>
            <p className="text-lg">
              We believe that every aspiring cricketer deserves world-class coaching, regardless of their background or initial skill level. Our structured curriculum focuses on technical excellence, tactical awareness, physical fitness, and mental strength.
            </p>
            <p className="text-lg">
              From beginners to advanced players, our comprehensive programs cater to cricketers of all ages and abilities. Our state-of-the-art facilities include multiple nets, bowling machines, fitness center, and video analysis capabilities.
            </p>

            <div className="pt-4">
              <a href="#programs" className="inline-flex items-center text-cricket-600 font-medium hover:underline">
                Explore our programs
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1494&auto=format&fit=crop" 
                alt="Cricket coaching session" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl bg-cricket-600/10 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-cricket-600/5 -z-10"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover-scale"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
