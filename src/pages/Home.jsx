import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield, Radio, Keyboard, Brain, ListOrdered, Map,
  BookOpen, Hash, Calculator, ChevronRight, Target
} from 'lucide-react';

const modules = [
  { title: "Decision Making", desc: "Assign the right emergency agency", icon: Shield, path: "/test/decision-making", color: "from-amber-500/20 to-amber-600/5", iconColor: "text-amber-400" },
  { title: "Data Entry", desc: "Enter information quickly & accurately", icon: Keyboard, path: "/test/data-entry", color: "from-blue-500/20 to-blue-600/5", iconColor: "text-blue-400" },
  { title: "Call Summarization", desc: "Read scenarios & recall key details", icon: Radio, path: "/test/call-summarization", color: "from-emerald-500/20 to-emerald-600/5", iconColor: "text-emerald-400" },
  { title: "Memory Recall", desc: "Memorize details then answer from memory", icon: Brain, path: "/test/memory-recall", color: "from-purple-500/20 to-purple-600/5", iconColor: "text-purple-400" },
  { title: "Prioritization", desc: "Rank emergency calls by urgency", icon: ListOrdered, path: "/test/prioritization", color: "from-rose-500/20 to-rose-600/5", iconColor: "text-rose-400" },
  { title: "Map Reading", desc: "Determine directions & routes", icon: Map, path: "/test/map-reading", color: "from-cyan-500/20 to-cyan-600/5", iconColor: "text-cyan-400" },
  { title: "Reading Comprehension", desc: "Read passages & answer questions", icon: BookOpen, path: "/test/reading-comprehension", color: "from-orange-500/20 to-orange-600/5", iconColor: "text-orange-400" },
  { title: "Character Comparison", desc: "Match strings for accuracy", icon: Hash, path: "/test/character-comparison", color: "from-pink-500/20 to-pink-600/5", iconColor: "text-pink-400" },
  { title: "Math", desc: "Solve dispatcher-related math problems", icon: Calculator, path: "/test/math", color: "from-teal-500/20 to-teal-600/5", iconColor: "text-teal-400" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">York Region Police</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              <span className="text-foreground">CritiCall</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">
                Practice Tests
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Prepare for the 911 dispatcher exam with realistic practice modules. 
              Build speed, accuracy, and confidence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {modules.map((mod) => (
            <motion.div key={mod.title} variants={item}>
              <Link to={mod.path} className="group block">
                <div className={`relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br ${mod.color} p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-card/80 backdrop-blur ${mod.iconColor}`}>
                      <mod.icon className="w-5 h-5" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground">{mod.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}