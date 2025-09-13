import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Brain, Moon, Coffee } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Take 5 Deep Breaths',
    description: 'A quick mindfulness exercise to center yourself and reduce anxiety.',
    category: 'Mindfulness',
    duration: '2 min',
    icon: Brain,
    color: 'bg-primary-soft text-primary',
  },
  {
    id: 2,
    title: 'Walk Outside',
    description: 'Fresh air and movement can boost your mood and energy levels.',
    category: 'Physical',
    duration: '10 min',
    icon: Heart,
    color: 'bg-success/20 text-success',
  },
  {
    id: 3,
    title: 'Practice Gratitude',
    description: 'Write down three things you are grateful for today.',
    category: 'Mental',
    duration: '5 min',
    icon: Coffee,
    color: 'bg-wellness-soft text-wellness',
  },
  {
    id: 4,
    title: 'Sleep Schedule',
    description: 'Maintain a consistent bedtime to improve your mental health.',
    category: 'Sleep',
    duration: 'Daily',
    icon: Moon,
    color: 'bg-secondary-soft text-secondary-foreground',
  },
];

const WellnessRecommendations = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Personalized Wellness Tips
        </h2>
        <p className="text-muted-foreground">
          Tailored recommendations based on your mood patterns
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => {
          const IconComponent = rec.icon;
          return (
            <Card
              key={rec.id}
              className="shadow-card border-border/50 hover:shadow-wellness 
                         transition-all duration-300 hover:scale-[1.02] group
                         animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${rec.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {rec.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {rec.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {rec.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {rec.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WellnessRecommendations;