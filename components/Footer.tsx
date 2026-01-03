import React from 'react';
import { translations } from '../constants';

interface FooterProps {
  t: (key: keyof typeof translations.en) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="mt-16 py-12 border-t border-slate-800">
      <div className="max-w-8xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Queens Auto Service Algonquin</h3>
        <div className="text-slate-400 space-y-2">
          <p>
            <a
              href="https://maps.google.com/?q=2401+E+Algonquin+Rd,+Algonquin,+IL+60102"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              2401 E Algonquin Rd, Algonquin, IL 60102
            </a>
          </p>
          <p>
            <span>{t('callUs')} </span>
            <a href="tel:+18478441700" className="hover:text-cyan-400 transition-colors font-medium">(847) 844-1700</a>
          </p>
          <p className="text-sm">
            <span className="text-slate-500">Hours:</span> Mon-Fri 7:30 - 6:00 pm | Sat 7:30 - 4:00 pm
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-800 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Queens Auto Service Algonquin. All Rights Reserved. |
            <a href="https://queensautoservices.com/privacy" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors ml-1">{t('privacyPolicy')}</a> |
            <a href="https://queensautoservices.com/terms" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors ml-1">{t('termsOfUse')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;