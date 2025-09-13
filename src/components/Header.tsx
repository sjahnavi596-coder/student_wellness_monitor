import { Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-border/30 shadow-glow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-wellness p-3 rounded-2xl shadow-glow animate-float">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                WellnessHub
              </h1>
              <p className="text-xs text-muted-foreground">
                Student Mental Wellness Platform
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Dashboard
            </a>
            <a href="#trends" className="text-foreground hover:text-primary transition-colors font-medium">
              Trends
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <Button variant="default" className="bg-gradient-wellness text-white border-0 hover:scale-105 shadow-glow transition-all duration-300">
              Get Help
            </Button>
          </nav>

          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;