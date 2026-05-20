import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Home, CheckCircle, XCircle } from 'lucide-react';

export default function ScoreCard({ correct, total, onRetry, showReview, children }) {
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-lg mx-auto text-center"
    >
      <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${passed ? 'bg-emerald-500/10' : 'bg-destructive/10'}`}>
          {passed ? (
            <Trophy className="w-10 h-10 text-emerald-400" />
          ) : (
            <XCircle className="w-10 h-10 text-destructive" />
          )}
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-2">{pct}%</h2>
        <p className="text-muted-foreground mb-1">
          {correct} of {total} correct
        </p>
        <p className={`text-sm font-medium mb-8 ${passed ? 'text-emerald-400' : 'text-destructive'}`}>
          {passed ? 'Great job! You passed.' : 'Keep practicing. You need 70% to pass.'}
        </p>

        {children}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Button onClick={onRetry} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" /> Try Again
          </Button>
          <Link to="/">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              <Home className="w-4 h-4" /> All Modules
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}