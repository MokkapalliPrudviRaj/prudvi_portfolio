
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  once?: boolean;
  type?: 'words' | 'chars' | 'none';
  animationDelay?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  wordClassName,
  charClassName,
  once = true,
  type = 'words',
  animationDelay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = elementRef.current?.querySelectorAll('.word, .char') || [];
    elements.forEach((el, index) => {
      el.classList.add('opacity-0');
      el.style.animationDelay = `${animationDelay + index * 50}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [text, once, animationDelay]);

  const renderText = () => {
    if (type === 'none') {
      return <span>{text}</span>;
    }

    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span 
          key={i} 
          className={cn('word inline-block opacity-0', wordClassName)}
          style={{ animationDelay: `${animationDelay + i * 50}ms` }}
        >
          {word}
          {i !== text.split(' ').length - 1 && ' '}
        </span>
      ));
    }

    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span 
          key={i} 
          className={cn('char inline-block opacity-0', charClassName)}
          style={{ animationDelay: `${animationDelay + i * 30}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
  };

  return (
    <div ref={elementRef} className={cn('whitespace-pre-wrap', className)}>
      {renderText()}
    </div>
  );
};

export default AnimatedText;
