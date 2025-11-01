import React from 'react';
import { CheckIcon } from './icons';
import { Plan } from './PricingSection';
import CountdownTimer from './CountdownTimer';

interface PricingCardProps {
  planDetails: Plan;
  onChoosePlan: () => void;
}

// FIX: Added React.FC to correctly type the component and resolve the 'key' prop error.
const PricingCard: React.FC<PricingCardProps> = ({ planDetails, onChoosePlan }) => {
  const { plan, price, originalPrice, period, description, features, isFeatured = false, offerEndDate } = planDetails;

  const cardClasses = isFeatured
    ? 'border-transparent bg-gradient-to-br from-electric-violet to-cyber-teal p-1'
    : 'border-white/10 dark:border-white/5';

  const buttonClasses = isFeatured
    ? 'bg-electric-violet text-white hover:opacity-90 shadow-glow-violet'
    : 'bg-white/10 hover:bg-white/20 text-light-text dark:text-dark-text';

  return (
    <div className={`relative rounded-xl flex flex-col ${cardClasses}`}>
       <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-[11px] h-full flex flex-col">
          {isFeatured && (
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-electric-violet to-cyber-teal rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-bold font-display text-light-text dark:text-dark-text">{plan}</h3>
          <p className="mt-3 text-light-subtle dark:text-dark-subtle text-sm">{description}</p>
          <div className="mt-6 flex items-baseline gap-x-2">
            <span className="text-5xl font-extrabold text-light-text dark:text-dark-text">₹{price}</span>
            <span className="text-2xl font-semibold text-light-subtle dark:text-dark-subtle line-through">₹{originalPrice}</span>
            <span className="text-base font-medium text-light-subtle dark:text-dark-subtle">/{period}</span>
          </div>

          <div className="my-6">
            <p className="text-xs text-center font-semibold uppercase text-cyber-teal tracking-wider mb-2">Offer Ends In</p>
            <CountdownTimer targetDate={new Date(offerEndDate)} />
          </div>

          <ul className="mt-2 space-y-4 flex-grow text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-cyber-teal" />
                <span className="ml-3 text-light-subtle dark:text-dark-subtle">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onChoosePlan}
            className={`block w-full py-3 mt-8 text-center font-semibold rounded-lg transition-all ${buttonClasses}`}
          >
            Choose Plan
          </button>
       </div>
    </div>
  );
};

export default PricingCard;