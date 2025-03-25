
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-black/40 rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/10 hover-lift opacity-0 animate-scale-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="h-12 w-12 rounded-full bg-nature-100 dark:bg-nature-950/50 flex items-center justify-center text-nature-600 mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
