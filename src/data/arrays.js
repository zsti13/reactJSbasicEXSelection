export const zadania = [
  {
    tytul: 'Zadanie 1 – Tworzenie tablicy',
    opis: 'Utwórz tablicę `let liczby = [1, 2, 3];` i wypisz jej długość.',
    oczekiwane: '3',
    rozw: `let liczby = [1, 2, 3];
document.write(liczby.length);`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 2 – Dostęp do elementu',
    opis: 'Utwórz tablicę `owoce = ["jabłko", "banan", "gruszka"]` i wypisz drugi element.',
    oczekiwane: 'banan',
    rozw: `let owoce = ["jabłko", "banan", "gruszka"];
document.write(owoce[1]);`,
    test: (out) => out.trim() === 'banan',
  },
  {
    tytul: 'Zadanie 3 – Dodawanie elementu na końcu',
    opis: 'Użyj metody `push()` aby dodać `"śliwka"` do tablicy `owoce = ["jabłko", "banan"]`. Następnie wypisz długość tablicy.',
    oczekiwane: '3',
    rozw: `let owoce = ["jabłko", "banan"];
owoce.push("śliwka");
document.write(owoce.length);`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 4 – Usuwanie ostatniego elementu',
    opis: 'Użyj metody `pop()` na tablicy `liczby = [1, 2, 3]` i wypisz pozostałą długość.',
    oczekiwane: '2',
    rozw: `let liczby = [1, 2, 3];
liczby.pop();
document.write(liczby.length);`,
    test: (out) => out.trim() === '2',
  },
  {
    tytul: 'Zadanie 5 – Dodawanie elementu na początku',
    opis: 'Użyj `unshift()` aby dodać `0` na początek tablicy `[1,2,3]`. Następnie wypisz pierwszy element.',
    oczekiwane: '0',
    rozw: `let liczby = [1, 2, 3];
liczby.unshift(0);
document.write(liczby[0]);`,
    test: (out) => out.trim() === '0',
  },
  {
    tytul: 'Zadanie 6 – Usuwanie pierwszego elementu',
    opis: 'Użyj `shift()` na tablicy `[10, 20, 30]` i wypisz pierwszy element po usunięciu.',
    oczekiwane: '20',
    rozw: `let liczby = [10, 20, 30];
liczby.shift();
document.write(liczby[0]);`,
    test: (out) => out.trim() === '20',
  },
  {
    tytul: 'Zadanie 7 – Sprawdzenie czy tablica zawiera element',
    opis: 'Sprawdź, czy tablica `[1,2,3,4]` zawiera liczbę 3. Użyj `includes()`.',
    oczekiwane: 'true',
    rozw: `let liczby = [1,2,3,4];
document.write(liczby.includes(3));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 8 – Połączenie tablic',
    opis: 'Połącz tablice `[1,2]` i `[3,4]` w jedną przy użyciu `concat()` i wypisz długość wyniku.',
    oczekiwane: '4',
    rozw: `let a = [1,2];
let b = [3,4];
let c = a.concat(b);
document.write(c.length);`,
    test: (out) => out.trim() === '4',
  },
  {
    tytul: 'Zadanie 9 – Łączenie elementów w napis',
    opis: 'Dla tablicy `["a","b","c"]` wypisz wynik `join("-")`.',
    oczekiwane: 'a-b-c',
    rozw: `let tab = ["a", "b", "c"];
document.write(tab.join("-"));`,
    test: (out) => out.trim() === 'a-b-c',
  },
  {
    tytul: 'Zadanie 10 – Wycinanie fragmentu tablicy',
    opis: 'Dla tablicy `[1,2,3,4,5]` wypisz wynik `slice(1,4)` połączony przecinkami.',
    oczekiwane: '2,3,4',
    rozw: `let tab = [1,2,3,4,5];
document.write(tab.slice(1,4).join(","));`,
    test: (out) => out.trim() === '2,3,4',
  },
  {
    tytul: 'Zadanie 11 – Usuwanie elementów metodą splice()',
    opis: 'Dla tablicy `[1,2,3,4,5]` usuń dwa elementy od indeksu 1 przy użyciu `splice()` i wypisz wynikową długość tablicy.',
    oczekiwane: '3',
    rozw: `let tab = [1,2,3,4,5];
tab.splice(1,2);
document.write(tab.length);`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 12 – Odwracanie tablicy',
    opis: 'Odwróć tablicę `[1,2,3]` przy pomocy `reverse()` i wypisz wynik połączony przecinkami.',
    oczekiwane: '3,2,1',
    rozw: `let tab = [1,2,3];
document.write(tab.reverse().join(","));`,
    test: (out) => out.trim() === '3,2,1',
  },
  {
    tytul: 'Zadanie 13 – Sortowanie tablicy',
    opis: 'Posortuj tablicę `[3,1,4,2]` rosnąco i wypisz połączoną przecinkami.',
    oczekiwane: '1,2,3,4',
    rozw: `let tab = [3,1,4,2];
tab.sort((a,b) => a - b);
document.write(tab.join(","));`,
    test: (out) => out.trim() === '1,2,3,4',
  },
  {
    tytul: 'Zadanie 14 – Znalezienie elementu',
    opis: 'Dla tablicy `[5,12,8,130,44]` znajdź pierwszy element większy niż 10. Użyj `find()`.',
    oczekiwane: '12',
    rozw: `let tab = [5,12,8,130,44];
document.write(tab.find(x => x > 10));`,
    test: (out) => out.trim() === '12',
  },
  {
    tytul: 'Zadanie 15 – Mapowanie tablicy',
    opis: 'Pomnóż każdy element tablicy `[1,2,3]` razy 2 za pomocą `map()` i wypisz wynik połączony przecinkami.',
    oczekiwane: '2,4,6',
    rozw: `let tab = [1,2,3];
let wynik = tab.map(x => x * 2);
document.write(wynik.join(","));`,
    test: (out) => out.trim() === '2,4,6',
  },
  {
    tytul: 'Zadanie 16 – Filtrowanie tablicy',
    opis: 'Dla tablicy `[10,20,30,40]` wybierz elementy większe niż 25 i wypisz połączone przecinkami.',
    oczekiwane: '30,40',
    rozw: `let tab = [10,20,30,40];
let wynik = tab.filter(x => x > 25);
document.write(wynik.join(","));`,
    test: (out) => out.trim() === '30,40',
  },
  {
    tytul: 'Zadanie 17 – Sumowanie elementów',
    opis: 'Policz sumę elementów `[1,2,3,4]` za pomocą `reduce()`.',
    oczekiwane: '10',
    rozw: `let tab = [1,2,3,4];
let suma = tab.reduce((a,b) => a + b, 0);
document.write(suma);`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 18 – Iteracja po elementach',
    opis: 'Dla `[1,2,3]` wypisz wszystkie elementy w jednej linii bez przecinków przy użyciu `forEach()`.',
    oczekiwane: '123',
    rozw: `let tab = [1,2,3];
let wynik = "";
tab.forEach(x => wynik += x);
document.write(wynik);`,
    test: (out) => out.trim() === '123',
  },
  {
    tytul: 'Zadanie 19 – Sprawdzenie warunku dla wszystkich elementów',
    opis: 'Dla `[2,4,6,8]` sprawdź, czy wszystkie są parzyste. Użyj `every()`.',
    oczekiwane: 'true',
    rozw: `let tab = [2,4,6,8];
document.write(tab.every(x => x % 2 === 0));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 20 – Sprawdzenie warunku dla części elementów',
    opis: 'Dla `[1,3,5,6]` sprawdź, czy przynajmniej jeden element jest parzysty. Użyj `some()`.',
    oczekiwane: 'true',
    rozw: `let tab = [1,3,5,6];
document.write(tab.some(x => x % 2 === 0));`,
    test: (out) => out.trim() === 'true',
  },
];
