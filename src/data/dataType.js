export const zadania = [
  {
    tytul: 'Zadanie 1 – Typ zmiennej',
    opis: 'Utwórz zmienną `x = 42` i wypisz jej typ danych za pomocą `typeof`.',
    oczekiwane: 'number',
    rozw: `let x = 42;
document.write(typeof x);`,
    test: (out) => out.trim() === 'number',
  },
  {
    tytul: 'Zadanie 2 – Typ napisu',
    opis: 'Utwórz zmienną `tekst = "Hello"` i sprawdź jej typ danych.',
    oczekiwane: 'string',
    rozw: `let tekst = "Hello";
document.write(typeof tekst);`,
    test: (out) => out.trim() === 'string',
  },
  {
    tytul: 'Zadanie 3 – Typ wartości logicznej',
    opis: 'Utwórz zmienną `czyPrawda = false` i wypisz jej typ.',
    oczekiwane: 'boolean',
    rozw: `let czyPrawda = false;
document.write(typeof czyPrawda);`,
    test: (out) => out.trim() === 'boolean',
  },
  {
    tytul: 'Zadanie 4 – Wartość null',
    opis: 'Utwórz zmienną `wartosc = null` i wypisz jej typ danych. Co zauważasz?',
    oczekiwane: 'object',
    rozw: `let wartosc = null;
document.write(typeof wartosc);`,
    test: (out) => out.trim() === 'object',
  },
  {
    tytul: 'Zadanie 5 – Niezdefiniowana zmienna',
    opis: 'Zadeklaruj zmienną `let zm;` i wypisz jej typ danych.',
    oczekiwane: 'undefined',
    rozw: `let zm;
document.write(typeof zm);`,
    test: (out) => out.trim() === 'undefined',
  },
  {
    tytul: 'Zadanie 6 – Typ tablicy',
    opis: 'Utwórz zmienną `tab = [1, 2, 3]` i sprawdź jej typ przy pomocy `typeof` oraz `Array.isArray()`. Wypisz wynik drugiego sprawdzenia.',
    oczekiwane: 'true',
    rozw: `let tab = [1, 2, 3];
document.write(Array.isArray(tab));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 7 – Typ obiektu',
    opis: 'Utwórz zmienną `osoba = { imie: "Jan", wiek: 25 }` i wypisz jej typ danych.',
    oczekiwane: 'object',
    rozw: `let osoba = { imie: "Jan", wiek: 25 };
document.write(typeof osoba);`,
    test: (out) => out.trim() === 'object',
  },
  {
    tytul: 'Zadanie 8 – Konwersja na string',
    opis: 'Utwórz zmienną `liczba = 123` i zamień ją na napis używając `String()`. Wypisz wynik oraz jego typ.',
    oczekiwane: 'string',
    rozw: `let liczba = 123;
let tekst = String(liczba);
document.write(typeof tekst);`,
    test: (out) => out.trim() === 'string',
  },
  {
    tytul: 'Zadanie 9 – Konwersja napisu na liczbę',
    opis: 'Utwórz zmienną `napis = "45"` i zamień ją na liczbę za pomocą `Number()`. Wypisz typ wyniku.',
    oczekiwane: 'number',
    rozw: `let napis = "45";
let liczba = Number(napis);
document.write(typeof liczba);`,
    test: (out) => out.trim() === 'number',
  },
  {
    tytul: 'Zadanie 10 – Parsowanie liczby całkowitej',
    opis: 'Utwórz zmienną `tekst = "100px"` i zamień ją na liczbę całkowitą za pomocą `parseInt()`. Wypisz wynik.',
    oczekiwane: '100',
    rozw: `let tekst = "100px";
let wynik = parseInt(tekst);
document.write(wynik);`,
    test: (out) => out.trim() === '100',
  },
  {
    tytul: 'Zadanie 11 – Parsowanie liczby zmiennoprzecinkowej',
    opis: 'Utwórz zmienną `tekst = "12.34kg"` i wypisz wynik `parseFloat(tekst)`.',
    oczekiwane: '12.34',
    rozw: `let tekst = "12.34kg";
let wynik = parseFloat(tekst);
document.write(wynik);`,
    test: (out) => out.trim() === '12.34',
  },
  {
    tytul: 'Zadanie 12 – Konwersja logiczna',
    opis: 'Utwórz zmienną `wartosc = 0` i zamień ją na typ logiczny `Boolean(wartosc)`. Wypisz wynik.',
    oczekiwane: 'false',
    rozw: `let wartosc = 0;
document.write(Boolean(wartosc));`,
    test: (out) => out.trim() === 'false',
  },
  {
    tytul: 'Zadanie 13 – Konwersja liczby na napis metodą toString()',
    opis: 'Utwórz zmienną `liczba = 99` i zamień ją na string przy użyciu `toString()`. Wypisz typ wyniku.',
    oczekiwane: 'string',
    rozw: `let liczba = 99;
let tekst = liczba.toString();
document.write(typeof tekst);`,
    test: (out) => out.trim() === 'string',
  },
  {
    tytul: 'Zadanie 14 – Niejawna konwersja',
    opis: 'Wypisz wynik działania `"5" + 3`. Zastanów się, jaki to typ.',
    oczekiwane: '53',
    rozw: `document.write("5" + 3);`,
    test: (out) => out.trim() === '53',
  },
  {
    tytul: 'Zadanie 15 – Konwersja do liczby przy odejmowaniu',
    opis: 'Wypisz wynik `"10" - 2`. Zauważ różnicę względem dodawania.',
    oczekiwane: '8',
    rozw: `document.write("10" - 2);`,
    test: (out) => out.trim() === '8',
  },
  {
    tytul: 'Zadanie 16 – Sprawdzenie instancji',
    opis: 'Utwórz `data = new Date()` i sprawdź, czy jest instancją klasy `Date` przy pomocy `instanceof`.',
    oczekiwane: 'true',
    rozw: `let data = new Date();
document.write(data instanceof Date);`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 17 – Rzutowanie tablicy na string',
    opis: 'Utwórz tablicę `[1,2,3]` i zamień ją na napis metodą `String()`. Wypisz wynik.',
    oczekiwane: '1,2,3',
    rozw: `let tab = [1, 2, 3];
document.write(String(tab));`,
    test: (out) => out.trim() === '1,2,3',
  },
  {
    tytul: 'Zadanie 18 – Sprawdzenie typu funkcji',
    opis: 'Utwórz funkcję `function test(){}` i wypisz jej typ danych.',
    oczekiwane: 'function',
    rozw: `function test() {}
document.write(typeof test);`,
    test: (out) => out.trim() === 'function',
  },
  {
    tytul: 'Zadanie 19 – Rzutowanie obiektu na boolean',
    opis: 'Utwórz obiekt `obj = {}` i sprawdź wynik `Boolean(obj)`.',
    oczekiwane: 'true',
    rozw: `let obj = {};
document.write(Boolean(obj));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 20 – Sprawdzenie typu połączenia typów',
    opis: 'Utwórz `let wynik = "7" * "3"` i wypisz `wynik` oraz jego typ.',
    oczekiwane: '21number',
    rozw: `let wynik = "7" * "3";
document.write(wynik + typeof wynik);`,
    test: (out) => out.trim() === '21number',
  },
];
