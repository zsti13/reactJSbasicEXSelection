// src/components/TaskBrowser.jsx
import { useEffect, useMemo, useState } from 'react';
import { loadAllTasks, prettyCategory } from '../lib/loadTasks.js';

export default function TaskBrowser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true);
      const d = await loadAllTasks();
      setData(d);
      const firstCat = Object.keys(d)[0] || '';
      setSelectedCategory(firstCat);
      setSelectedTaskId(d[firstCat]?.[0]?.id || '');
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(() => Object.keys(data).sort(), [data]);
  const tasks = data[selectedCategory] ?? [];
  const selectedTask = tasks.find((t) => t.id === selectedTaskId) ?? null;

  if (loading) return <p className="tb-muted">Ładowanie zadań…</p>;

  if (!categories.length) {
    return (
      <div className="tb-empty">
        <h3>Brak zadań</h3>
        <p>
          Umieść pliki z zadaniami w <code>src/data/*.js</code>.
        </p>
        <p>Format przykładowego pliku znajdziesz poniżej w instrukcji.</p>
      </div>
    );
  }

  return (
    <div className="tb-grid">
      <aside className="tb-sidebar">
        <h2 className="tb-title">Działy</h2>
        <ul className="tb-cat-list">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`tb-cat-btn ${
                  cat === selectedCategory ? 'active' : ''
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTaskId(data[cat]?.[0]?.id || '');
                }}
              >
                {prettyCategory(cat)}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="tb-main">
        <header className="tb-header">
          <div className="tb-select-wrap">
            <label>
              Wybierz zadanie:{' '}
              <select
                value={selectedTaskId}
                onChange={(e) => setSelectedTaskId(e.target.value)}
              >
                {tasks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </header>

        {selectedTask ? (
          <TaskDetail task={selectedTask} />
        ) : (
          <p className="tb-muted">Brak zadań w tym dziale.</p>
        )}
      </main>
    </div>
  );
}

function TaskDetail({ task }) {
  const hasHtml =
    typeof task.description === 'string' && task.description.includes('<');
  return (
    <section className="tb-task">
      <div className="tb-task-head">
        <h3 className="tb-task-title">{task.title}</h3>
        {task.difficulty && <span className="tb-chip">{task.difficulty}</span>}
      </div>

      {hasHtml ? (
        <div
          className="tb-desc"
          dangerouslySetInnerHTML={{ __html: task.description }}
        />
      ) : (
        <p className="tb-desc">{task.description}</p>
      )}

      {task.hints?.length ? (
        <>
          <h4>Wskazówki</h4>
          <ul className="tb-hints">
            {task.hints.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      ) : null}

      {task.starterCode && (
        <>
          <h4>Kod startowy</h4>
          <pre className="tb-code">
            <code>{task.starterCode}</code>
          </pre>
        </>
      )}

      {task.solution && (
        <details className="tb-solution">
          <summary>Pokaż rozwiązanie</summary>
          <pre className="tb-code">
            <code>{task.solution}</code>
          </pre>
        </details>
      )}
    </section>
  );
}
