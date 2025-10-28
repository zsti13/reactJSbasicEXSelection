export const zadania = [
  {
    tytul: 'Zadanie 1 – Typ string',
    opis: 'Utwórz zmienną `napis = "Hello"` i wypisz jej typ danych.',
    oczekiwane: 'string',
    rozw: `let napis = "Hello";
document.write(typeof napis);`,
    test: (out) => out.trim() === 'string',
  },
  {
    tytul: 'Zadanie 2 – Długość napisu',
    opis: 'Utwórz `tekst = "JavaScript"` i wypisz jego długość za pomocą `.length`.',
    oczekiwane: '10',
    rozw: `let tekst = "JavaScript";
document.write(tekst.length);`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 3 – Konkatenacja',
    opis: 'Połącz dwa napisy: `"Hello"` i `"World"` z użyciem operatora `+` i wypisz wynik.',
    oczekiwane: 'HelloWorld',
    rozw: `let a = "Hello";
let b = "World";
document.write(a + b);`,
    test: (out) => out.trim() === 'HelloWorld',
  },
  {
    tytul: 'Zadanie 4 – Łączenie z odstępem',
    opis: 'Połącz `"Hello"` i `"World"` w jeden napis z odstępem między nimi.',
    oczekiwane: 'Hello World',
    rozw: `let a = "Hello";
let b = "World";
document.write(a + " " + b);`,
    test: (out) => out.trim() === 'Hello World',
  },
  {
    tytul: 'Zadanie 5 – Wielkie litery',
    opis: 'Utwórz zmienną `tekst = "javascript"` i wypisz wynik `tekst.toUpperCase()`.',
    oczekiwane: 'JAVASCRIPT',
    rozw: `let tekst = "javascript";
document.write(tekst.toUpperCase());`,
    test: (out) => out.trim() === 'JAVASCRIPT',
  },
  {
    tytul: 'Zadanie 6 – Małe litery',
    opis: 'Dla `tekst = "HELLO"` wypisz wynik `tekst.toLowerCase()`.',
    oczekiwane: 'hello',
    rozw: `let tekst = "HELLO";
document.write(tekst.toLowerCase());`,
    test: (out) => out.trim() === 'hello',
  },
  {
    tytul: 'Zadanie 7 – Wycinanie fragmentu',
    opis: 'Dla `tekst = "JavaScript"` wypisz fragment od indeksu 0 do 4 przy pomocy `slice()`.',
    oczekiwane: 'Java',
    rozw: `let tekst = "JavaScript";
document.write(tekst.slice(0, 4));`,
    test: (out) => out.trim() === 'Java',
  },
  {
    tytul: 'Zadanie 8 – Wyszukiwanie fragmentu',
    opis: 'Dla `tekst = "Ala ma kota"` wypisz indeks, pod którym zaczyna się słowo `"ma"`. Użyj `indexOf()`.',
    oczekiwane: '4',
    rozw: `let tekst = "Ala ma kota";
document.write(tekst.indexOf("ma"));`,
    test: (out) => out.trim() === '4',
  },
  {
    tytul: 'Zadanie 9 – Sprawdzenie wystąpienia',
    opis: 'Dla `tekst = "Frontend Developer"` sprawdź, czy zawiera słowo `"Developer"`. Użyj `includes()`.',
    oczekiwane: 'true',
    rozw: `let tekst = "Frontend Developer";
document.write(tekst.includes("Developer"));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 10 – Zamiana fragmentu tekstu',
    opis: 'Dla `tekst = "Kawa jest dobra"` zamień słowo `"dobra"` na `"pyszna"` i wypisz wynik.',
    oczekiwane: 'Kawa jest pyszna',
    rozw: `let tekst = "Kawa jest dobra";
document.write(tekst.replace("dobra", "pyszna"));`,
    test: (out) => out.trim() === 'Kawa jest pyszna',
  },
  {
    tytul: 'Zadanie 11 – Wycięcie z użyciem substring()',
    opis: 'Dla `tekst = "JavaScript"` wypisz fragment od 4 do 10 przy użyciu `substring()`.',
    oczekiwane: 'Script',
    rozw: `let tekst = "JavaScript";
document.write(tekst.substring(4, 10));`,
    test: (out) => out.trim() === 'Script',
  },
  {
    tytul: 'Zadanie 12 – Rozdzielanie tekstu',
    opis: 'Dla `tekst = "a,b,c,d"` rozdziel go na tablicę przy pomocy `split(",")` i wypisz długość powstałej tablicy.',
    oczekiwane: '4',
    rozw: `let tekst = "a,b,c,d";
let tab = tekst.split(",");
document.write(tab.length);`,
    test: (out) => out.trim() === '4',
  },
  {
    tytul: 'Zadanie 13 – Usuwanie spacji',
    opis: 'Dla `tekst = "   Hello World   "` usuń zbędne spacje na początku i końcu za pomocą `trim()`.',
    oczekiwane: 'Hello World',
    rozw: `let tekst = "   Hello World   ";
document.write(tekst.trim());`,
    test: (out) => out.trim() === 'Hello World',
  },
  {
    tytul: 'Zadanie 14 – Sprawdzenie początku tekstu',
    opis: 'Dla `tekst = "JavaScript jest super"` sprawdź, czy zaczyna się od `"Java"`. Użyj `startsWith()`.',
    oczekiwane: 'true',
    rozw: `let tekst = "JavaScript jest super";
document.write(tekst.startsWith("Java"));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 15 – Sprawdzenie końca tekstu',
    opis: 'Dla `tekst = "index.html"` sprawdź, czy kończy się na `.html`. Użyj `endsWith()`.',
    oczekiwane: 'true',
    rozw: `let tekst = "index.html";
document.write(tekst.endsWith(".html"));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 16 – Powtarzanie tekstu',
    opis: 'Dla `tekst = "Hi"` wypisz go 3 razy przy użyciu `repeat()`.',
    oczekiwane: 'HiHiHi',
    rozw: `let tekst = "Hi";
document.write(tekst.repeat(3));`,
    test: (out) => out.trim() === 'HiHiHi',
  },
  {
    tytul: 'Zadanie 17 – Podmiana wielu wystąpień',
    opis: 'Dla `tekst = "kot kot kot"` zamień wszystkie słowa `"kot"` na `"pies"` za pomocą `replaceAll()`.',
    oczekiwane: 'pies pies pies',
    rozw: `let tekst = "kot kot kot";
document.write(tekst.replaceAll("kot", "pies"));`,
    test: (out) => out.trim() === 'pies pies pies',
  },
  {
    tytul: 'Zadanie 18 – Dostęp do znaku',
    opis: 'Dla `tekst = "JavaScript"` wypisz pierwszy znak napisu.',
    oczekiwane: 'J',
    rozw: `let tekst = "JavaScript";
document.write(tekst[0]);`,
    test: (out) => out.trim() === 'J',
  },
  {
    tytul: 'Zadanie 19 – Template literals',
    opis: 'Utwórz zmienne `imie = "Jan"` i `wiek = 25`, a następnie wypisz tekst: `Jan ma 25 lat` używając składni template string.',
    oczekiwane: 'Jan ma 25 lat',
    rozw: `let imie = "Jan";
let wiek = 25;
document.write(\`\${imie} ma \${wiek} lat\`);`,
    test: (out) => out.trim() === 'Jan ma 25 lat',
  },
  {
    tytul: 'Zadanie 20 – Odwrócenie tekstu',
    opis: 'Dla `tekst = "ABC"` wypisz go od końca (CBA).',
    oczekiwane: 'CBA',
    rozw: `let tekst = "ABC";
document.write(tekst.split("").reverse().join(""));`,
    test: (out) => out.trim() === 'CBA',
  },
];
