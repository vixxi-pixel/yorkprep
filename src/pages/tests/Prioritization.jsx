import React, { useState } from 'react';
import { ListOrdered, GripVertical, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import TestLayout from '@/components/test/TestLayout';
import ScoreCard from '@/components/test/ScoreCard';
import { prioritizationQuestions } from '@/lib/testData';

export default function Prioritization() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [items, setItems] = useState(shuffleArray([...prioritizationQuestions[0].calls]));
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState([]);
  const [finished, setFinished] = useState(false);

  const questions = prioritizationQuestions;
  const current = questions[currentIdx];

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleDragEnd = (result) => {
    if (!result.destination || submitted) return;
    const newItems = [...items];
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = items.every((item, idx) => item.priority === idx + 1);
    setScores(s => [...s, correct ? 1 : 0]);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setItems(shuffleArray([...questions[nextIdx].calls]));
      setSubmitted(false);
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setItems(shuffleArray([...questions[0].calls]));
    setSubmitted(false);
    setScores([]);
    setFinished(false);
  };

  const progress = ((currentIdx + (submitted ? 1 : 0)) / questions.length) * 100;

  return (
    <TestLayout title="Prioritization" icon={ListOrdered} iconColor="text-rose-400" progress={finished ? 100 : progress} onReset={reset} showReset>
      {finished ? (
        <ScoreCard correct={scores.filter(s => s === 1).length} total={questions.length} onRetry={reset} />
      ) : (
        <motion.div key={currentIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground font-mono">
              Scenario {currentIdx + 1} of {questions.length}
            </span>
          </div>

          <div className="rounded-xl bg-muted/30 border border-border/40 p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Instructions:</span> {current.instructions} Drag items to reorder.
            </p>
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="priority-list">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2 mb-6">
                  {items.map((item, idx) => (
                    <Draggable key={item.id} draggableId={item.id} index={idx} isDragDisabled={submitted}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                            snapshot.isDragging ? 'border-primary bg-primary/10 shadow-lg' :
                            submitted && item.priority === idx + 1 ? 'border-emerald-500/50 bg-emerald-500/10' :
                            submitted && item.priority !== idx + 1 ? 'border-destructive/50 bg-destructive/10' :
                            'border-border/60 bg-card'
                          }`}
                        >
                          <GripVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-foreground text-sm flex-1">{item.text}</span>
                          {submitted && (
                            item.priority === idx + 1 ?
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" /> :
                              <span className="text-xs text-destructive font-mono flex-shrink-0">Should be #{item.priority}</span>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {!submitted ? (
            <Button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Order
            </Button>
          ) : (
            <Button onClick={handleNext} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {currentIdx + 1 >= questions.length ? 'See Results' : 'Next Scenario →'}
            </Button>
          )}
        </motion.div>
      )}
    </TestLayout>
  );
}