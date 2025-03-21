
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1624526267982-bf65cce279e7?q=80&w=1469&auto=format&fit=crop",
      alt: "Cricket batting practice",
      caption: "Batting practice in our state-of-the-art nets"
    },
    {
      src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1494&auto=format&fit=crop",
      alt: "Cricket bowling session",
      caption: "Professional bowling coaching session"
    },
    {
      src: "https://images.unsplash.com/photo-1591491653056-4e9d563bedbe?q=80&w=1372&auto=format&fit=crop",
      alt: "Cricket match",
      caption: "Practice match between academy teams"
    },
    {
      src: "https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=1470&auto=format&fit=crop",
      alt: "Fielding drills",
      caption: "Students performing fielding drills"
    },
    {
      src: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=1470&auto=format&fit=crop",
      alt: "Cricket equipment",
      caption: "Premium cricket equipment available for training"
    },
    {
      src: "https://images.unsplash.com/photo-1571398467469-73f607bdd6c0?q=80&w=1470&auto=format&fit=crop",
      alt: "Academy campus",
      caption: "View of our spacious academy grounds"
    }
  ];

  const openImageViewer = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Our <span className="text-cricket-600">Facilities</span></h2>
          <p className="section-subtitle">
            Take a glimpse of our world-class training facilities and academy environment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "relative overflow-hidden rounded-xl cursor-pointer group",
                "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              )}
              onClick={() => openImageViewer(image.src)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-size image viewer */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageViewer}>
          <DialogContent className="max-w-5xl bg-black/95 border-none">
            {selectedImage && (
              <div className="flex justify-center items-center p-2">
                <img 
                  src={selectedImage} 
                  alt="Gallery preview" 
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
