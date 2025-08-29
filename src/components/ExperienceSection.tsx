
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
    description: "Contributed to the end-to-end UI/UX modernization of a large-scale ERP web application in the Manufacturing Domain. The ERP platform supports modules such as Requisition Management, Database Utilities, report management, user access control, and administrative configuration, helping streamline inter-departmental operations globally.",
    responsibilities: [
      "Redesigned major ERP modules (Requisition, Reports, User Access, Database Utilities) using Figma, reducing user confusion and training time by 30%.",
      "Rebuilt frontend with Angular, TypeScript, HTML5, CSS3, Bootstrap, PrimeNG, delivering modular and responsive components.",
      "Integrated GraphQL & REST APIs for dynamic report generation; used RxJS and NgRx for state and stream management.",
      "Developed advanced Reactive Forms with dynamic validation for requisition and admin modules.",
      "Applied lazy loading & OnPush change detection, cutting load times in reports and user access modules.",
      "Implemented role-based routing & route guards for secure admin access.",
      "Enabled multi-region (CA/US), multi-language (i18n), and ARIA accessibility compliance.",
      "Performed manual testing and supported Jasmine/Karma component testing for UI stability.",
      "Improved task efficiency by 25% and reduced UI-related support requests by 30% through usability, performance, and structure optimization."
    ],
    technologies: ["Angular","JavaScript", "TypeScript", "RxJS", "NgRx", "Angular Material", "Figma", "Prototyping", "Responsive Design"]
  },
  {
    id: 2,
    title: "Systems Engineer",
    company: "Infosys Limited",
    location: "Bengaluru, KA",
    period: "Aug 2022 - Dec 2024",
    description: "A frontend modernization project for a Lab Management System used by scientists and researchers to manage lab operations, instruments, and data. The goal was to improve UI responsiveness, user experience, and overall usability for efficient lab workflows.",
    responsibilities: [
      "Worked on designing and developing responsive frontend screens using Angular, JavaScript, HTML5, CSS, and Angular Material.",
      "Translated high-fidelity Figma designs into clean, maintainable Angular components.",
      "Implemented reusable UI components to ensure consistency across different modules in the application.",
      "Integrated REST APIs to fetch real-time data and dynamically populate dashboards and forms.",
      "Ensured responsiveness and cross-browser compatibility for all UI screens.",
      "Focused on UI performance optimization through change detection strategies and component-level tuning.",
      "Followed Agile Scrum methodology for iterative development and delivery in collaboration with cross-functional teams.",
      "Prioritized accessibility and usability improvements for enhanced lab technician and researcher experience."
],
    technologies: ["Angular","JavaScript", "TypeScript", "RxJS", "NgRx", "Angular Material", "Figma", "Prototyping", "Responsive Design"]
  },
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
