import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PricingModal from './PricingModal';

export interface Plan {
  plan: string;
  price: string;
  originalPrice: string;
  period: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  offerEndDate: string; // Added for the countdown timer
}

// Dynamically set the offer end date to 24 hours from now
const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 1);

const pricingPlans: Plan[] = [
  {
    plan: "Basic Digital",
    price: "200",
    originalPrice: "400",
    period: "mo",
    description: "For a clean, fast, and stylish digital menu.",
    features: [
      'Beautiful Digital Menu',
      'Custom QR Code',
      'Mobile & Tablet Friendly',
      '2 Months Free Editing',
    ],
    offerEndDate: offerEndDate.toISOString(),
  },
  {
    plan: "Premium Interactive",
    price: "500",
    originalPrice: "800",
    period: "mo",
    description: "For businesses that want to impress and engage.",
    features: [
      'Everything in Basic',
      'Interactive Animations',
      'Mini-Games (Spin & Win)',
      'Theme Customization',
      'Google Sheet Integration',
    ],
    isFeatured: true,
    offerEndDate: offerEndDate.toISOString(),
  },
  {
    plan: "Café Pro",
    price: "1000",
    originalPrice: "1500",
    period: "mo",
    description: "The ultimate toolkit for data-driven owners.",
    features: [
      'Everything in Premium',
      'Real-Time Analytics Dashboard',
      'Editable Dashboard',
      'Smart Recommendations',
      'Priority Support',
    ],
    offerEndDate: offerEndDate.toISOString(),
  },
];


const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleChoosePlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleProceedWithPlan = (plan: Plan) => {
    const contactSection = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;

    if (contactSection && messageTextarea) {
      // 1. Create the pre-filled message
      const message = `Hello, I'm interested in the "${plan.plan}" plan (Offer Price: ₹${plan.price}/${plan.period}). Could you please provide more information?`;
      
      // 2. Set the textarea's value and dispatch an 'input' event 
      //    to ensure React's state in the ContactSection updates.
      messageTextarea.value = message;
      messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));

      // 3. Smoothly scroll to the contact form
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // 4. Close the modal
      handleCloseModal();
    } else {
      console.error("Could not find the contact form section or message textarea.");
      handleCloseModal(); // Close modal anyway as a fallback
    }
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full opacity-50">
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-electric-violet/20 via-transparent to-cyber-teal/20 dark:from-electric-violet/10 dark:to-cyber-teal/10 animate-aurora-bg"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-light-text dark:text-dark-text">Find Your Perfect Plan</h2>
          <p className="text-lg text-light-subtle dark:text-dark-subtle mt-4 max-w-2xl mx-auto">
            Choose a plan that scales with your ambition. Simple pricing, powerful features, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingPlans.map(plan => (
            <PricingCard
              key={plan.plan}
              planDetails={plan}
              onChoosePlan={() => handleChoosePlan(plan)}
            />
          ))}
        </div>
      </div>
      
      {selectedPlan && (
        <PricingModal 
          planDetails={selectedPlan}
          onClose={handleCloseModal} 
          onProceed={handleProceedWithPlan}
        />
      )}
    </section>
  );
};

export default PricingSection;