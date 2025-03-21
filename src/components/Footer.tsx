
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              HR <span className="text-cricket-400">Sportzz</span>
            </h3>
            <p className="text-white/80 mb-4">
              Bangalore's premier cricket academy dedicated to nurturing cricket talent through professional coaching and world-class facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-cricket-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-cricket-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-cricket-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-cricket-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Programs', 'Coaches', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/80 hover:text-cricket-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                'Junior Academy',
                'Youth Development',
                'Elite Performance',
                'Private Coaching',
                'Holiday Camps',
                'School Programs'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#programs" 
                    className="text-white/80 hover:text-cricket-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for updates on programs, events, and cricket tips.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 placeholder:text-white/50"
              />
              <Button className="bg-cricket-600 hover:bg-cricket-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HR Sportzz Cricket Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
