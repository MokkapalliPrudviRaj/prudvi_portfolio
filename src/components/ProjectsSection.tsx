
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
    id: 7,
    title: "Game Developer",
    description: "Game Developer platform will provide comprehensive on Game developement",
    image: "https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-5976.jpg?t=st=1744214749~exp=1744218349~hmac=40d19708acf26292b2bb0bc5e17737e91ade96a6e8aa48f05e11f36bba79858e&w=900",
    category: "both",
    technologies: ["Figma", "HTML/CSS","JavaScript", "Responsive Design", "Figma to code"],
    liveUrl: "https://mokkapalliprudviraj.github.io/Game-Developer/",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/Game-Developer"
  },
  {
    id: 1,
    title: "mCart",
    description: "A mobile and tablet application designed for seamless online shopping experiences.",
    image: "https://cdn-om.cdnpk.net/users/195/195365029/uploads/b4116a68-a5f8-4622-8318-bdae18b460d2/b4116a68-a5f8-4622-8318-bdae18b460d2-thumb.jpg?token=exp=1744269645~hmac=cab148d605f719fcaf4e488aca89e2c1",
    category: "development",
    technologies: ["Angular", "Angular Materials", "Responsive Design", "Figma to code"],
    liveUrl: "https://mokkapalliprudviraj.github.io/mCart/welcome",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/mCart"
  },
  {
    id: 2,
    title: "ShopEase",
    description: "A fully responsive e-commerce platform with advanced filtering and cart functionality.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    category: "both",
    technologies: ["Angular", "Angular Materials", "Figma", "Figma to code"],
    liveUrl: "https://www.figma.com/design/yMPevY0F0oZjWXNwK5CRH6/ShopEase?node-id=0-1&t=6MI3jygy2VFcuyUD-1",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/shop-ease"
  },
  {
    id: 3,
    title: "Doctor Appointment",
    description: "A user-centered design for a healthcare provider portal focusing on accessibility.",
    image: "https://img.freepik.com/free-vector/appointment-booking-landing-page-template_23-2148556675.jpg?t=st=1744185100~exp=1744188700~hmac=4635255ec79f84c55ed0a2c4e7b13c86f69338ce199c670a12c0ec5f40358f30&w=1380",
    category: "design",
    technologies: ["Figma", "Wireframing", "Prototyping", "User Testing"],
    liveUrl: "https://www.figma.com/design/hOrshCIfNdhNxH1WIAEUD6/My-Doctor-Appointment?node-id=60-2293&t=SEn1zdoNyTQBNfPo-1"
  },
  {
    id: 4,
    title: "Investment Tracker",
    description: "An Angular application for visualizing and analyzing financial data with real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "both",
    technologies: ["Angular", "TypeScript", "RxJS", "Chart.js","Figma", , "Figma to code"],
    liveUrl: "https://www.figma.com/design/6X64FBCdaWuRd38SQlgLJj/Investment-Tracker?node-id=0-1&t=4jXTYWgA3yElQtGl-1",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/investment-tracker"
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "End-to-end design and development of a personal website to show case my skills and experience.",
    image: "https://img.freepik.com/free-vector/dropdown-menu-concept-illustration_114360-4501.jpg?t=st=1744214009~exp=1744217609~hmac=869a1b5db7404750c1e61380023ffc60460b65dab8da7d42e4360729aad9b521&w=900",
    category: "both",
    technologies: ["Angular", "Reat.js", "Responsive Design"],
    liveUrl: "https://mokkapalliprudviraj.github.io/prudvi_portfolio/",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/prudvi_portfolio"
  },
  {
    id: 6,
    title: "Burger Queen",
    description: "A Clone PWA application for Burger King.",
    image: "https://img.freepik.com/free-photo/delicious-3d-burger-with-modern-smartphone_23-2150914625.jpg?t=st=1744213651~exp=1744217251~hmac=bd071229c3ef06478d37cd5edc7fd410fa73be9c8d4c2d46657722802ccb0097&w=1480",
    category: "both",
    technologies: ["Figma", "Component Design", "Angular", "PWA", "Figma to code"],
    liveUrl: "https://www.figma.com/design/W53tdZ8uygUUOSJTFhSPIj/Burger-Queen-App?node-id=1-165&t=i4jBjUFrXVgFFksi-1",
    repoUrl: "https://github.com/MokkapalliPrudviRaj/burger-queen-pwa-app"
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
