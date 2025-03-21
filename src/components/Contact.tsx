
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: 'Junior Academy'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your inquiry! We'll contact you soon.", {
        description: "Our team will review your message and get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        program: 'Junior Academy'
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-cricket-600" />,
      title: "Location",
      details: [
        "HR Sportzz Cricket Academy",
        "123 Stadium Road, Koramangala",
        "Bangalore - 560034, Karnataka"
      ]
    },
    {
      icon: <Phone className="h-5 w-5 text-cricket-600" />,
      title: "Contact",
      details: [
        "+91 98765 43210",
        "+91 87654 32109"
      ]
    },
    {
      icon: <Mail className="h-5 w-5 text-cricket-600" />,
      title: "Email",
      details: [
        "info@hrsportzz.com",
        "admissions@hrsportzz.com"
      ]
    },
    {
      icon: <Clock className="h-5 w-5 text-cricket-600" />,
      title: "Hours",
      details: [
        "Monday to Saturday: 6:00 AM - 9:00 PM",
        "Sunday: 7:00 AM - 5:00 PM"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Get in <span className="text-cricket-600">Touch</span></h2>
          <p className="section-subtitle">
            Have questions or want to join? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="program" className="block text-sm font-medium">Program of Interest</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
                    "text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="Junior Academy">Junior Academy (Ages 6-12)</option>
                  <option value="Youth Development">Youth Development (Ages 13-16)</option>
                  <option value="Elite Performance">Elite Performance (Ages 17+)</option>
                  <option value="Private Coaching">Private Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message or inquiry"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cricket-600 hover:bg-cricket-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-3">{item.icon}</div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-auto glass-card rounded-xl overflow-hidden h-64 lg:h-auto">
              <iframe 
                title="HR Sportzz Cricket Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.97208994466!2d77.5623862116211!3d12.954255099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c8878c8001%3A0xc758c590828a2091!2sM.%20Chinnaswamy%20Stadium!5e0!3m2!1sen!2sin!4v1686753490273!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
