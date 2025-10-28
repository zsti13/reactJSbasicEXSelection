export const zadania = [
  {
    tytul: 'Zadanie 1 – Liczby od 1 do 10',
    opis: 'Napisz pętlę, która wypisze liczby od 1 do 10 za pomocą document.write().',
    oczekiwane: '1 2 3 4 5 6 7 8 9 10',
    rozw: `for (let i = 1; i <= 10; i++) {
  document.write(i + " ");
}`,
    test: (out) => out.trim() === '1 2 3 4 5 6 7 8 9 10',
  },
  {
    tytul: 'Zadanie 2 – Liczby parzyste',
    opis: 'Napisz pętlę for, która wypisze liczby parzyste od 2 do 20.',
    oczekiwane: '2 4 6 8 10 12 14 16 18 20',
    rozw: `for (let i = 2; i <= 20; i += 2) {
  document.write(i + " ");
}`,
    test: (out) => out.trim() === '2 4 6 8 10 12 14 16 18 20',
  },
  {
    tytul: 'Zadanie 3 – Suma liczb 1–100',
    opis: 'Za pomocą pętli while oblicz i wypisz sumę liczb od 1 do 100.',
    oczekiwane: 'Suma: 5050',
    rozw: `let i = 1;
let suma = 0;
while (i <= 100) {
  suma += i;
  i++;
}
document.write("Suma: " + suma);`,
    test: (out) => out.includes('5050'),
  },
  {
    tytul: 'Zadanie 4 – Odliczanie 10→1',
    opis: 'Napisz pętlę, która wypisze liczby od 10 do 1 w kolejności malejącej.',
    oczekiwane: '10 9 8 7 6 5 4 3 2 1',
    rozw: `for (let i = 10; i >= 1; i--) {
  document.write(i + " ");
}`,
    test: (out) => out.trim().startsWith('10') && out.includes('1'),
  },
  {
    tytul: 'Zadanie 5 – Potęgi liczby 2',
    opis: 'Użyj pętli do...while, aby wypisać kolejne potęgi liczby 2 (do 1024).',
    oczekiwane: '2 4 8 16 32 64 128 256 512 1024',
    rozw: `let x = 2;
do {
  document.write(x + " ");
  x *= 2;
} while (x <= 1024);`,
    test: (out) => out.includes('1024'),
  },
  {
    tytul: 'Zadanie 6 – Tabliczka mnożenia',
    opis: 'Pobierz liczbę od użytkownika i wyświetl tabliczkę mnożenia od 1 do 10.',
    oczekiwane: 'n × 1 = n\nn × 2 = 2n\n...\nn × 10 = 10n',
    rozw: `let n = parseInt(prompt("Podaj liczbę:"));
for (let i = 1; i <= 10; i++) {
  document.write(n + " × " + i + " = " + (n * i) + "<br>");
}`,
    test: null,
  },
  {
    tytul: 'Zadanie 7 – Liczby podzielne przez 3 i 5',
    opis: 'Znajdź liczby od 1 do 100 podzielne jednocześnie przez 3 i 5.',
    oczekiwane: '15 30 45 60 75 90',
    rozw: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write(i + " ");
  }
}`,
    test: (out) => out.includes('15') && out.includes('90'),
  },
  {
    tytul: 'Zadanie 8 – Ciąg Fibonacciego',
    opis: 'Wypisz pierwsze 10 liczb ciągu Fibonacciego.',
    oczekiwane: '0 1 1 2 3 5 8 13 21 34',
    rozw: `let a = 0, b = 1;
document.write(a + " " + b + " ");
for (let i = 3; i <= 10; i++) {
  let c = a + b;
  document.write(c + " ");
  a = b;
  b = c;
}`,
    test: (out) => out.includes('34'),
  },
  {
    tytul: 'Zadanie 9 – Piramidka z gwiazdek',
    opis: 'Wypisz piramidkę z gwiazdek o wysokości 5 wierszy.',
    oczekiwane: '*\n**\n***\n****\n*****',
    rozw: `for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}`,
    test: (out) => out.split('<br>').length >= 5,
  },
  {
    tytul: 'Zadanie 10 – Liczby pierwsze 2–50',
    opis: 'Wypisz wszystkie liczby pierwsze od 2 do 50.',
    oczekiwane: '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47',
    rozw: `for (let i = 2; i <= 50; i++) {
  let pierwsza = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      pierwsza = false;
      break;
    }
  }
  if (pierwsza) document.write(i + " ");
}`,
    test: (out) => out.includes('47') && out.includes('2'),
  },
];
