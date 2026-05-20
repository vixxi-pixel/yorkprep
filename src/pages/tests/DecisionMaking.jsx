import React, { useState, useCallback } from 'react';
import { Shield } from 'lucide-react';
import TestLayout from '@/components/test/TestLayout';
import QuestionCard from '@/components/test/QuestionCard';
import ScoreCard from '@/components/test/ScoreCard';
import { decisionMakingQuestions } from '@/lib/testData';

export default function DecisionMaking() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = decisionMakingQuestions;
  const q = questions[currentQ];

  const handleSelect = useCallback((idx) => {
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore(s => s + 1);
  }, [q]);

  const handleNext = useCallback(() => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [currentQ, questions.length]);

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const progress = ((currentQ + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <TestLayout title="Decision Making" icon={Shield} iconColor="text-amber-400" progress={finished ? 100 : progress} onReset={reset} showReset>
      {finished ? (
        <ScoreCard correct={score} total={questions.length} onRetry={reset} />
      ) : (
        <div>
          <div className="mb-6 rounded-xl bg-muted/30 border border-border/40 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Instructions:</span> For each scenario, determine which emergency agency or combination should be dispatched: Police, Fire, EMS, or Utility.
            </p>
          </div>
          <QuestionCard
            questionNumber={currentQ + 1}
            totalQuestions={questions.length}
            questionText={q.scenario}
            options={q.options}
            selectedAnswer={selected}
            correctAnswer={q.correct}
            answered={answered}
            onSelect={handleSelect}
            onNext={handleNext}
            explanation={q.explanation}
          />
        </div>
      )}
    </TestLayout>
  );
}