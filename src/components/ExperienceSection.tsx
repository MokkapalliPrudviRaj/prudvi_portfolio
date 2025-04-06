
import React, { useState } from 'react';
import { Calendar, Briefcase, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Angular Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description: "Leading the development of enterprise-scale Angular applications, focusing on performance optimization and component architecture.",
    responsibilities: [
      "Architected and implemented a modular component system using Angular 13+",
      "Led a team of 5 frontend developers, providing technical guidance and code reviews",
      "Improved application performance by 40% through lazy loading and optimization",
      "Implemented comprehensive unit and integration testing strategies"
    ],
    technologies: ["Angular 13+", "TypeScript", "RxJS", "NgRx", "Angular Material", "Jasmine"]
  },
  {
    id: 2,
    title: "UI/UX Designer & Angular Developer",
    company: "Creative Digital Agency",
    location: "New York, NY",
    period: "Mar 2019 - Dec 2020",
    description: "Worked in a dual role as both UI/UX designer and Angular developer, creating cohesive digital experiences from concept to implementation.",
    responsibilities: [
      "Designed and developed responsive web applications for clients across various industries",
      "Created wireframes, prototypes, and high-fidelity mockups using Figma",
      "Implemented designs using Angular, ensuring pixel-perfect translations",
      "Conducted user research and usability testing to inform design decisions"
    ],
    technologies: ["Angular 9+", "Figma", "SCSS", "Prototyping", "User Testing", "Responsive Design"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Innovative Startups Inc",
    location: "Austin, TX",
    period: "Jun 2017 - Feb 2019",
    description: "Developed responsive web applications using Angular and related technologies for early-stage startups.",
    responsibilities: [
      "Built multiple SPAs using Angular 5-7 and TypeScript",
      "Collaborated closely with designers to implement UI components",
      "Integrated RESTful APIs and managed state with RxJS",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["Angular 5-7", "JavaScript", "CSS3/SCSS", "REST APIs", "Git", "Agile"]
  }
];

const ExperienceSection: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  return (
    <section id="experience" className="section-spacing bg-secondary/50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Work Experience" type="words" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText 
              text="My professional journey and contributions in Angular development and UI/UX design."
              type="words"
              animationDelay={100}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Navigation */}
          <div className="md:col-span-1 space-y-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`w-full text-left p-4 transition-all duration-300 rounded-lg border ${
                  activeExperience === exp.id 
                    ? 'bg-background border-primary shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-background/50'
                }`}
              >
                <p className="font-medium">{exp.title}</p>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="md:col-span-2">
            {experiences.filter(exp => exp.id === activeExperience).map((exp) => (
              <div 
                key={exp.id} 
                className="bg-background rounded-xl p-6 border shadow-sm animate-fade-in"
              >
                <div className="flex justify-between items-start flex-wrap mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex">
                        <ArrowRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
