import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import DecisionMaking from './pages/tests/DecisionMaking';
import DataEntry from './pages/tests/DataEntry';
import CallSummarization from './pages/tests/CallSummarization';
import MemoryRecall from './pages/tests/MemoryRecall';
import Prioritization from './pages/tests/Prioritization';
import CharacterComparison from './pages/tests/CharacterComparison';
import ReadingComprehension from './pages/tests/ReadingComprehension';
import MapReading from './pages/tests/MapReading';
import MathTest from './pages/tests/MathTest';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test/decision-making" element={<DecisionMaking />} />
      <Route path="/test/data-entry" element={<DataEntry />} />
      <Route path="/test/call-summarization" element={<CallSummarization />} />
      <Route path="/test/memory-recall" element={<MemoryRecall />} />
      <Route path="/test/prioritization" element={<Prioritization />} />
      <Route path="/test/character-comparison" element={<CharacterComparison />} />
      <Route path="/test/reading-comprehension" element={<ReadingComprehension />} />
      <Route path="/test/map-reading" element={<MapReading />} />
      <Route path="/test/math" element={<MathTest />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App