export const zadania = [
  {
    tytul: 'Zadanie 1 – Deklaracja let',
    opis: 'Zadeklaruj zmienną let o nazwie liczba i przypisz jej wartość 7. Wypisz wartość.',
    oczekiwane: '7',
    rozw: `let liczba = 7;
document.write(String(liczba));`,
    test: (out) => out.trim() === '7',
  },
  {
    tytul: 'Zadanie 2 – Deklaracja const',
    opis: 'Zadeklaruj stałą const o nazwie STALA z wartością 10. Wypisz STALA.',
    oczekiwane: '10',
    rozw: `const STALA = 10;
document.write(String(STALA));`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 3 – Nazewnictwo camelCase',
    opis: 'Utwórz let o nazwie pierwszaLiczba z wartością 3 i wypisz ją.',
    oczekiwane: '3',
    rozw: `let pierwszaLiczba = 3;
document.write(String(pierwszaLiczba));`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 4 – Stała UPPER_SNAKE_CASE',
    opis: 'Utwórz const MAX_PUNKTY z wartością 100 i wypisz.',
    oczekiwane: '100',
    rozw: `const MAX_PUNKTY = 100;
document.write(String(MAX_PUNKTY));`,
    test: (out) => out.trim() === '100',
  },
  {
    tytul: 'Zadanie 5 – Przypisanie i nadpisanie let',
    opis: 'Utwórz let x = 2. Zwiększ x o 5 operatorem dodawania i wypisz.',
    oczekiwane: '7',
    rozw: `let x = 2;
x = x + 5;
document.write(String(x));`,
    test: (out) => out.trim() === '7',
  },
  {
    tytul: 'Zadanie 6 – const nie jest nadpisywana (bez błędów)',
    opis: 'Utwórz const LICZBA_DNI = 7 i wypisz ją (nie próbuj zmieniać wartości).',
    oczekiwane: '7',
    rozw: `const LICZBA_DNI = 7;
document.write(String(LICZBA_DNI));`,
    test: (out) => out.trim() === '7',
  },
  {
    tytul: 'Zadanie 7 – Łączenie tekstu i liczby',
    opis: 'Utwórz let imie = "Ala" i let wiek = 12. Wypisz "Ala-12" (z myślnikiem).',
    oczekiwane: 'Ala-12',
    rozw: `let imie = "Ala";
let wiek = 12;
document.write(imie + "-" + String(wiek));`,
    test: (out) => out.trim() === 'Ala-12',
  },
  {
    tytul: 'Zadanie 8 – Operatory skrócone',
    opis: 'Utwórz let punkty = 10. Zwiększ o 15 operatorem += i wypisz.',
    oczekiwane: '25',
    rozw: `let punkty = 10;
punkty += 15;
document.write(String(punkty));`,
    test: (out) => out.trim() === '25',
  },
  {
    tytul: 'Zadanie 9 – Inkrementacja i dekrementacja',
    opis: 'Utwórz let licznik = 5. Zwiększ o 1, potem zmniejsz o 2 (użyj ++ i --) i wypisz.',
    oczekiwane: '4',
    rozw: `let licznik = 5;
licznik++;
licznik--;
licznik--;
document.write(String(licznik));`,
    test: (out) => out.trim() === '4',
  },
  {
    tytul: 'Zadanie 10 – Konwencje nazw: czytelny identyfikator',
    opis: 'Utwórz let szerokoscProstokata = 4 oraz let wysokoscProstokata = 3. Wypisz ich iloczyn.',
    oczekiwane: '12',
    rozw: `let szerokoscProstokata = 4;
let wysokoscProstokata = 3;
document.write(String(szerokoscProstokata * wysokoscProstokata));`,
    test: (out) => out.trim() === '12',
  },
  {
    tytul: 'Zadanie 11 – Blok i zasięg let',
    opis: 'Utwórz let liczba = 2. W bloku { } utwórz let liczba = 5. Wypisz wartość spoza bloku (powinna być 2).',
    oczekiwane: '2',
    rozw: `let liczba = 2;
{
  let liczba = 5; // inna zmienna w bloku
  // brak wypisywania tutaj
}
document.write(String(liczba));`,
    test: (out) => out.trim() === '2',
  },
  {
    tytul: 'Zadanie 12 – Stała wyprowadzona ze wzoru',
    opis: 'Utwórz const PI = 3.14 oraz let r = 2. Wypisz 2*PI*r (obwód koła w przybliżeniu).',
    oczekiwane: '12.56',
    rozw: `const PI = 3.14;
let r = 2;
document.write(String(2 * PI * r));`,
    test: (out) => out.trim() === '12.56',
  },
  {
    tytul: 'Zadanie 13 – Przypisanie wielokrotne (krok po kroku)',
    opis: 'Utwórz let a = 1; let b = 2; let c = 3; Ustaw a = a + b; b = b + c; Wypisz a+b+c.',
    oczekiwane: '9',
    rozw: `let a = 1;
let b = 2;
let c = 3;
a = a + b; // a=3
b = b + c; // b=5
document.write(String(a + b + c));`,
    test: (out) => out.trim() === '9',
  },
  {
    tytul: 'Zadanie 14 – Tymczasowa zmienna przy zamianie wartości',
    opis: 'Utwórz let x = 4; let y = 9; Zamień wartości zmiennych przy użyciu zmiennej tymczasowej temp. Wypisz "9,4".',
    oczekiwane: '9,4',
    rozw: `let x = 4;
let y = 9;
let temp = x;
x = y;
y = temp;
document.write(String(x) + "," + String(y));`,
    test: (out) => out.trim() === '9,4',
  },
  {
    tytul: 'Zadanie 15 – Konsekwentne nazewnictwo',
    opis: 'Utwórz let aktualnaTemperatura = 20 oraz const MAKS_TEMPERATURA = 25. Wypisz "20/25".',
    oczekiwane: '20/25',
    rozw: `let aktualnaTemperatura = 20;
const MAKS_TEMPERATURA = 25;
document.write(String(aktualnaTemperatura) + "/" + String(MAKS_TEMPERATURA));`,
    test: (out) => out.trim() === '20/25',
  },
  {
    tytul: 'Zadanie 16 – Nadawanie nowych wartości let',
    opis: 'Utwórz let suma = 0; Dodaj do niej 3, potem 7 (suma = suma + 3; suma = suma + 7;) i wypisz.',
    oczekiwane: '10',
    rozw: `let suma = 0;
suma = suma + 3;
suma = suma + 7;
document.write(String(suma));`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 17 – const musi mieć wartość początkową (bez błędów)',
    opis: 'Utwórz const NAZWA = "KursJS" i wypisz tę stałą.',
    oczekiwane: 'KursJS',
    rozw: `const NAZWA = "KursJS";
document.write(NAZWA);`,
    test: (out) => out.trim() === 'KursJS',
  },
  {
    tytul: 'Zadanie 18 – Czystość nazw: bez spacji i cyfr na początku',
    opis: 'Utwórz let liczba1 = 6 oraz let liczba2 = 8. Wypisz ich sumę.',
    oczekiwane: '14',
    rozw: `let liczba1 = 6;
let liczba2 = 8;
document.write(String(liczba1 + liczba2));`,
    test: (out) => out.trim() === '14',
  },
  {
    tytul: 'Zadanie 19 – Częściowa stałość: let + const razem',
    opis: 'Utwórz const STAWKA = 50 i let godziny = 3. Wypisz iloczyn (prosta płaca).',
    oczekiwane: '150',
    rozw: `const STAWKA = 50;
let godziny = 3;
document.write(String(STAWKA * godziny));`,
    test: (out) => out.trim() === '150',
  },
  {
    tytul: 'Zadanie 20 – Zasięg blokowy i niezależne nazwy',
    opis: 'Utwórz let wynik = 1. W bloku { } utwórz let wynik = 10; Po bloku wypisz wartość (powinna być 1).',
    oczekiwane: '1',
    rozw: `let wynik = 1;
{
  let wynik = 10;
  // brak wypisywania wewnątrz bloku
}
document.write(String(wynik));`,
    test: (out) => out.trim() === '1',
  },
];
