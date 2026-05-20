import React, { useState, useEffect, useCallback } from 'react';
import { Brain, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TestLayout from '@/components/test/TestLayout';
import QuestionCard from '@/components/test/QuestionCard';
import ScoreCard from '@/components/test/ScoreCard';
import { memoryRecallSets } from '@/lib/testData';

export default function MemoryRecall() {
  const [setIdx, setSetIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState('study'); // study | quiz | done
  const [countdown, setCountdown] = useState(30);

  const sets = memoryRecallSets;
  const currentSet = sets[setIdx];
  const currentQ = currentSet?.questions[questionIdx];

  const totalQuestions = sets.reduce((sum, s) => sum + s.questions.length, 0);
  const answeredSoFar = sets.slice(0, setIdx).reduce((sum, s) => sum + s.questions.length, 0) + questionIdx + (answered ? 1 : 0);

  useEffect(() => {
    if (phase === 'study' && countdown > 0) {
      const t = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [phase, countdown]);

  const handleStartQuiz = () => {
    setPhase('quiz');
  };

  const handleSelect = useCallback((idx) => {
    setSelected(idx);
    setAnswered(true);
    if (idx === currentQ.correct) setScore(s => s + 1);
  }, [currentQ]);

  const handleNext = useCallback(() => {
    if (questionIdx + 1 < currentSet.questions.length) {
      setQuestionIdx(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else if (setIdx + 1 < sets.length) {
      setSetIdx(s => s + 1);
      setQuestionIdx(0);
      setSelected(null);
      setAnswered(false);
      setPhase('study');
      setCountdown(30);
    } else {
      setPhase('done');
    }
  }, [questionIdx, setIdx, currentSet, sets.length]);

  const reset = () => {
    setSetIdx(0);
    setQuestionIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setPhase('study');
    setCountdown(30);
  };

  const progress = (answeredSoFar / totalQuestions) * 100;
  const info = currentSet?.studyInfo;

  return (
    <TestLayout title="Memory Recall" icon={Brain} iconColor="text-purple-400" progress={phase === 'done' ? 100 : progress} onReset={reset} showReset>
      {phase === 'done' ? (
        <ScoreCard correct={score} total={totalQuestions} onRetry={reset} />
      ) : phase === 'study' ? (
        <motion.div
          key={`study-${setIdx}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-mono">Set {setIdx + 1} of {sets.length}</span>
            <div className="flex items-center gap-1.5 text-sm font-mono">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className={countdown <= 10 ? 'text-destructive font-bold' : 'text-muted-foreground'}>{countdown}s</span>
            </div>
          </div>

          <div className="rounded-xl bg-muted/30 border border-border/40 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Memorize</span> the following details. You will be asked questions about them. <span className="text-destructive font-medium">No notes allowed.</span>
            </p>
          </div>

          <div className="rounded-xl border border-primary/30 bg-card p-6 space-y-3">
            {Object.entries(info).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center py-1 border-b border-border/30 last:border-0">
                <span className="text-sm text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                <span className="font-mono text-foreground font-medium">{val}</span>
              </div>
            ))}
          </div>

          <Button onClick={handleStartQuiz} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            I've Memorized It — Start Quiz
          </Button>
        </motion.div>
      ) : (
        <QuestionCard
          questionNumber={questionIdx + 1}
          totalQuestions={currentSet.questions.length}
          questionText={currentQ.q}
          options={currentQ.options}
          selectedAnswer={selected}
          correctAnswer={currentQ.correct}
          answered={answered}
          onSelect={handleSelect}
          onNext={handleNext}
        />
      )}
    </TestLayout>
  );
}