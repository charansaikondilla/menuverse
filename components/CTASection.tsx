import React from 'react';

const CTASection = () => {

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default link behavior
    e.preventDefault();
    
    // Find the contact form section by its ID
    const contactSection = document.getElementById('contact-form');
    
    // If the section exists, scroll to it smoothly
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-electric-violet to-cyber-teal">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white font-display sm:text-5xl">
          <span className="block">Ready to Make Your Menu Glow?</span>
        </h2>
         <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Join the future of dining. Elevate your brand and captivate your customers in less than 24 hours.
        </p>
        <div className="mt-8 flex justify-center">
            <a
            href="#contact-form"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-electric-violet bg-white hover:bg-white/90 transition-colors shadow-2xl"
            >
            Start Your Free Trial Today
            </a>
        </div>
        <p className="mt-4 text-sm text-white/60">
          No credit card required.
        </p>
      </div>
    </section>
  );
};

export default CTASection;