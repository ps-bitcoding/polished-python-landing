
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  tags, 
  imageUrl, 
  liveUrl, 
  githubUrl, 
  featured = false 
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group glass-card overflow-hidden transition-all duration-500 flex flex-col ${
        featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden rounded-lg h-52">
        <div 
          className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`} />
        
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </a>
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
