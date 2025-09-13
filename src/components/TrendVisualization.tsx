import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Mock data for demonstration
const moodData = [
  { day: 'Mon', mood: 4, date: '11/11' },
  { day: 'Tue', mood: 3, date: '11/12' },
  { day: 'Wed', mood: 5, date: '11/13' },
  { day: 'Thu', mood: 2, date: '11/14' },
  { day: 'Fri', mood: 4, date: '11/15' },
  { day: 'Sat', mood: 5, date: '11/16' },
  { day: 'Sun', mood: 4, date: '11/17' },
];

const weeklyStats = [
  { label: 'Average Mood', value: '3.8', trend: '+0.2' },
  { label: 'Best Day', value: 'Wed', mood: '😁' },
  { label: 'Mood Variance', value: 'Low', status: 'stable' },
];

const TrendVisualization = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Your Wellness Journey
        </h2>
        <p className="text-muted-foreground">
          Track your progress and identify patterns over time
        </p>
      </div>

      {/* Mood Chart */}
      <Card className="shadow-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            7-Day Mood Trend
          </CardTitle>
          <CardDescription>
            Your daily mood ratings from the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(210 75% 60%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(210 75% 60%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground text-sm"
                />
                <YAxis 
                  domain={[1, 5]}
                  axisLine={false}
                  tickLine={false}
                  className="text-muted-foreground text-sm"
                />
                <Area
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(210 75% 60%)"
                  strokeWidth={3}
                  fill="url(#moodGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weeklyStats.map((stat, index) => (
          <Card
            key={stat.label}
            className="shadow-card border-border/50 hover:shadow-wellness 
                       transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
                {stat.mood && (
                  <span className="ml-2 text-3xl">{stat.mood}</span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
              {stat.trend && (
                <div className="text-xs text-success mt-1 font-medium">
                  {stat.trend} from last week
                </div>
              )}
              {stat.status && (
                <div className="text-xs text-secondary-foreground mt-1 font-medium">
                  Emotional stability: {stat.status}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendVisualization;