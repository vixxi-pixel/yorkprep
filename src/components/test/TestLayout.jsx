import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

export default function TestLayout({ title, icon: Icon, iconColor, children, progress, onReset, showReset }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              {Icon && <Icon className={`w-4 h-4 ${iconColor || 'text-primary'}`} />}
              <h1 className="font-semibold text-foreground text-sm sm:text-base">{title}</h1>
            </div>
          </div>
          {showReset && (
            <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground hover:text-foreground gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </Button>
          )}
        </div>
        {progress !== undefined && (
          <Progress value={progress} className="h-0.5 rounded-none" />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8"
      >
        {children}
      </motion.div>
    </div>
  );
}