import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const moods = [
  { emoji: '😁', label: 'Amazing', value: 5, color: 'bg-success' },
  { emoji: '😊', label: 'Good', value: 4, color: 'bg-primary' },
  { emoji: '😐', label: 'Neutral', value: 3, color: 'bg-secondary' },
  { emoji: '😔', label: 'Down', value: 2, color: 'bg-warning' },
  { emoji: '😢', label: 'Struggling', value: 1, color: 'bg-destructive' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [todayLogged, setTodayLogged] = useState(false);

  const handleMoodSelect = (moodValue: number) => {
    setSelectedMood(moodValue);
  };

  const handleSubmit = () => {
    if (selectedMood !== null) {
      // Store mood data (would integrate with backend)
      setTodayLogged(true);
      setSelectedMood(null);
    }
  };

  if (todayLogged) {
    return (
      <Card className="bg-gradient-calm shadow-wellness border-0">
        <CardContent className="pt-6 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold text-foreground">
            Mood logged for today!
          </h3>
          <p className="text-muted-foreground mt-2">
            Great job staying mindful of your wellbeing.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-glow border-0 bg-gradient-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          How are you feeling today?
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Track your daily mood to build awareness and identify patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              className={`
                flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-500
                hover:scale-110 hover:shadow-glow hover:-translate-y-1
                ${
                  selectedMood === mood.value
                    ? 'border-primary bg-gradient-wellness text-white shadow-glow animate-pulse-soft'
                    : 'border-border/30 bg-white/80 backdrop-blur-sm hover:border-primary/50 hover:bg-white shadow-soft'
                }
              `}
            >
              <span className="text-3xl mb-2">{mood.emoji}</span>
              <span className="text-sm font-medium text-foreground">
                {mood.label}
              </span>
            </button>
          ))}
        </div>
        
        {selectedMood !== null && (
          <div className="animate-fade-in">
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-wellness text-white border-0
                         font-semibold py-4 rounded-2xl shadow-glow
                         transition-all duration-500 hover:scale-105 hover:shadow-wellness
                         animate-pulse-soft"
            >
              Log Today's Mood
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;