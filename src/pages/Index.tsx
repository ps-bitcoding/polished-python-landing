
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import SkillBadge from '@/components/SkillBadge';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';

// Mock data for projects
const projects: ProjectProps[] = [
  {
    id: 'project-1',
    title: 'E-commerce API',
    description: 'A RESTful API built with Django REST Framework for an e-commerce platform with JWT authentication.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets using Python and modern web technologies.',
    tags: ['Python', 'Pandas', 'Flask', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Task Manager CLI',
    description: 'A command-line task management tool with cloud sync capabilities.',
    tags: ['Python', 'Click', 'SQLite', 'API'],
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    githubUrl: '#',
    liveUrl: '#',
  },
];

// Mock data for skills
const skills = [
  { name: 'Python', level: 5 },
  { name: 'Django', level: 5 },
  { name: 'Flask', level: 4 },
  { name: 'FastAPI', level: 4 },
  { name: 'PostgreSQL', level: 4 },
  { name: 'React', level: 3 },
  { name: 'Docker', level: 4 },
  { name: 'AWS', level: 3 },
  { name: 'Git/CI/CD', level: 4 },
  { name: 'Data Analysis', level: 5 },
  { name: 'API Design', level: 5 },
  { name: 'JavaScript', level: 3 },
];

// Certifications data
const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 2022 },
  { name: 'Python Professional', issuer: 'Python Institute', year: 2021 },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: 2020 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="chip animate-fade-in mb-3">Experienced Python Developer</span>
              <h1 className="heading-xl mb-4 animate-fade-in animate-delay-100">
                Building <span className="text-primary">Powerful</span> & <span className="text-primary">Scalable</span> Applications
              </h1>
              <p className="text-muted-foreground text-lg mb-6 animate-fade-in animate-delay-200">
                Python specialist with expertise in Django, Flask and API development.
                Delivering clean, efficient and maintainable solutions for complex problems.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                <a href="#contact" className="btn-primary">
                  Hire Me
                </a>
                <a href="#" className="btn-outlined flex items-center">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="flex space-x-4 mt-8 animate-fade-in animate-delay-400">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-400 opacity-20 blur-2xl animate-pulse-soft" />
                <div className="relative glass-panel rounded-full w-full h-full flex items-center justify-center border-4 border-white/30 dark:border-gray-800/30 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80" 
                    alt="Developer Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <a 
              href="#about" 
              className="p-2 rounded-full bg-secondary/80 dark:bg-accent/80 backdrop-blur-sm flex items-center justify-center"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AnimatedSection id="about" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="chip mb-3">About Me</span>
            <h2 className="heading-lg mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card">
              <h3 className="heading-md mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a seasoned Python developer with 8+ years of experience building robust web applications,
                APIs, and data-driven solutions. My passion lies in creating clean, efficient code that solves
                real-world problems.
              </p>
              <p className="text-muted-foreground mb-4">
                After completing my degree in Computer Science, I've worked with startups, established companies,
                and as a freelancer, giving me a diverse perspective on software development.
              </p>
              <p className="text-muted-foreground">
                I specialize in Python frameworks like Django and Flask, and I'm committed to constant learning
                and staying updated with the latest technologies and best practices.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="heading-md mb-4">Professional Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold">Senior Backend Developer</h4>
                    <span className="chip">2021-Present</span>
                  </div>
                  <p className="text-muted-foreground text-sm">TechCorp Inc.</p>
                  <p className="text-sm mt-2">Leading backend development for a SaaS platform used by 10,000+ customers.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold">Python Developer</h4>
                    <span className="chip">2019-2021</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Innovate Labs</p>
                  <p className="text-sm mt-2">Developed RESTful APIs and microservices for fintech applications.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold">Junior Developer</h4>
                    <span className="chip">2017-2019</span>
                  </div>
                  <p className="text-muted-foreground text-sm">WebSolutions Ltd</p>
                  <p className="text-sm mt-2">Built and maintained Django applications for clients across various industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 bg-secondary/50 dark:bg-accent/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="chip mb-3">What I Do</span>
            <h2 className="heading-lg mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="heading-md text-center mb-8">Certifications</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="glass-card p-5">
                  <h4 className="font-bold text-lg">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="chip mb-3">My Work</span>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="btn-primary flex items-center mx-auto justify-center w-auto">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-secondary/50 dark:bg-accent/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="chip mb-3">What Others Say</span>
            <h2 className="heading-lg mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card relative">
              <div className="absolute -top-5 -left-2 text-primary text-5xl opacity-20">"</div>
              <p className="italic text-muted-foreground mb-4 relative z-10">
                Working with this developer was fantastic. They delivered a complex API system on time and under budget.
                Their Python knowledge is exceptional, and they were able to solve problems that our team had been stuck on for weeks.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces&q=80"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">CTO, TechStart</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card relative">
              <div className="absolute -top-5 -left-2 text-primary text-5xl opacity-20">"</div>
              <p className="italic text-muted-foreground mb-4 relative z-10">
                An absolute pleasure to work with. They not only delivered exactly what we needed but also suggested
                improvements we hadn't thought of. Their Django expertise saved us months of development time.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=faces&q=80"
                    alt="David Miller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">David Miller</h4>
                  <p className="text-sm text-muted-foreground">Project Manager, DataFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="chip mb-3">Get In Touch</span>
            <h2 className="heading-lg mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-md mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance work or full-time positions.
                If you have a project that needs coding skills, don't hesitate to reach out.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-primary mr-3" />
                  <a href="#" className="hover:text-primary transition-colors">
                    github.com/pythondev
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-primary mr-3" />
                  <a href="#" className="hover:text-primary transition-colors">
                    linkedin.com/in/pythondev
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Python Developer Portfolio. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
