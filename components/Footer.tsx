import React from 'react';
import { MenuIcon, MailIcon, PhoneIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-light-bg/80 dark:bg-dark-bg/80 border-t border-white/10 dark:border-white/5">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 bg-electric-violet rounded-lg flex items-center justify-center">
                 <MenuIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-light-text dark:text-dark-text">MenuVerse</span>
            </div>
            <p className="mt-4 text-light-subtle dark:text-dark-subtle text-sm">
              The smart way to design and manage your digital menu.
            </p>
             <p className="mt-4 font-semibold text-light-text dark:text-dark-text text-md">
              Charan Sai Kondilla
            </p>
          </div>
          <div>
             <h3 className="text-sm font-semibold tracking-wider uppercase text-light-subtle dark:text-dark-subtle">Contact Me</h3>
             <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-3">
                    <MailIcon className="w-5 h-5 text-light-subtle dark:text-dark-subtle" />
                    <a href="mailto:charansaikondilla@gmail.com" className="text-base text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">charansaikondilla@gmail.com</a>
                </li>
                 <li className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-light-subtle dark:text-dark-subtle" />
                    <a href="tel:+917995597570" className="text-base text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">+91 79955 97570</a>
                </li>
                 <li className="flex items-center space-x-3">
                    <WhatsAppIcon className="w-5 h-5 text-light-subtle dark:text-dark-subtle" />
                    <a href="https://wa.me/917995597570" target="_blank" rel="noopener noreferrer" className="text-base text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">WhatsApp</a>
                </li>
                 <li className="flex items-center space-x-3">
                    <LinkedInIcon className="w-5 h-5 text-light-subtle dark:text-dark-subtle" />
                    <a href="https://linkedin.com/in/charansaikondilla" target="_blank" rel="noopener noreferrer" className="text-base text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">LinkedIn</a>
                </li>
                 <li className="flex items-center space-x-3">
                    <InstagramIcon className="w-5 h-5 text-light-subtle dark:text-dark-subtle" />
                    <a href="https://www.instagram.com/charankondilla" target="_blank" rel="noopener noreferrer" className="text-base text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">Instagram</a>
                </li>
             </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 dark:border-white/5 pt-8 text-center text-sm text-light-subtle dark:text-dark-subtle">
          <p>&copy; {new Date().getFullYear()} MenuVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;