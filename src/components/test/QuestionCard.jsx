import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function QuestionCard({ questionNumber, totalQuestions, questionText, options, selectedAnswer, correctAnswer, answered, onSelect, onNext, explanation }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionNumber}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground font-mono">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-6">
          <p className="text-foreground text-lg leading-relaxed">{questionText}</p>
        </div>

        <div className="space-y-3">
          {options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = correctAnswer === idx;
            const showResult = answered;

            return (
              <button
                key={idx}
                onClick={() => !answered && onSelect(idx)}
                disabled={answered}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl border transition-all duration-200",
                  !answered && "hover:border-primary/50 hover:bg-primary/5 cursor-pointer",
                  !answered && !isSelected && "border-border/60 bg-card/50",
                  !answered && isSelected && "border-primary bg-primary/10",
                  showResult && isCorrect && "border-emerald-500/50 bg-emerald-500/10",
                  showResult && isSelected && !isCorrect && "border-destructive/50 bg-destructive/10",
                  showResult && !isSelected && !isCorrect && "border-border/30 opacity-50",
                  answered && "cursor-default"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-semibold",
                    !answered && !isSelected && "bg-secondary text-secondary-foreground",
                    !answered && isSelected && "bg-primary text-primary-foreground",
                    showResult && isCorrect && "bg-emerald-500 text-white",
                    showResult && isSelected && !isCorrect && "bg-destructive text-white",
                  )}>
                    {showResult && isCorrect ? <CheckCircle className="w-4 h-4" /> :
                     showResult && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                     String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-foreground">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {answered && explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-muted/50 border border-border/40 p-4"
          >
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Explanation: </span>{explanation}</p>
          </motion.div>
        )}

        {answered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-end"
          >
            <Button onClick={onNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
              {questionNumber === totalQuestions ? 'See Results' : 'Next Question →'}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}