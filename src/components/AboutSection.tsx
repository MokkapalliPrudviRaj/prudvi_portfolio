
import React from 'react';
import { Code, Figma, Zap, Award, Briefcase, GraduationCap, BrainCog, Layout } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-secondary/50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-primary text-sm font-medium">About Me</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <AnimatedText text="My Background" type="words" />
          </h2>

          <p className="text-lg text-muted-foreground">
            <AnimatedText
              text="I'm a dedicated Angular developer and UI/UX designer with over 3 years of experience building intuitive digital experiences."
              type="words"
              animationDelay={100}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About me content card */}
          <Card className="border bg-background/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                My Story
              </h3>
              <p className="mb-4 text-muted-foreground">
              </p>
              <p className="mb-4 text-muted-foreground">
                My approach combines technical precision with creative vision, allowing me to develop solutions that are both functional and visually appealing. I'm particularly passionate about accessibility, performance optimization, and designing experiences that feel effortless to users.
              </p>
              <p className="mb-4 text-muted-foreground">
                I transform Figma designs into responsive, pixel-perfect web applications using HTML, CSS, TypeScript, and Angular.
              </p>
              <p className="text-muted-foreground">
                I thrive on building reusable design systems that ensure consistency and speed up development across products.
                My design process always begins with user empathy, followed by wireframes, prototyping, and iterative testing to deliver impactful digital experiences.
              </p>
            </CardContent>
          </Card>

          {/* Skills & Expertise - Redesigned */}
          <Card className="border bg-background/80 backdrop-blur-sm shadow-md overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                Expertise
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all hover:translate-x-1 duration-300 border border-primary/10">
                  <div className="rounded-md bg-primary/20 p-3 flex-shrink-0">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Development</h4>
                    <p className="text-sm text-muted-foreground">Angular, TypeScript, RxJS, NgRx, CSS, and RESTful API integration</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all hover:translate-x-1 duration-300 border border-primary/10">
                  <div className="rounded-md bg-primary/20 p-3 flex-shrink-0">
                    <Figma className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">User research, wireframing, prototyping, and visual design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all hover:translate-x-1 duration-300 border border-primary/10">
                  <div className="rounded-md bg-primary/20 p-3 flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Performance</h4>
                    <p className="text-sm text-muted-foreground">Web optimization, lazy loading, and performance monitoring</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all hover:translate-x-1 duration-300 border border-primary/10">
                <div className="rounded-md bg-primary/20 p-3 flex-shrink-0">
                  <BrainCog className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">AI Tools</h4>
                  <p className="text-sm text-muted-foreground">ChatGPT, GitHub Copilot, Figma AI and Web to Figma</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              icon: <Briefcase className="w-6 h-6 text-primary" />,
              title: "3+ Years",
              subtitle: "Professional Experience"
            },
            {
              icon: <GraduationCap className="w-6 h-6 text-primary" />,
              title: "Certified",
              subtitle: "Angular & UX Designer"
            },
            {
              icon: <Award className="w-6 h-6 text-primary" />,
              title: "3+ Projects",
              subtitle: "Successfully Build"
            },
            {
              icon: <Layout className="w-6 h-6 text-primary" />,
              title: "UI/UX Focused",
              subtitle: "Figma to Code Expertise"
            }
          ].map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-full p-2 bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
