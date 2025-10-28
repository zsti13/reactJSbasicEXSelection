export const zadania = [
  {
    tytul: 'Zadanie 1 – Sprawdzenie typu liczby',
    opis: 'Utwórz zmienną `liczba = 42` i wypisz jej typ danych.',
    oczekiwane: 'number',
    rozw: `let liczba = 42;
document.write(typeof liczba);`,
    test: (out) => out.trim() === 'number',
  },
  {
    tytul: 'Zadanie 2 – Liczba zmiennoprzecinkowa',
    opis: 'Utwórz zmienną `x = 3.14` i wypisz jej typ danych.',
    oczekiwane: 'number',
    rozw: `let x = 3.14;
document.write(typeof x);`,
    test: (out) => out.trim() === 'number',
  },
  {
    tytul: 'Zadanie 3 – Nieskończoność',
    opis: 'Podziel liczbę 10 przez 0 i wypisz wynik.',
    oczekiwane: 'Infinity',
    rozw: `document.write(10 / 0);`,
    test: (out) => out.trim() === 'Infinity',
  },
  {
    tytul: 'Zadanie 4 – NaN',
    opis: 'Wykonaj działanie `0 / 0` i wypisz wynik.',
    oczekiwane: 'NaN',
    rozw: `document.write(0 / 0);`,
    test: (out) => out.trim() === 'NaN',
  },
  {
    tytul: 'Zadanie 5 – Sprawdzenie, czy wartość jest liczbą',
    opis: 'Użyj `isNaN()` aby sprawdzić, czy `"abc"` to liczba.',
    oczekiwane: 'true',
    rozw: `document.write(isNaN("abc"));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 6 – Konwersja na liczbę całkowitą',
    opis: 'Zamień `"25.9"` na liczbę całkowitą przy użyciu `parseInt()` i wypisz wynik.',
    oczekiwane: '25',
    rozw: `let tekst = "25.9";
let liczba = parseInt(tekst);
document.write(liczba);`,
    test: (out) => out.trim() === '25',
  },
  {
    tytul: 'Zadanie 7 – Zaokrąglenie liczby w górę',
    opis: 'Zaokrąglij `4.1` w górę za pomocą `Math.ceil()`.',
    oczekiwane: '5',
    rozw: `document.write(Math.ceil(4.1));`,
    test: (out) => out.trim() === '5',
  },
  {
    tytul: 'Zadanie 8 – Zaokrąglenie liczby w dół',
    opis: 'Zaokrąglij `4.9` w dół za pomocą `Math.floor()`.',
    oczekiwane: '4',
    rozw: `document.write(Math.floor(4.9));`,
    test: (out) => out.trim() === '4',
  },
  {
    tytul: 'Zadanie 9 – Zaokrąglenie do najbliższej liczby całkowitej',
    opis: 'Zaokrąglij `4.6` przy pomocy `Math.round()`.',
    oczekiwane: '5',
    rozw: `document.write(Math.round(4.6));`,
    test: (out) => out.trim() === '5',
  },
  {
    tytul: 'Zadanie 10 – Potęgowanie',
    opis: 'Oblicz 3 do potęgi 4 przy pomocy `Math.pow()`.',
    oczekiwane: '81',
    rozw: `document.write(Math.pow(3, 4));`,
    test: (out) => out.trim() === '81',
  },
  {
    tytul: 'Zadanie 11 – Pierwiastek kwadratowy',
    opis: 'Oblicz pierwiastek kwadratowy z 64 za pomocą `Math.sqrt()`.',
    oczekiwane: '8',
    rozw: `document.write(Math.sqrt(64));`,
    test: (out) => out.trim() === '8',
  },
  {
    tytul: 'Zadanie 12 – Wartość bezwzględna',
    opis: 'Oblicz wartość bezwzględną liczby -10 przy pomocy `Math.abs()`.',
    oczekiwane: '10',
    rozw: `document.write(Math.abs(-10));`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 13 – Maksimum z kilku liczb',
    opis: 'Znajdź największą liczbę spośród 4, 9, 2, 15 przy użyciu `Math.max()`.',
    oczekiwane: '15',
    rozw: `document.write(Math.max(4, 9, 2, 15));`,
    test: (out) => out.trim() === '15',
  },
  {
    tytul: 'Zadanie 14 – Minimum z kilku liczb',
    opis: 'Znajdź najmniejszą liczbę spośród 7, 3, 12, 1 przy użyciu `Math.min()`.',
    oczekiwane: '1',
    rozw: `document.write(Math.min(7, 3, 12, 1));`,
    test: (out) => out.trim() === '1',
  },
  {
    tytul: 'Zadanie 15 – Liczba losowa (0–1)',
    opis: 'Wypisz wynik `Math.random()`. Powinien być pomiędzy 0 a 1.',
    oczekiwane: '0–1',
    rozw: `let los = Math.random();
document.write(los);`,
    test: (out) => parseFloat(out) >= 0 && parseFloat(out) < 1,
  },
  {
    tytul: 'Zadanie 16 – Losowa liczba całkowita (1–10)',
    opis: 'Wygeneruj losową liczbę całkowitą z zakresu 1–10.',
    oczekiwane: '1–10',
    rozw: `let los = Math.floor(Math.random() * 10) + 1;
document.write(los);`,
    test: (out) => parseInt(out) >= 1 && parseInt(out) <= 10,
  },
  {
    tytul: 'Zadanie 17 – Zaokrąglanie do dwóch miejsc po przecinku',
    opis: 'Zaokrąglij `12.3456` do dwóch miejsc po przecinku i wypisz wynik.',
    oczekiwane: '12.35',
    rozw: `let liczba = 12.3456;
document.write(liczba.toFixed(2));`,
    test: (out) => out.trim() === '12.35',
  },
  {
    tytul: 'Zadanie 18 – Funkcja trygonometryczna',
    opis: 'Oblicz sinus 90° (w radianach: π/2) przy pomocy `Math.sin()`.',
    oczekiwane: '1',
    rozw: `document.write(Math.sin(Math.PI / 2));`,
    test: (out) => Math.abs(parseFloat(out) - 1) < 0.0001,
  },
  {
    tytul: 'Zadanie 19 – Stała PI',
    opis: 'Wypisz wartość stałej `Math.PI` z dokładnością do 2 miejsc po przecinku.',
    oczekiwane: '3.14',
    rozw: `document.write(Math.PI.toFixed(2));`,
    test: (out) => out.trim() === '3.14',
  },
  {
    tytul: 'Zadanie 20 – Potęgowanie z operatorem **',
    opis: 'Zamiast `Math.pow()`, użyj operatora `**` do obliczenia 2⁸.',
    oczekiwane: '256',
    rozw: `document.write(2 ** 8);`,
    test: (out) => out.trim() === '256',
  },
];
