
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
    title: "Senior Systems Engineer",
    company: "Infosys Limited",
    location: "Bengaluru, KA",
    period: "Jan 2025 - Present",
    description: "Developed and optimized the frontend of Infosys Client web portal using Angular and Angular Material, enhancing performance, scalability, and user engagement—resulting in a 30% increase in traffic and engagement.",
    responsibilities: [
      "Built a modular, scalable architecture with lazy loading, improving application performance and reducing load times.",
      "Developed responsive, mobile-first interfaces using Angular Material, ensuring consistency across devices.",
      "Integrated RESTful APIs and optimized data handling for seamless real-time interactions and improved responsiveness.",
      "Implemented state management strategies to enhance performance and maintainability across complex UI components.",
      "Streamlined design-to-code workflows by leveraging Figma plugins and generative AI, reducing development time by 25%.",
      "Created high-fidelity and low-fidelity designs in Figma, ensuring intuitive user flows and accessibility compliance.",
      "Redesigned navigation and visuals to enhance usability, leading to a more seamless user experience.",
      "Collaborated in Agile teams, working closely with other developers to integrate UI/UX features effectively with Angular components."
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Figma", "Prototyping", "Responsive Design"]
  },
  {
    id: 2,
    title: "Systems Engineer",
    company: "Infosys Limited",
    location: "Bengaluru, KA",
    period: "Aug 2022 - Dec 2024",
    description: "Developed and optimized the frontend of Infosys Client web portal using Angular and Angular Material, enhancing performance, scalability, and user engagement—resulting in a 30% increase in traffic and engagement.",
    responsibilities: [
      "Built a modular, scalable architecture with lazy loading, improving application performance and reducing load times.",
      "Developed responsive, mobile-first interfaces using Angular Material, ensuring consistency across devices.",
      "Integrated RESTful APIs and optimized data handling for seamless real-time interactions and improved responsiveness.",
      "Implemented state management strategies to enhance performance and maintainability across complex UI components.",
      "Streamlined design-to-code workflows by leveraging Figma plugins and generative AI, reducing development time by 25%.",
      "Created high-fidelity and low-fidelity designs in Figma, ensuring intuitive user flows and accessibility compliance.",
      "Redesigned navigation and visuals to enhance usability, leading to a more seamless user experience.",
      "Collaborated in Agile teams, working closely with other developers to integrate UI/UX features effectively with Angular components."
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Figma", "Prototyping", "Responsive Design"]
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Forage - Accenture",
    location: "Remote",
    period: "Jun 2024 - Sep 2024",
    description: "Designed a mobile feature for a music app through an Accenture-Forage Open Internship, enhancing usability and user experience.",
    responsibilities: [
      " Conducted user research, wireframing, and prototyping in Figma, ensuring intuitive navigation and accessibility.",
      "Created high-fidelity prototypes and presented design updates, aligning with user needs and business goals.",
      "Created interactive prototypes in ProtoPie to simulate real user interactions and test design functionality.",
      "Adhered to a design system, ensuring visual consistency, scalability, and seamless developer handoff."
    ],
    technologies: ["Figma", "Protopie", "UI design", "UX design", "Adaptive Design", "Responsive Web Design", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
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
                className={`w-full text-left p-4 transition-all duration-300 rounded-lg border ${activeExperience === exp.id
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
