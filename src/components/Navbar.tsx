import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg bg-background/70">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <a href="#home" className="font-bold text-2xl text-primary">
          Alexander<span className="text-foreground">.dev</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <ThemeToggle />
        </nav>
        
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={closeMenu}>About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors" onClick={closeMenu}>Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors" onClick={closeMenu}>Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors" onClick={closeMenu}>Skills</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={closeMenu}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
