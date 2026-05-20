import React, { useState, useCallback } from 'react';
import { Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import TestLayout from '@/components/test/TestLayout';
import QuestionCard from '@/components/test/QuestionCard';
import ScoreCard from '@/components/test/ScoreCard';
import { callSummarizationQuestions } from '@/lib/testData';

export default function CallSummarization() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showTranscript, setShowTranscript] = useState(true);
  const [finished, setFinished] = useState(false);

  const scenarios = callSummarizationQuestions;
  const scenario = scenarios[scenarioIdx];
  const currentQ = scenario?.questions[questionIdx];

  const totalQuestions = scenarios.reduce((sum, s) => sum + s.questions.length, 0);
  const answeredSoFar = scenarios.slice(0, scenarioIdx).reduce((sum, s) => sum + s.questions.length, 0) + questionIdx + (answered ? 1 : 0);

  const handleSelect = useCallback((idx) => {
    setSelected(idx);
    setAnswered(true);
    if (idx === currentQ.correct) setScore(s => s + 1);
  }, [currentQ]);

  const handleNext = useCallback(() => {
    if (questionIdx + 1 < scenario.questions.length) {
      setQuestionIdx(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else if (scenarioIdx + 1 < scenarios.length) {
      setScenarioIdx(s => s + 1);
      setQuestionIdx(0);
      setSelected(null);
      setAnswered(false);
      setShowTranscript(true);
    } else {
      setFinished(true);
    }
  }, [questionIdx, scenarioIdx, scenario, scenarios.length]);

  const handleReadyForQuestions = () => {
    setShowTranscript(false);
  };

  const reset = () => {
    setScenarioIdx(0);
    setQuestionIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setShowTranscript(true);
    setFinished(false);
  };

  const progress = (answeredSoFar / totalQuestions) * 100;

  return (
    <TestLayout title="Call Summarization" icon={Radio} iconColor="text-emerald-400" progress={finished ? 100 : progress} onReset={reset} showReset>
      {finished ? (
        <ScoreCard correct={score} total={totalQuestions} onRetry={reset} />
      ) : showTranscript ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={`transcript-${scenarioIdx}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-6"
          >
            <div className="mb-2">
              <span className="text-sm text-muted-foreground font-mono">
                Scenario {scenarioIdx + 1} of {scenarios.length}
              </span>
            </div>
            <div className="rounded-xl bg-muted/30 border border-border/40 p-4 mb-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Instructions:</span> Read the call transcript carefully. You will then answer questions about it from memory.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Call Transcript</h3>
              <p className="text-foreground leading-relaxed text-lg">{scenario.transcript}</p>
            </div>
            <Button onClick={handleReadyForQuestions} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              I'm Ready — Show Questions
            </Button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <QuestionCard
          questionNumber={questionIdx + 1}
          totalQuestions={scenario.questions.length}
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