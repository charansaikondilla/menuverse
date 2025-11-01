import React, { useState, useEffect, useRef } from 'react';

// Reordered to have the featured item in the center for a symmetrical fan-out
const menuItems = [
  { name: 'Espresso Shot', price: '150', image: '샷' },
  { name: 'Iced Caramel Latte', price: '250', image: '☕️' },
  { name: 'Avocado Toast', price: '350', image: '🥑', featured: true },
  { name: 'Chocolate Croissant', price: '200', image: '🥐' },
  { name: 'Blueberry Muffin', price: '180', image: '🧁' },
];

interface MenuCardProps {
  item: {
    name: string;
    price: string;
    image: string;
    featured?: boolean;
  };
  index: number;
  isExpanded: boolean;
}

// FIX: Added React.FC to correctly type the component and resolve the 'key' prop error.
const MenuCard: React.FC<MenuCardProps> = ({ item, index, isExpanded }) => {
  const totalItems = menuItems.length;
  const middleIndex = Math.floor(totalItems / 2);
  
  // Transform for when cards are fanned out
  const fanRotation = (index - middleIndex) * 15;
  const expandedTransform = `rotate(${fanRotation}deg) translateX(${fanRotation * 12}px) rotateY(${fanRotation}deg)`;

  // Transform for when cards are in a single stack
  const stackOffset = Math.abs(index - middleIndex);
  const stackedTransform = `translateY(${stackOffset * 10}px) scale(${1 - stackOffset * 0.05})`;

  return (
    <div
      className={`absolute w-60 h-80 transition-transform duration-1000 ease-in-out transform-gpu`}
      style={{
        transform: isExpanded ? expandedTransform : stackedTransform,
        transformOrigin: 'bottom center',
        zIndex: totalItems - stackOffset,
      }}
    >
      <div className="w-full h-full bg-light-card/80 dark:bg-dark-card/80 p-6 rounded-2xl backdrop-blur-xl border border-white/10 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-2xl">
        <div className="text-6xl mb-4">{item.image}</div>
        <h3 className="font-bold font-display text-xl text-light-text dark:text-dark-text">{item.name}</h3>
        <p className="text-light-subtle dark:text-dark-subtle">₹{item.price}</p>
        {item.featured && (
          <p className="mt-2 text-xs font-bold text-cyber-teal">POPULAR</p>
        )}
      </div>
    </div>
  );
};


const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Animate on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Expand cards when user scrolls down a bit
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Fade-in for scroll indicator
    const timer = setTimeout(() => {
        setIndicatorVisible(true);
    }, 500);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const { clientWidth: width, clientHeight: height } = heroRef.current;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = (x / width - 0.5) * -1;
    const yPct = (y / height - 0.5) * -1;

    setParallax({ x: xPct * 15, y: yPct * 8 });
  };
  
  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden"
    >
      <div
        className="relative w-full h-96 mb-12 flex items-center justify-center perspective-1000"
        style={{
          transform: `rotateY(${parallax.x}deg) rotateX(${parallax.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {menuItems.map((item, index) => {
          return <MenuCard key={item.name} item={item} index={index} isExpanded={isExpanded} />;
        })}
      </div>

      <div 
        className="container mx-auto text-center px-4 z-10"
        style={{
            transform: `translateX(${parallax.x * 0.3}px) translateY(${parallax.y * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-teal">
            The Future of Your Menu is Here.
        </h1>
        <p className="text-lg md:text-xl text-light-subtle dark:text-dark-subtle max-w-2xl mx-auto mt-4">
          Scroll down to see how we transform a simple menu into a dynamic, interactive experience.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${isExpanded || !indicatorVisible ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-6 h-10 border-2 border-light-subtle dark:border-dark-subtle rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-light-subtle dark:bg-dark-subtle rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;