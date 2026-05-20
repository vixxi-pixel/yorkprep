import React, { useState, useCallback } from 'react';
import { BookOpen } from 'lucide-react';
import TestLayout from '@/components/test/TestLayout';
import QuestionCard from '@/components/test/QuestionCard';
import ScoreCard from '@/components/test/ScoreCard';
import { readingComprehensionQuestions } from '@/lib/testData';

export default function ReadingComprehension() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = readingComprehensionQuestions;
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
    <TestLayout title="Reading Comprehension" icon={BookOpen} iconColor="text-orange-400" progress={finished ? 100 : progress} onReset={reset} showReset>
      {finished ? (
        <ScoreCard correct={score} total={questions.length} onRetry={reset} />
      ) : (
        <div className="space-y-6">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Passage</h3>
            <p className="text-foreground leading-relaxed">{q.passage}</p>
          </div>
          <QuestionCard
            questionNumber={currentQ + 1}
            totalQuestions={questions.length}
            questionText={q.question}
            options={q.options}
            selectedAnswer={selected}
            correctAnswer={q.correct}
            answered={answered}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        </div>
      )}
    </TestLayout>
  );
}