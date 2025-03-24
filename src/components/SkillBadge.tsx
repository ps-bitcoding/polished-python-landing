
import { ReactNode } from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: ReactNode;
  level?: number; // 1-5 scale
  className?: string;
}

const SkillBadge = ({ name, icon, level = 3, className = '' }: SkillBadgeProps) => {
  // Generate skill level indicators
  const renderSkillLevel = () => {
    return (
      <div className="flex space-x-1 mt-2">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-2 rounded-full ${
              index < level 
                ? 'bg-primary' 
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`glass-card hover:scale-105 transition-transform duration-300 ${className}`}>
      <div className="flex flex-col items-center text-center p-2">
        {icon && <div className="text-primary mb-3">{icon}</div>}
        <h3 className="font-medium text-foreground">{name}</h3>
        {renderSkillLevel()}
      </div>
    </div>
  );
};

export default SkillBadge;
