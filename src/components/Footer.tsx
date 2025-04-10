
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Prudvi</span><span>.dev</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Angular Developer & UI/UX Designer specializing in creating beautiful and functional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors mb-4"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </a>
            <div className="flex space-x-4">
              <a href="https://github.com/MokkapalliPrudviRaj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/uiuxbyprudvi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://dribbble.com/uiuxbyprudvi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Dribbble
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Prudvi.dev. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
