import { useState } from 'react';

export function useTaskManager(zadania) {
  const [score, setScore] = useState(0);
  const [proby, setProby] = useState(new Array(zadania.length).fill(0));
  const [zaliczone, setZaliczone] = useState(new Array(zadania.length).fill(false));
  const [outputs, setOutputs] = useState(new Array(zadania.length).fill(''));
  const [tests, setTests] = useState(new Array(zadania.length).fill(''));
  const [codes, setCodes] = useState(new Array(zadania.length).fill(''));
  const [showSolutions, setShowSolutions] = useState(new Array(zadania.length).fill(false));

  const updateCode = (i, value) => {
    const newCodes = [...codes];
    newCodes[i] = value;
    setCodes(newCodes);
  };

  const runCode = (i) => {
    const kod = codes[i].trim();
    let outText = '';

    if (!kod) {
      const newOutputs = [...outputs];
      newOutputs[i] = "⚠️ Wpisz kod przed uruchomieniem.";
      setOutputs(newOutputs);
      return;
    }

    const oldWrite = document.write;
    document.write = (txt) => (outText += txt);

    try {
      new Function(kod)();
      const wynik = outText.trim().replace(/\s+/g, ' ');
      const test = zadania[i].test;

      const newOutputs = [...outputs];
      const newTests = [...tests];
      const newProby = [...proby];
      const newZaliczone = [...zaliczone];

      newOutputs[i] = outText;

      if (test) {
        const ok = test(wynik);
        if (ok) {
          newTests[i] = '✅ Wynik poprawny!';
          if (!zaliczone[i]) {
            newZaliczone[i] = true;
            setScore(score + 1);
            setZaliczone(newZaliczone);
          }
          newProby[i] = 0;
        } else {
          newProby[i] = proby[i] + 1;
          newTests[i] = '❌ Wynik niepoprawny. Spróbuj ponownie.';
        }
      } else {
        newTests[i] = 'ℹ️ Brak automatycznego testu dla tego zadania.';
      }

      setOutputs(newOutputs);
      setTests(newTests);
      setProby(newProby);
    } catch (e) {
      const newOutputs = [...outputs];
      const newProby = [...proby];
      newOutputs[i] = `Błąd: ${e.message}`;
      newProby[i] = proby[i] + 1;
      setOutputs(newOutputs);
      setProby(newProby);
    }

    document.write = oldWrite;
  };

  const toggleSolution = (i) => {
    const newShowSolutions = [...showSolutions];
    newShowSolutions[i] = !newShowSolutions[i];
    setShowSolutions(newShowSolutions);
  };

  const clearOutput = (i) => {
    const newOutputs = [...outputs];
    const newTests = [...tests];
    newOutputs[i] = '';
    newTests[i] = '';
    setOutputs(newOutputs);
    setTests(newTests);
  };

  return {
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
  };
}
