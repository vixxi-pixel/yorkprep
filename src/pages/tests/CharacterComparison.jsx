import React, { useState, useEffect, useCallback } from 'react';
import { Hash, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TestLayout from '@/components/test/TestLayout';
import ScoreCard from '@/components/test/ScoreCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { characterComparisonQuestions } from '@/lib/testData';

export default function CharacterComparison() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);

  const questions = characterComparisonQuestions;
  const q = questions[currentIdx];

  useEffect(() => {
    if (started && !finished) {
      const t = setInterval(() => setTimer(s => s + 1), 1000);
      return () => clearInterval(t);
    }
  }, [started, finished]);

  const handleSelect = useCallback((idx) => {
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore(s => s + 1);
  }, [q]);

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [currentIdx, questions.length]);

  const reset = () => {
    setCurrentIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setTimer(0);
    setStarted(false);
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const progress = ((currentIdx + (answered ? 1 : 0)) / questions.length) * 100;

  if (!started) {
    return (
      <TestLayout title="Character Comparison" icon={Hash} iconColor="text-pink-400" progress={0} onReset={reset} showReset={false}>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <Hash className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Character Comparison</h2>
            <p className="text-muted-foreground mb-6">
              You'll be shown a string of characters. Select the <span className="text-foreground font-medium">exact match</span> from the options below. Focus on accuracy — even one character difference matters.
            </p>
            <Button onClick={() => setStarted(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Start Test
            </Button>
          </div>
        </div>
      </TestLayout>
    );
  }

  return (
    <TestLayout title="Character Comparison" icon={Hash} iconColor="text-pink-400" progress={finished ? 100 : progress} onReset={reset} showReset>
      {finished ? (
        <ScoreCard correct={score} total={questions.length} onRetry={reset}>
          <p className="text-sm text-muted-foreground mb-2">Completed in {formatTime(timer)}</p>
        </ScoreCard>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={currentIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-mono">
                {currentIdx + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {formatTime(timer)}
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-card p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Match this string:</p>
              <p className="text-2xl sm:text-3xl font-mono font-bold text-primary tracking-widest">{q.original}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt, idx) => {
                const isSelected = selected === idx;
                const isCorrect = q.correct === idx;
                const showResult = answered;

                return (
                  <button
                    key={idx}
                    onClick={() => !answered && handleSelect(idx)}
                    disabled={answered}
                    className={cn(
                      "px-4 py-4 rounded-xl border text-center font-mono tracking-wider transition-all",
                      !answered && "hover:border-primary/50 hover:bg-primary/5 cursor-pointer border-border/60 bg-card/50",
                      !answered && isSelected && "border-primary bg-primary/10",
                      showResult && isCorrect && "border-emerald-500/50 bg-emerald-500/10",
                      showResult && isSelected && !isCorrect && "border-destructive/50 bg-destructive/10",
                      showResult && !isSelected && !isCorrect && "border-border/30 opacity-40",
                      answered && "cursor-default"
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                <Button onClick={handleNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {currentIdx + 1 >= questions.length ? 'See Results' : 'Next →'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </TestLayout>
  );
}