
import React, { useState } from 'react';
import { GitBranch, ExternalLink, Eye, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'development' | 'design' | 'both';
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Dashboard",
    description: "A comprehensive Angular dashboard for enterprise data visualization and management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "development",
    technologies: ["Angular", "TypeScript", "NgRx", "D3.js"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with advanced filtering and cart functionality.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    category: "both",
    technologies: ["Angular", "Firebase", "Stripe", "Figma"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Healthcare Portal UI Design",
    description: "A user-centered design for a healthcare provider portal focusing on accessibility.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2187&auto=format&fit=crop",
    category: "design",
    technologies: ["Figma", "Wireframing", "Prototyping", "User Testing"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Financial Analytics App",
    description: "An Angular application for visualizing and analyzing financial data with real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "development",
    technologies: ["Angular", "TypeScript", "RxJS", "Chart.js"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "Travel Booking System",
    description: "End-to-end design and development of a travel booking platform with intuitive UI.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    category: "both",
    technologies: ["Angular", "Node.js", "Figma", "Google Maps API"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 6,
    title: "Mobile App Design System",
    description: "A comprehensive design system for a suite of mobile applications ensuring consistency.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1974&auto=format&fit=crop",
    category: "design",
    technologies: ["Figma", "Component Design", "Design Tokens", "Documentation"],
    liveUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'development' | 'design'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter || project.category === 'both');

  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Featured Projects" type="words" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText 
              text="Explore my latest work in Angular development and UI/UX design."
              type="words"
              animationDelay={100}
            />
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
              <TabsTrigger value="development" onClick={() => setFilter('development')}>Development</TabsTrigger>
              <TabsTrigger value="design" onClick={() => setFilter('design')}>UI/UX Design</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group overflow-hidden rounded-xl bg-background border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <GitBranch className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span 
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      project.category === 'development' 
                        ? 'bg-blue-100 text-blue-800' 
                        : project.category === 'design' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {project.category === 'development' 
                      ? 'Development' 
                      : project.category === 'design' 
                        ? 'UI/UX Design' 
                        : 'Full Project'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 border-t">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
