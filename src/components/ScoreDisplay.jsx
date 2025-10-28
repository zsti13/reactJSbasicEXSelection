function ScoreDisplay({ score, totalTasks }) {
  return (
    <div className="text-center fw-bold mb-3">
      Wynik: {score} / {totalTasks} punktów
    </div>
  );
}

export default ScoreDisplay;
