import React from 'react';
import { CheckIcon } from './icons';
import { Plan } from './PricingSection';
import CountdownTimer from './CountdownTimer';

interface PricingModalProps {
  planDetails: Plan;
  onClose: () => void;
  onProceed: (plan: Plan) => void;
}

const PricingModal = ({ planDetails, onClose, onProceed }: PricingModalProps) => {
  const { plan, price, originalPrice, period, description, features, isFeatured = false, offerEndDate } = planDetails;

  const buttonClasses = isFeatured
    ? 'bg-electric-violet text-white hover:opacity-90 shadow-glow-violet'
    : 'bg-cyber-teal text-white hover:opacity-90';
    
  // Stop background scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative bg-light-card dark:bg-dark-card w-full max-w-md m-auto rounded-2xl border border-white/10 p-8 transform transition-all duration-300 scale-95 animate-[zoomIn_0.3s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{ animationName: 'zoomIn' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isFeatured && (
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-electric-violet to-cyber-teal rounded-full">
            Most Popular
          </div>
        )}

        <h3 className="text-3xl font-bold font-display text-light-text dark:text-dark-text text-center">{plan}</h3>
        <p className="mt-3 text-light-subtle dark:text-dark-subtle text-center">{description}</p>
        
        <div className="my-6 flex justify-center items-baseline gap-x-3">
          <span className="text-6xl font-extrabold text-light-text dark:text-dark-text">₹{price}</span>
          <span className="text-3xl font-semibold text-light-subtle dark:text-dark-subtle line-through">₹{originalPrice}</span>
          <span className="text-lg font-medium text-light-subtle dark:text-dark-subtle">/{period}</span>
        </div>
        
        <div className="my-8">
            <p className="text-xs text-center font-semibold uppercase text-cyber-teal tracking-wider mb-2">Offer Ends In</p>
            <CountdownTimer targetDate={new Date(offerEndDate)} />
        </div>

        <ul className="mt-2 space-y-4 text-md">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-6 h-6 text-cyber-teal" />
              <span className="ml-3 text-light-subtle dark:text-dark-subtle">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onProceed(planDetails)}
          className={`block w-full py-4 mt-10 text-center font-semibold rounded-lg transition-all ${buttonClasses}`}
        >
          Proceed with {plan}
        </button>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default PricingModal;