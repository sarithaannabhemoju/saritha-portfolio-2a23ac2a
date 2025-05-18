
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-beige">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark-brown">Saritha Annabhemoju</h3>
            <p className="text-portfolio-gray mb-2">MBA Business Analytics</p>
            <p className="text-portfolio-gray">Turning data into actionable insights</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark-brown">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-portfolio-gray hover:text-portfolio-brown transition-colors">Home</a></li>
              <li><a href="/about" className="text-portfolio-gray hover:text-portfolio-brown transition-colors">About</a></li>
              <li><a href="/projects" className="text-portfolio-gray hover:text-portfolio-brown transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-portfolio-gray hover:text-portfolio-brown transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark-brown">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919550907029" className="flex items-center space-x-2 text-portfolio-gray hover:text-portfolio-brown transition-colors">
                <Phone size={18} />
                <span>+91 95509 07029</span>
              </a>
              <a href="mailto:sarithaannabhemoju@gmail.com" className="flex items-center space-x-2 text-portfolio-gray hover:text-portfolio-brown transition-colors">
                <Mail size={18} />
                <span>sarithaannabhemoju@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/saritha-annabhemoju-51b46a325" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-portfolio-gray hover:text-portfolio-brown transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-portfolio-brown/20 text-center text-portfolio-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Saritha Annabhemoju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
