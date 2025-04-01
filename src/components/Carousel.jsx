import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/burger1.jpg",
  "/burger2.jpg",
  "/burger3.jpg",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 bg-gray-800 overflow-hidden rounded-lg">
      <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Promoção"
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
