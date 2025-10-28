import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { zadania } from './data/variables_1';
import Header from './components/Header';
import ScoreDisplay from './components/ScoreDisplay';
import ProgressBar from './components/ProgressBar';
import TaskCard from './components/TaskCard';
import { useTaskManager } from './hooks/useTaskManager';

function App() {
  const {
    score,
    proby,
    outputs,
    tests,
    codes,
    showSolutions,
    updateCode,
    runCode,
    toggleSolution,
    clearOutput,
  } = useTaskManager(zadania);

  return (
    <div className="container py-5">
      <Header />
      <ScoreDisplay score={score} totalTasks={zadania.length} />
      <ProgressBar score={score} totalTasks={zadania.length} />

      {zadania.map((zadanie, i) => (
        <TaskCard
          key={i}
          zadanie={zadanie}
          index={i}
          code={codes[i]}
          output={outputs[i]}
          testResult={tests[i]}
          proby={proby[i]}
          showSolution={showSolutions[i]}
          onCodeChange={updateCode}
          onRunCode={runCode}
          onToggleSolution={toggleSolution}
          onClearOutput={clearOutput}
        />
      ))}
    </div>
  );
}

export default App;
