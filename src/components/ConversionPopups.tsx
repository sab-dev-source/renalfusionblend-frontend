import React, { useState, useEffect } from 'react';
import { X, Clock, Headphones, TrendingUp, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface ConversionPopupsProps {
  onClose?: () => void;
}

export const ConversionPopups: React.FC<ConversionPopupsProps> = ({ onClose }) => {
  const [showRecentSales, setShowRecentSales] = useState(false);
  const [showAudioDeal, setShowAudioDeal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [recentSalesCount, setRecentSalesCount] = useState(10);

  useEffect(() => {
    // Show recent sales popup after 3 seconds
    const salesTimer = setTimeout(() => setShowRecentSales(true), 3000);
    
    // Show audio deal popup after 15 seconds
    const dealTimer = setTimeout(() => setShowAudioDeal(true), 15000);
    
    return () => {
      clearTimeout(salesTimer);
      clearTimeout(dealTimer);
    };
  }, []);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update recent sales count every 10-30 seconds
    const salesInterval = setInterval(() => {
      setRecentSalesCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 20000 + 10000);

    return () => clearInterval(salesInterval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const RecentSalesPopup = () => (
    <div className={`fixed bottom-4 left-4 z-50 bg-white border border-success shadow-xl rounded-lg p-4 max-w-sm transform transition-all duration-500 ${showRecentSales ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-foreground">Live Sales</span>
        </div>
        <button 
          onClick={() => setShowRecentSales(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Users className="h-5 w-5 text-success" />
        <div>
          <p className="text-sm font-medium text-foreground">
            {recentSalesCount} books sold in the last hour
          </p>
          <p className="text-xs text-muted-foreground">
            15,000+ sold globally this year
          </p>
        </div>
      </div>
    </div>
  );

  const AudioDealPopup = () => (
    <Dialog open={showAudioDeal} onOpenChange={setShowAudioDeal}>
      <DialogContent className="max-w-md">
        <DialogTitle className="sr-only">Exclusive Audio Edition Deal</DialogTitle>
        <DialogDescription className="sr-only">Limited time offer for audiobook version</DialogDescription>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
            <Headphones className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground">🎧 Exclusive Audio Edition Deal!</h3>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
            <p className="text-lg font-semibold text-foreground mb-2">
              World-Class Narration Experience
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Get the audiobook version of Dialysis Champions 2nd Edition narrated by professional medical voice actors
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-warning" />
              <span className="text-2xl font-bold text-warning">
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground line-through">Regular Price: $39.99</p>
              <p className="text-2xl font-bold text-success">Limited Time: $19.99</p>
              <p className="text-xs text-warning font-medium">50% OFF - Today Only!</p>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full btn-medical">
              🎧 Get Audio Edition - $19.99
            </button>
            <button 
              onClick={() => setShowAudioDeal(false)}
              className="w-full text-sm text-muted-foreground hover:text-foreground"
            >
              No thanks, I'll continue browsing
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            ✓ 30-day money-back guarantee ✓ Instant download
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <RecentSalesPopup />
      <AudioDealPopup />
    </>
  );
};