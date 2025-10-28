export const zadania = [
  {
    tytul: 'Zadanie 1 – Liczba dodatnia czy ujemna',
    opis: 'Stwórz zmienną `liczba = -5` i wypisz "Dodatnia", "Ujemna" lub "Zero" w zależności od wartości.',
    oczekiwane: 'Ujemna',
    rozw: `let liczba = -5;
if (liczba > 0) {
  document.write("Dodatnia");
} else if (liczba < 0) {
  document.write("Ujemna");
} else {
  document.write("Zero");
}`,
    test: (out) => out.trim() === 'Ujemna',
  },
  {
    tytul: 'Zadanie 2 – Pełnoletność',
    opis: 'Utwórz zmienną `wiek = 16` i sprawdź, czy osoba jest pełnoletnia (wiek >= 18). Wypisz odpowiedni komunikat.',
    oczekiwane: 'Niepełnoletni',
    rozw: `let wiek = 16;
if (wiek >= 18) {
  document.write("Pełnoletni");
} else {
  document.write("Niepełnoletni");
}`,
    test: (out) => out.trim() === 'Niepełnoletni',
  },
  {
    tytul: 'Zadanie 3 – Liczba parzysta czy nieparzysta',
    opis: 'Dla zmiennej `liczba = 7` sprawdź, czy jest parzysta czy nieparzysta i wypisz odpowiedni tekst.',
    oczekiwane: 'Nieparzysta',
    rozw: `let liczba = 7;
if (liczba % 2 === 0) {
  document.write("Parzysta");
} else {
  document.write("Nieparzysta");
}`,
    test: (out) => out.trim() === 'Nieparzysta',
  },
  {
    tytul: 'Zadanie 4 – Największa z trzech liczb',
    opis: 'Masz trzy zmienne: `a = 10`, `b = 25`, `c = 18`. Wypisz największą z nich.',
    oczekiwane: '25',
    rozw: `let a = 10, b = 25, c = 18;
if (a >= b && a >= c) {
  document.write(a);
} else if (b >= a && b >= c) {
  document.write(b);
} else {
  document.write(c);
}`,
    test: (out) => out.trim() === '25',
  },
  {
    tytul: 'Zadanie 5 – Ocena ucznia',
    opis: 'Dla zmiennej `punkty = 85` wypisz ocenę: 90-100: "Celujący", 75-89: "Bardzo dobry", 60-74: "Dobry", 50-59: "Dostateczny", poniżej 50: "Niedostateczny".',
    oczekiwane: 'Bardzo dobry',
    rozw: `let punkty = 85;
if (punkty >= 90) {
  document.write("Celujący");
} else if (punkty >= 75) {
  document.write("Bardzo dobry");
} else if (punkty >= 60) {
  document.write("Dobry");
} else if (punkty >= 50) {
  document.write("Dostateczny");
} else {
  document.write("Niedostateczny");
}`,
    test: (out) => out.trim() === 'Bardzo dobry',
  },
  {
    tytul: 'Zadanie 6 – Dzień tygodnia',
    opis: 'Dla zmiennej `dzien = 3` wypisz nazwę dnia tygodnia (1=Poniedziałek, 2=Wtorek, itd.). Użyj switch.',
    oczekiwane: 'Środa',
    rozw: `let dzien = 3;
switch (dzien) {
  case 1:
    document.write("Poniedziałek");
    break;
  case 2:
    document.write("Wtorek");
    break;
  case 3:
    document.write("Środa");
    break;
  case 4:
    document.write("Czwartek");
    break;
  case 5:
    document.write("Piątek");
    break;
  case 6:
    document.write("Sobota");
    break;
  case 7:
    document.write("Niedziela");
    break;
  default:
    document.write("Nieprawidłowy dzień");
}`,
    test: (out) => out.trim() === 'Środa',
  },
  {
    tytul: 'Zadanie 7 – Kalkulator prosty',
    opis: 'Dla zmiennych `a = 12`, `b = 4`, `operator = "/"` wykonaj odpowiednie działanie i wypisz wynik. Obsłuż: +, -, *, /.',
    oczekiwane: '3',
    rozw: `let a = 12, b = 4, operator = "/";
let wynik;
if (operator === "+") {
  wynik = a + b;
} else if (operator === "-") {
  wynik = a - b;
} else if (operator === "*") {
  wynik = a * b;
} else if (operator === "/") {
  wynik = a / b;
} else {
  wynik = "Nieprawidłowy operator";
}
document.write(wynik);`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 8 – Rok przestępny',
    opis: 'Dla zmiennej `rok = 2024` sprawdź, czy jest rokiem przestępnym (podzielny przez 4, ale nie przez 100, chyba że przez 400).',
    oczekiwane: 'Rok przestępny',
    rozw: `let rok = 2024;
if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
  document.write("Rok przestępny");
} else {
  document.write("Rok nieprzestępny");
}`,
    test: (out) => out.includes('przestępny') && !out.includes('nieprzestępny'),
  },
  {
    tytul: 'Zadanie 9 – FizzBuzz dla jednej liczby',
    opis: 'Dla zmiennej `n = 15`: wypisz "Fizz" jeśli podzielna przez 3, "Buzz" jeśli przez 5, "FizzBuzz" jeśli przez oba, w przeciwnym razie liczbę.',
    oczekiwane: 'FizzBuzz',
    rozw: `let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
  document.write("FizzBuzz");
} else if (n % 3 === 0) {
  document.write("Fizz");
} else if (n % 5 === 0) {
  document.write("Buzz");
} else {
  document.write(n);
}`,
    test: (out) => out.trim() === 'FizzBuzz',
  },
  {
    tytul: 'Zadanie 10 – Kategoria BMI',
    opis: 'Dla `waga = 70` (kg) i `wzrost = 1.75` (m) oblicz BMI i wypisz kategorię: <18.5: "Niedowaga", 18.5-24.9: "Waga prawidłowa", 25-29.9: "Nadwaga", >=30: "Otyłość".',
    oczekiwane: 'Waga prawidłowa',
    rozw: `let waga = 70;
let wzrost = 1.75;
let bmi = waga / (wzrost * wzrost);
if (bmi < 18.5) {
  document.write("Niedowaga");
} else if (bmi < 25) {
  document.write("Waga prawidłowa");
} else if (bmi < 30) {
  document.write("Nadwaga");
} else {
  document.write("Otyłość");
}`,
    test: (out) => out.trim() === 'Waga prawidłowa',
  },
];
