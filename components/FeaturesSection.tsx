import React from 'react';

const features = [
  {
    name: 'Stunning Animations',
    description: 'Capture attention with smooth transitions, hover effects, and beautiful item galleries.',
  },
  {
    name: 'Deep Analytics',
    description: 'Discover your most popular items and peak viewing times to make smarter business decisions.',
  },
  {
    name: 'Instant Updates',
    description: 'Change prices, add specials, or mark items as "sold out" from any device, anytime.',
  },
  {
    name: 'Interactive Elements',
    description: 'Engage customers with mini-games like "Spin & Win" or gather feedback with polls.',
  },
  {
    name: 'Theme Customization',
    description: 'Match your menu to your brand with custom colors, fonts, and backgrounds.',
  },
  {
    name: 'Google Sheets Sync',
    description: 'Manage your menu items and prices effortlessly from a familiar Google Sheet.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-light-text dark:text-dark-text">More Than a Menu. It's an Experience.</h2>
          <p className="text-lg text-light-subtle dark:text-dark-subtle mt-4 max-w-3xl mx-auto">
            MenuVerse is packed with powerful features designed to delight your customers and grow your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-light-card/80 dark:bg-dark-card/80 p-6 rounded-xl backdrop-blur-md border border-white/10 dark:border-white/5 transition-all duration-300 hover:border-electric-violet hover:shadow-glow-violet hover:-translate-y-2">
                <h3 className="text-xl font-bold font-display text-light-text dark:text-dark-text">{feature.name}</h3>
                <p className="mt-2 text-light-subtle dark:text-dark-subtle text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;