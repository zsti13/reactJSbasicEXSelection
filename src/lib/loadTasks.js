// src/lib/loadTasks.js
// Wczytuje wszystkie pliki zadań z katalogu src/data/*.js i grupuje je po kategoriach.

export async function loadAllTasks() {
  // Ten plik znajduje się w src/lib, więc cofamy się o jeden katalog do src/data
  const modules = import.meta.glob('../data/*.js', { eager: true });

  /** @type {Record<string, any[]>} */
  const byCategory = {};

  for (const [path, mod] of Object.entries(modules)) {
    const file = path.split('/').pop() || '';
    const baseName = file.replace(/\.js$/i, '');

    // 1) Kategoria z eksportu modułu (opcjonalnie), albo z nazwy pliku
    const baseCategory = String(
      mod.category || mod.CATEGORY || baseName
    ).toLowerCase();

    // 2) Tablica zadań: default export albo named export "tasks"
    const rawTasks = mod?.default || mod?.tasks || [];
    if (!Array.isArray(rawTasks)) continue;

    // 3) Normalizacja i grupowanie
    rawTasks.forEach((t, idx) => {
      const norm = {
        id: t?.id ?? `${baseCategory}-${idx + 1}`,
        title: t?.title ?? `Zadanie ${idx + 1}`,
        description: t?.description ?? t?.desc ?? '',
        starterCode: t?.starterCode ?? t?.code ?? '',
        solution: t?.solution ?? '',
        hints: t?.hints ?? [],
        difficulty: t?.difficulty ?? t?.poziom ?? '',
        section: t?.section ?? baseCategory, // pozwala nadpisać dział w obrębie jednego pliku
        ...t,
      };

      const sectionKey = String(norm.section).toLowerCase();
      if (!byCategory[sectionKey]) byCategory[sectionKey] = [];
      byCategory[sectionKey].push(norm);
    });
  }

  // Sortowanie zadań w obrębie kategorii po id/tytule dla stabilności
  for (const key of Object.keys(byCategory)) {
    byCategory[key].sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
  }

  return byCategory;
}

// Ładne etykiety PL dla znanych kategorii
export const categoryLabels = {
  zmienne: 'Zmienne',
  variables: 'Zmienne',
  operatory: 'Operatory',
  pętle: 'Pętle',
  petle: 'Pętle',
  warunki: 'Warunki',
  string: 'Stringi',
  strings: 'Stringi',
  tablice: 'Tablice',
  arrays: 'Tablice',
};

export function prettyCategory(key) {
  const k = String(key || '').toLowerCase();
  if (categoryLabels[k]) return categoryLabels[k];
  return k ? k[0].toUpperCase() + k.slice(1) : '';
}
``;
