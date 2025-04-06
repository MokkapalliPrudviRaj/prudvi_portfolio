
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from './AnimatedText';
import { Progress } from "@/components/ui/progress";
import { Code, Figma, Cpu, GitBranch, 
  Layout, Layers, PenTool, Search, 
  Briefcase, Chrome } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Skill = {
  name: string;
  level: number; // 0-100
  category: 'development' | 'design';
  icon: React.ReactNode;
  description: string;
};

const skills: Skill[] = [
  // Development Skills
  { 
    name: 'Angular', 
    level: 95, 
    category: 'development',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Expert in Angular framework with deep understanding of components, services, and state management'
  },
  { 
    name: 'TypeScript', 
    level: 90, 
    category: 'development',
    icon: <Code className="h-6 w-6" />,
    description: 'Strong typing, interfaces, generics, and advanced TypeScript patterns'
  },
  { 
    name: 'JavaScript', 
    level: 85, 
    category: 'development',
    icon: <Chrome className="h-6 w-6" />,
    description: 'ES6+, async/await, promises, functional programming techniques'
  },
  { 
    name: 'HTML/CSS', 
    level: 90, 
    category: 'development',
    icon: <Layout className="h-6 w-6" />,
    description: 'Semantic HTML, CSS Grid, Flexbox, animations, and responsive design'
  },
  { 
    name: 'RxJS', 
    level: 85, 
    category: 'development',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Observables, operators, subjects, and reactive programming patterns'
  },
  { 
    name: 'Angular Material', 
    level: 90, 
    category: 'development',
    icon: <Briefcase className="h-6 w-6" />,
    description: 'Comprehensive knowledge of Material Design components and theming'
  },
  { 
    name: 'REST APIs', 
    level: 80, 
    category: 'development',
    icon: <Chrome className="h-6 w-6" />,
    description: 'API integration, HTTP clients, interceptors, and error handling'
  },
  { 
    name: 'Git', 
    level: 85, 
    category: 'development',
    icon: <GitBranch className="h-6 w-6" />,
    description: 'Version control, branching strategies, and collaborative workflows'
  },

  // Design Skills
  { 
    name: 'Figma', 
    level: 90, 
    category: 'design',
    icon: <Figma className="h-6 w-6" />,
    description: 'Expert in creating high-fidelity mockups, prototypes, and design systems'
  },
  { 
    name: 'Webflow', 
    level: 85, 
    category: 'design',
    icon: <Layout className="h-6 w-6" />,
    description: 'Building responsive, interactive websites without code'
  },
  { 
    name: 'UI Design', 
    level: 90, 
    category: 'design',
    icon: <Layers className="h-6 w-6" />,
    description: 'Creating visually appealing interfaces with strong visual hierarchy'
  },
  { 
    name: 'UX Design', 
    level: 85, 
    category: 'design',
    icon: <Search className="h-6 w-6" />,
    description: 'User research, personas, journey mapping, and usability testing'
  },
  { 
    name: 'Wireframing', 
    level: 90, 
    category: 'design',
    icon: <PenTool className="h-6 w-6" />,
    description: 'Low and mid-fidelity wireframes to establish information architecture'
  },
  { 
    name: 'Prototyping', 
    level: 85, 
    category: 'design',
    icon: <Layout className="h-6 w-6" />,
    description: 'Interactive prototypes with realistic animations and interactions'
  },
  { 
    name: 'Design Systems', 
    level: 80, 
    category: 'design',
    icon: <Layers className="h-6 w-6" />,
    description: 'Creating and maintaining consistent design libraries and components'
  },
  { 
    name: 'Visual Design', 
    level: 80, 
    category: 'design',
    icon: <PenTool className="h-6 w-6" />,
    description: 'Typography, color theory, composition, and visual storytelling'
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="flex items-start gap-4 mb-4">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Proficiency</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'development' | 'design'>('development');
  const skillBarsRef = useRef<HTMLDivElement>(null);

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-spacing bg-gradient-to-b from-background to-background/50 py-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Skills & Expertise" type="words" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText 
              text="My technical skills and proficiency levels in both development and design."
              type="words"
              animationDelay={100}
            />
          </p>
        </div>

        <Tabs defaultValue="development" className="mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger 
                value="development" 
                onClick={() => setSelectedCategory('development')}
                className="text-base"
              >
                <Code className="mr-2 h-4 w-4" /> Development
              </TabsTrigger>
              <TabsTrigger 
                value="design" 
                onClick={() => setSelectedCategory('design')}
                className="text-base"
              >
                <PenTool className="mr-2 h-4 w-4" /> UI/UX Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="development" className="mt-0">
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {filteredSkills.map((skill, index) => (
                    <CarouselItem key={index}>
                      <SkillCard skill={skill} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="static transform-none mx-2" />
                  <CarouselNext className="static transform-none mx-2" />
                </div>
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {filteredSkills.map((skill, index) => (
                    <CarouselItem key={index}>
                      <SkillCard skill={skill} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="static transform-none mx-2" />
                  <CarouselNext className="static transform-none mx-2" />
                </div>
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
