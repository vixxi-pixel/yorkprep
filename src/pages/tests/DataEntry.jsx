import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import TestLayout from '@/components/test/TestLayout';
import ScoreCard from '@/components/test/ScoreCard';
import { dataEntryExercises } from '@/lib/testData';

export default function DataEntry() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  const exercises = dataEntryExercises;
  const current = exercises[currentIdx];

  useEffect(() => {
    if (started && !finished) {
      intervalRef.current = setInterval(() => setTimer(t => t + 1), 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [started, finished]);

  useEffect(() => {
    if (started && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIdx, started]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = userInput.trim() === current.value;
    setResults(r => [...r, { expected: current.value, entered: userInput.trim(), correct: isCorrect }]);

    if (currentIdx + 1 >= exercises.length) {
      setFinished(true);
      clearInterval(intervalRef.current);
    } else {
      setCurrentIdx(i => i + 1);
      setUserInput('');
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setUserInput('');
    setResults([]);
    setFinished(false);
    setStarted(false);
    setTimer(0);
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const correctCount = results.filter(r => r.correct).length;
  const progress = ((currentIdx + (results.length > currentIdx ? 1 : 0)) / exercises.length) * 100;

  return (
    <TestLayout title="Data Entry" icon={Keyboard} iconColor="text-blue-400" progress={finished ? 100 : progress} onReset={reset} showReset={started}>
      {!started ? (
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <Keyboard className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Data Entry Test</h2>
            <p className="text-muted-foreground mb-6">
              You will be shown information (license plates, phone numbers, addresses, etc.) that you must type <span className="text-foreground font-medium">exactly</span> as displayed. Speed and accuracy both count.
            </p>
            <Button onClick={() => setStarted(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Start Test
            </Button>
          </div>
        </div>
      ) : finished ? (
        <ScoreCard correct={correctCount} total={exercises.length} onRetry={reset}>
          <p className="text-sm text-muted-foreground mb-4">Completed in {formatTime(timer)}</p>
          <div className="text-left space-y-2 max-h-60 overflow-y-auto">
            {results.map((r, i) => (
              <div key={i} className={`flex items-start gap-2 text-sm px-3 py-2 rounded-lg ${r.correct ? 'bg-emerald-500/10' : 'bg-destructive/10'}`}>
                {r.correct ? <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />}
                <div>
                  <p className="text-foreground font-mono text-xs">Expected: {r.expected}</p>
                  {!r.correct && <p className="text-destructive font-mono text-xs">Entered: {r.entered}</p>}
                </div>
              </div>
            ))}
          </div>
        </ScoreCard>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-mono">
                Entry {currentIdx + 1} of {exercises.length}
              </span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {formatTime(timer)}
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6 mb-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">{current.label}</p>
              <p className="text-2xl sm:text-3xl font-mono font-semibold text-primary tracking-wider">
                {current.value}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                ref={inputRef}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={`Type the ${current.label.toLowerCase()} exactly...`}
                className="text-center font-mono text-lg h-14 bg-card border-border/60"
                autoComplete="off"
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Entry
              </Button>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </TestLayout>
  );
}