import Header from '@/components/Header';
import MoodTracker from '@/components/MoodTracker';
import WellnessRecommendations from '@/components/WellnessRecommendations';
import TrendVisualization from '@/components/TrendVisualization';
import { Button } from '@/components/ui/button';
import { Heart, Brain, BarChart3, Users } from 'lucide-react';
import heroImage from '@/assets/wellness-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-wellness opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Mental Wellness{' '}
                <span className="bg-gradient-wellness bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Track your daily mood, discover patterns, and receive personalized recommendations 
                to support your mental health and academic success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-wellness text-white border-0
                           px-8 py-4 text-lg font-semibold rounded-2xl shadow-glow
                           hover:scale-105 hover:shadow-wellness transition-all duration-500
                           animate-pulse-soft"
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 text-primary bg-white/80 backdrop-blur-sm
                           hover:bg-primary hover:text-white hover:border-primary
                           px-8 py-4 text-lg font-semibold rounded-2xl
                           hover:scale-105 transition-all duration-500 shadow-soft"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose WellnessHub?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive tools to support student mental health and wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Daily Check-ins',
                description: 'Track your mood and emotional patterns with quick daily assessments',
                color: 'bg-primary-soft text-primary'
              },
              {
                icon: Brain,
                title: 'Smart Analysis',
                description: 'AI-powered sentiment analysis to understand your mental health trends',
                color: 'bg-wellness-soft text-wellness'
              },
              {
                icon: BarChart3,
                title: 'Trend Insights',
                description: 'Visualize your progress with beautiful charts and meaningful data',
                color: 'bg-success/20 text-success'
              },
              {
                icon: Users,
                title: 'Personalized Care',
                description: 'Get tailored wellness recommendations based on your unique patterns',
                color: 'bg-secondary-soft text-secondary-foreground'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 
                                    group-hover:scale-110 group-hover:shadow-glow transition-all duration-500
                                    shadow-soft animate-float`}>
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Mood Tracker Section */}
          <section id="dashboard">
            <div className="max-w-2xl mx-auto">
              <MoodTracker />
            </div>
          </section>

          {/* Trends Section */}
          <section id="trends">
            <TrendVisualization />
          </section>

          {/* Recommendations Section */}
          <section id="resources">
            <WellnessRecommendations />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-wellness p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">WellnessHub</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Supporting student mental health through technology, awareness, and community.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;