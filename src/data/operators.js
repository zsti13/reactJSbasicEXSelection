export const zadania = [
  {
    tytul: 'Zadanie 1 – Dodawanie dwóch liczb',
    opis: 'Utwórz zmienne `a = 5` i `b = 3`. Oblicz ich sumę i wypisz wynik.',
    oczekiwane: '8',
    rozw: `let a = 5;
let b = 3;
let wynik = a + b;
document.write(wynik);`,
    test: (out) => out.trim() === '8',
  },
  {
    tytul: 'Zadanie 2 – Odejmowanie',
    opis: 'Dla zmiennych `x = 20` i `y = 7` oblicz różnicę i wypisz wynik.',
    oczekiwane: '13',
    rozw: `let x = 20;
let y = 7;
let wynik = x - y;
document.write(wynik);`,
    test: (out) => out.trim() === '13',
  },
  {
    tytul: 'Zadanie 3 – Mnożenie',
    opis: 'Stwórz zmienne `a = 6` i `b = 4`. Wypisz ich iloczyn.',
    oczekiwane: '24',
    rozw: `let a = 6;
let b = 4;
let wynik = a * b;
document.write(wynik);`,
    test: (out) => out.trim() === '24',
  },
  {
    tytul: 'Zadanie 4 – Dzielenie',
    opis: 'Dla zmiennych `liczba = 50` i `dzielnik = 10` wykonaj dzielenie i wypisz wynik.',
    oczekiwane: '5',
    rozw: `let liczba = 50;
let dzielnik = 10;
let wynik = liczba / dzielnik;
document.write(wynik);`,
    test: (out) => out.trim() === '5',
  },
  {
    tytul: 'Zadanie 5 – Reszta z dzielenia (modulo)',
    opis: 'Dla zmiennych `a = 17` i `b = 5` oblicz resztę z dzielenia i wypisz wynik.',
    oczekiwane: '2',
    rozw: `let a = 17;
let b = 5;
let wynik = a % b;
document.write(wynik);`,
    test: (out) => out.trim() === '2',
  },
  {
    tytul: 'Zadanie 6 – Inkrementacja',
    opis: 'Stwórz zmienną `licznik = 10`, zwiększ jej wartość o 1 używając operatora ++ i wypisz wynik.',
    oczekiwane: '11',
    rozw: `let licznik = 10;
licznik++;
document.write(licznik);`,
    test: (out) => out.trim() === '11',
  },
  {
    tytul: 'Zadanie 7 – Dekrementacja',
    opis: 'Dla zmiennej `punkty = 100`, zmniejsz jej wartość o 1 używając operatora -- i wypisz wynik.',
    oczekiwane: '99',
    rozw: `let punkty = 100;
punkty--;
document.write(punkty);`,
    test: (out) => out.trim() === '99',
  },
  {
    tytul: 'Zadanie 8 – Operator += (dodawanie z przypisaniem)',
    opis: 'Masz zmienną `suma = 15`. Dodaj do niej 10 używając operatora += i wypisz wynik.',
    oczekiwane: '25',
    rozw: `let suma = 15;
suma += 10;
document.write(suma);`,
    test: (out) => out.trim() === '25',
  },
  {
    tytul: 'Zadanie 9 – Operator *= (mnożenie z przypisaniem)',
    opis: 'Dla zmiennej `wartosc = 7` pomnóż ją przez 3 używając operatora *= i wypisz wynik.',
    oczekiwane: '21',
    rozw: `let wartosc = 7;
wartosc *= 3;
document.write(wartosc);`,
    test: (out) => out.trim() === '21',
  },
  {
    tytul: 'Zadanie 10 – Porównanie równości',
    opis: 'Sprawdź czy `a = 10` jest równe `b = 10`. Wypisz true lub false.',
    oczekiwane: 'true',
    rozw: `let a = 10;
let b = 10;
let wynik = a === b;
document.write(wynik);`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 11 – Porównanie nierówności',
    opis: 'Sprawdź czy `x = 5` jest różne od `y = 8`. Wypisz wynik (true lub false).',
    oczekiwane: 'true',
    rozw: `let x = 5;
let y = 8;
let wynik = x !== y;
document.write(wynik);`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 12 – Większe niż',
    opis: 'Dla `a = 20` i `b = 15` sprawdź czy a jest większe od b. Wypisz wynik.',
    oczekiwane: 'true',
    rozw: `let a = 20;
let b = 15;
let wynik = a > b;
document.write(wynik);`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 13 – Mniejsze lub równe',
    opis: 'Sprawdź czy `wiek = 16` jest mniejsze lub równe `limit = 18`. Wypisz wynik.',
    oczekiwane: 'true',
    rozw: `let wiek = 16;
let limit = 18;
let wynik = wiek <= limit;
document.write(wynik);`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 14 – Potęgowanie',
    opis: 'Oblicz `podstawa = 2` do potęgi `wykladnik = 5` używając operatora ** i wypisz wynik.',
    oczekiwane: '32',
    rozw: `let podstawa = 2;
let wykladnik = 5;
let wynik = podstawa ** wykladnik;
document.write(wynik);`,
    test: (out) => out.trim() === '32',
  },
  {
    tytul: 'Zadanie 15 – Złożone wyrażenie matematyczne',
    opis: 'Oblicz: (10 + 5) * 3 - 8 / 2 i wypisz wynik.',
    oczekiwane: '41',
    rozw: `let wynik = (10 + 5) * 3 - 8 / 2;
document.write(wynik);`,
    test: (out) => out.trim() === '41',
  },
];
