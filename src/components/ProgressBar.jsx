function ProgressBar({ score, totalTasks }) {
  const progressPercent = (score / totalTasks) * 100;

  return (
    <div className="progress mb-5" style={{ height: '20px' }}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${progressPercent}%` }}
        aria-valuenow={progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default ProgressBar;
