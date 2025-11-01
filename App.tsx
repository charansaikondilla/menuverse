
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import DynamicQRSection from './components/DynamicQRSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// FIX: Re-added React.FC to the App component's type definition.
// The previous implementation as a plain function caused a TypeScript error where
// the 'children' prop was not correctly inferred for the nested ThemeProvider
// component. Explicitly typing the component with React.FC resolves this issue.
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen font-sans selection:bg-electric-violet/30 overflow-x-hidden">
        {/* Dynamic Aurora Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-electric-violet/30 via-cyber-teal/0 to-cyber-teal/30 dark:from-electric-violet/20 dark:via-dark-bg/0 dark:to-cyber-teal/20 animate-aurora-bg"></div>
        </div>
        
        <Header />
        <main>
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <DynamicQRSection />
          <PricingSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
