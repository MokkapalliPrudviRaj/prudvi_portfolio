
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
    level: 90, 
    category: 'development',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Frontend framework for building scalable web applications'
  },
  { 
    name: 'TypeScript', 
    level: 60, 
    category: 'development',
    icon: <Code className="h-6 w-6" />,
    description: 'Typed superset of JavaScript that adds static typing and interfaces'
  },
  { 
    name: 'JavaScript', 
    level: 85, 
    category: 'development',
    icon: <Chrome className="h-6 w-6" />,
    description: 'Programming language for creating dynamic web content'
  },
  { 
    name: 'HTML/CSS', 
    level: 95, 
    category: 'development',
    icon: <Layout className="h-6 w-6" />,
    description: 'Markup and styling languages used to build responsive web pages'
  },
  { 
    name: 'RxJS', 
    level: 85, 
    category: 'development',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Library for reactive programming using observables'
  },
  { 
    name: 'Angular Material', 
    level: 95, 
    category: 'development',
    icon: <Briefcase className="h-6 w-6" />,
    description: 'UI component library based on Material Design'
  },
  { 
    name: 'REST APIs', 
    level: 85, 
    category: 'development',
    icon: <Chrome className="h-6 w-6" />,
    description: 'Web services that allow communication between systems over HTTP'
  },
  { 
    name: 'Git', 
    level: 85, 
    category: 'development',
    icon: <GitBranch className="h-6 w-6" />,
    description: 'Version control system for tracking code changes and collaboration'
  },

  // Design Skills
  { 
    name: 'Figma', 
    level: 95, 
    category: 'design',
    icon: <Figma className="h-6 w-6" />,
    description: 'Design tool for creating UI mockups, prototypes, and design systems'
  },
  { 
    name: 'Protopie', 
    level: 85, 
    category: 'design',
    icon: <Layout className="h-6 w-6" />,
    description: 'Tool for building interactive and realistic prototypes'
  },
  { 
    name: 'UI Design', 
    level: 95, 
    category: 'design',
    icon: <Layers className="h-6 w-6" />,
    description: 'Designing user interfaces that are visually appealing and functional'
  },
  { 
    name: 'UX Design', 
    level: 95, 
    category: 'design',
    icon: <Search className="h-6 w-6" />,
    description: 'Designing user-centered experiences through research and testing'
  },
  { 
    name: 'Wireframing', 
    level: 80, 
    category: 'design',
    icon: <PenTool className="h-6 w-6" />,
    description: 'Creating basic layouts and structure for digital interfaces'
  },
  { 
    name: 'Prototyping', 
    level: 85, 
    category: 'design',
    icon: <Layout className="h-6 w-6" />,
    description: 'Building interactive models to test and validate designs'
  },
  { 
    name: 'Design Systems', 
    level: 75, 
    category: 'design',
    icon: <Layers className="h-6 w-6" />,
    description: 'Standardized set of UI components and design guidelines'
  },
  { 
    name: 'Visual Design', 
    level: 85, 
    category: 'design',
    icon: <PenTool className="h-6 w-6" />,
    description: 'Crafting the aesthetics of a digital product through layout and style'
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
