
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HR Sportzz transformed my son's cricketing journey. The personalized coaching and emphasis on fundamentals helped him secure a place in the district team. The coaches here don't just teach cricket; they instill values of discipline and sportsmanship.",
      name: "Priya Verma",
      title: "Parent of U-16 Player",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
    {
      quote: "After joining HR Sportzz, my bowling speed increased by 15 km/h and my accuracy improved dramatically. The video analysis sessions and personalized feedback made a huge difference. I've now been selected for state-level trials, which was my dream.",
      name: "Arjun Nair",
      title: "Fast Bowler, Elite Program",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "The coaching at HR Sportzz is world-class. I joined as a recreational player, but their structured program and encouraging environment helped me develop into a competitive cricketer. The facilities are excellent, and the coaches provide attention to every player.",
      name: "Sneha Patel",
      title: "Batting All-rounder",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Success <span className="text-cricket-600">Stories</span></h2>
          <p className="section-subtitle">
            Hear from our students and parents about their experience with HR Sportzz
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-cricket-600/10 rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-cricket-600/10 rounded-tl-3xl"></div>
            
            <Quote className="h-12 w-12 text-cricket-600/20 mb-6" />
            
            <div className="relative min-h-[220px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 flex flex-col",
                    index === currentTestimonial 
                      ? "opacity-100 translate-x-0" 
                      : index < currentTestimonial 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  )}
                >
                  <p className="text-lg md:text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mt-auto flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-cricket-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentTestimonial 
                        ? "bg-cricket-600" 
                        : "bg-cricket-200 hover:bg-cricket-300"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-cricket-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
