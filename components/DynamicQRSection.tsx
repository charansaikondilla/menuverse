import React from 'react';

const DynamicQRSection = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-electric-violet/30 rounded-full blur-3xl animate-aurora"></div>
            <div className="absolute w-48 h-48 bg-cyber-teal/30 rounded-full blur-3xl animate-aurora animation-delay-3000"></div>
            <div className="relative w-[280px] h-[560px] bg-dark-bg/80 ring-1 ring-white/10 rounded-[40px] p-4 shadow-2xl">
                {/* Phone screen content */}
                <div className="bg-light-bg dark:bg-dark-bg h-full w-full rounded-[24px] overflow-y-scroll no-scrollbar">
                    <div className="p-4">
                        <h3 className="font-bold font-display text-xl">The Coffee House</h3>
                        <p className="text-xs text-light-subtle dark:text-dark-subtle">Specials</p>
                        <div className="mt-4 space-y-3">
                            <div className="bg-white/80 dark:bg-white/5 p-3 rounded-lg">
                                <p className="font-semibold">Iced Caramel Latte</p>
                                <p className="text-xs text-light-subtle dark:text-dark-subtle">₹250</p>
                            </div>
                             <div className="bg-white/80 dark:bg-white/5 p-3 rounded-lg ring-1 ring-cyber-teal/50">
                                <p className="font-semibold">Avocado Toast ✨</p>
                                <p className="text-xs text-light-subtle dark:text-dark-subtle">₹350</p>
                            </div>
                             <div className="bg-white/80 dark:bg-white/5 p-3 rounded-lg">
                                <p className="font-semibold">Espresso Shot</p>
                                <p className="text-xs text-light-subtle dark:text-dark-subtle">₹150</p>
                            </div>
                             <div className="bg-white/80 dark:bg-white/5 p-3 rounded-lg">
                                <p className="font-semibold">Chocolate Croissant</p>
                                <p className="text-xs text-light-subtle dark:text-dark-subtle">₹200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-light-text dark:text-dark-text">See It in Action</h2>
            <p className="text-lg text-light-subtle dark:text-dark-subtle mb-8 leading-relaxed">
             This isn't just a menu; it's a statement. Our designs are crafted to be beautiful, intuitive, and lightning-fast on any device, ensuring your customers have an experience they'll remember.
            </p>
             <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-block px-8 py-3 font-semibold text-white bg-electric-violet rounded-lg transition-all duration-300 shadow-glow-violet cursor-not-allowed opacity-70"
              >
                Explore More Designs
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicQRSection;