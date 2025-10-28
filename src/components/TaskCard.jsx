function TaskCard({
  zadanie,
  index,
  code,
  output,
  testResult,
  proby,
  showSolution,
  onCodeChange,
  onRunCode,
  onToggleSolution,
  onClearOutput,
}) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{zadanie.tytul}</h3>
        <p className="text-muted">{zadanie.opis}</p>

        <div className="alert alert-info mb-3">
          <strong>Oczekiwane rozwiązanie:</strong>
          <pre className="mt-2 mb-0" style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>
            {zadanie.oczekiwane}
          </pre>
        </div>

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="// wpisz tutaj swój kod JavaScript..."
          value={code}
          onChange={(e) => onCodeChange(index, e.target.value)}
          style={{ fontFamily: 'monospace', fontSize: '14px' }}
        ></textarea>

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={() => onRunCode(index)}>
            Wynik
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => onToggleSolution(index)}
            disabled={proby < 3}
          >
            Pokaż rozwiązanie
          </button>
          <button className="btn btn-danger" onClick={() => onClearOutput(index)}>
            Wyczyść
          </button>
        </div>

        <small className="text-muted d-block mb-2">
          Próby: {proby} / 3
        </small>

        {output && (
          <div
            className="p-3 mb-2 bg-light border rounded"
            style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}
            dangerouslySetInnerHTML={{ __html: output }}
          ></div>
        )}

        {testResult && (
          <div
            className={`fw-bold ${
              testResult.includes('✅')
                ? 'text-success'
                : testResult.includes('❌')
                ? 'text-danger'
                : 'text-muted'
            }`}
          >
            {testResult}
          </div>
        )}

        {showSolution && (
          <div className="alert alert-success mt-3">
            <strong>Rozwiązanie:</strong>
            <pre className="mt-2 mb-0" style={{ fontSize: '14px' }}>
              {zadanie.rozw}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
