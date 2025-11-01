import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 md:p-0">
            <h2 className="text-4xl font-bold font-display mb-4 text-light-text dark:text-dark-text">Static is Over.</h2>
            <p className="text-light-subtle dark:text-dark-subtle mb-6 leading-relaxed">
              Paper menus and basic PDFs are expensive to reprint, impossible to update instantly, and offer zero insight into what your customers actually want. They're a missed opportunity for engagement and data.
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-8 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 dark:border-white/5">
            <h2 className="text-4xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cyber-teal">Go Dynamic.</h2>
            <p className="text-light-subtle dark:text-dark-subtle mb-6 leading-relaxed">
              With MenuVerse, your menu becomes a living, breathing part of your brand. Update items in real-time, engage customers with stunning visuals, and gain valuable insights with our analytics dashboard. It's smart, sleek, and simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;