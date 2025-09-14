import React, { useState, useEffect } from 'react';
import { Clock, Headphones, TrendingUp } from 'lucide-react';

export const ConversionBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [recentSales] = useState(47);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 border border-primary/20 rounded-lg p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Sales Counter */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">High Demand!</p>
            <p className="font-bold text-foreground">
              <span className="text-primary">{recentSales} books</span> sold in the last hour
            </p>
            <p className="text-xs text-muted-foreground">
              Over <span className="font-semibold text-success">15,000 copies</span> sold worldwide
            </p>
          </div>
        </div>

        {/* Audio Deal */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Headphones className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Limited Time Audiobook Deal</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">$39.99</span>
              <span className="font-bold text-success text-lg">$19.99</span>
              <span className="bg-warning text-white px-2 py-1 rounded text-xs font-bold">50% OFF</span>
            </div>
            <div className="flex items-center gap-1 text-warning text-sm font-medium">
              <Clock className="h-3 w-3" />
              <span>{formatTime(timeLeft)} left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};