
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const { clientX, clientY } = e;
      const rect = sectionRef.current.getBoundingClientRect();

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      // Update CSS variables for the parallax effect
      sectionRef.current.style.setProperty('--mouse-x', x.toString());
      sectionRef.current.style.setProperty('--mouse-y', y.toString());
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-hero-pattern pt-16"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5'
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract background shapes/elements */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 animate-float blur-3xl"
          style={{
            transform: 'translate(calc(var(--mouse-x) * 40px), calc(var(--mouse-y) * -40px))',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/5 animate-float blur-3xl"
          style={{
            transform: 'translate(calc(var(--mouse-x) * -40px), calc(var(--mouse-y) * 40px))',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <p className="text-primary text-sm font-medium">Angular Developer & UI/UX Designer</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <AnimatedText
              text="Crafting Beautiful Digital Experiences"
              className="block"
              type="words"
              animationDelay={100}
            />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <AnimatedText
              text="I blend sophisticated Angular development with intuitive UI/UX design to create powerful and engaging digital products."
              type="words"
              animationDelay={500}
            />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <a
              href="/Resume/Prudvi_Raj_Mokkapalli_Angular_Resume.pdf"
              download
              className="group"
            >
              <Button size="lg" className="rounded-full px-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="fill-muted-foreground group-hover:fill-foreground transition-colors"
                >
                  <path d="M12 16L16 11H13V4H11V11H8L12 16Z" />
                  <path d="M20 18H4V11H2V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V11H20V18Z"/>
                </svg>
                <span className="text-muted-foreground hover:text-foreground transition-colors">Download Resume</span>
              </Button>
            </a>

            <a
              href="#contact"
              className="group"
            >
            <Button size="lg" variant="outline" className="rounded-full px-6">
              <span className="text-muted-foreground hover:text-foreground transition-colors">Contact Me</span>
            </Button>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center flex-col opacity-70 hover:opacity-100 transition-opacity w-full sm:w-auto"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 text-center">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
