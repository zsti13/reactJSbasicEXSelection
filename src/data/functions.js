export const zadania = [
  {
    tytul: 'Zadanie 1 – Prosta funkcja i return',
    opis: 'Napisz funkcję `suma(a, b)`, która zwraca sumę dwóch liczb. Wywołaj `suma(2, 3)` i wypisz wynik.',
    oczekiwane: '5',
    rozw: `function suma(a, b) {
  return a + b;
}
document.write(suma(2, 3));`,
    test: (out) => out.trim() === '5',
  },
  {
    tytul: 'Zadanie 2 – Parametry z wartościami domyślnymi',
    opis: 'Napisz funkcję `powitaj(imie = "Gościu")`, która zwraca "Cześć, <imię>!". Wywołaj bez argumentu.',
    oczekiwane: 'Cześć, Gościu!',
    rozw: `function powitaj(imie = "Gościu") {
  return \`Cześć, \${imie}!\`;
}
document.write(powitaj());`,
    test: (out) => out.trim() === 'Cześć, Gościu!',
  },
  {
    tytul: 'Zadanie 3 – Arrow function',
    opis: 'Utwórz funkcję strzałkową `kwadrat = (x) => x * x`. Wypisz wynik `kwadrat(6)`.',
    oczekiwane: '36',
    rozw: `const kwadrat = (x) => x * x;
document.write(kwadrat(6));`,
    test: (out) => out.trim() === '36',
  },
  {
    tytul: 'Zadanie 4 – Wczesny return (guard clause)',
    opis: 'Napisz funkcję `dzielenie(a, b)`, która zwraca "Błąd" jeśli `b === 0`, w przeciwnym razie zwraca `a / b`. Wypisz `dzielenie(10, 0)`.',
    oczekiwane: 'Błąd',
    rozw: `function dzielenie(a, b) {
  if (b === 0) return "Błąd";
  return a / b;
}
document.write(dzielenie(10, 0));`,
    test: (out) => out.trim() === 'Błąd',
  },
  {
    tytul: 'Zadanie 5 – Funkcja pomocnicza i kompozycja',
    opis: 'Napisz `podwoj(n)` zwracającą `n*2` oraz `potroj(n)` zwracającą `n*3`. Wypisz wynik `potroj(podwoj(4))`.',
    oczekiwane: '24',
    rozw: `function podwoj(n) { return n * 2; }
function potroj(n) { return n * 3; }
document.write(potroj(podwoj(4)));`,
    test: (out) => out.trim() === '24',
  },
  {
    tytul: 'Zadanie 6 – Parametry nazwane przez destrukturyzację',
    opis: 'Napisz funkcję `prostokat({szer=2, wys=3})`, która zwraca pole (szer*wys). Wywołaj z obiektem `{wys: 5}`.',
    oczekiwane: '10',
    rozw: `function prostokat({ szer = 2, wys = 3 } = {}) {
  return szer * wys;
}
document.write(prostokat({ wys: 5 }));`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 7 – Rest parameters',
    opis: 'Napisz `sumaWielu(...liczby)`, która zwraca sumę wszystkich argumentów. Wypisz `sumaWielu(1,2,3,4)`.',
    oczekiwane: '10',
    rozw: `function sumaWielu(...liczby) {
  return liczby.reduce((acc, x) => acc + x, 0);
}
document.write(sumaWielu(1, 2, 3, 4));`,
    test: (out) => out.trim() === '10',
  },
  {
    tytul: 'Zadanie 8 – Wartości domyślne zależne od innych parametrów',
    opis: 'Napisz `potega(x, e = 2)`, która zwraca `x**e`. Wypisz `potega(5)`.',
    oczekiwane: '25',
    rozw: `function potega(x, e = 2) {
  return x ** e;
}
document.write(potega(5));`,
    test: (out) => out.trim() === '25',
  },
  {
    tytul: 'Zadanie 9 – Funkcja zwracająca boolean',
    opis: 'Napisz `czyParzysta(n)`, która zwraca true/false. Wypisz `czyParzysta(14)`.',
    oczekiwane: 'true',
    rozw: `function czyParzysta(n) { return n % 2 === 0; }
document.write(czyParzysta(14));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 10 – Funkcja jako argument (wyższy rząd)',
    opis: 'Napisz `przeksztalc(x, f)`, która zwraca `f(x)`. Zdefiniuj `podniesDoSzescianu` i wypisz `przeksztalc(3, podniesDoSzescianu)`.',
    oczekiwane: '27',
    rozw: `function przeksztalc(x, f) { return f(x); }
function podniesDoSzescianu(n) { return n ** 3; }
document.write(przeksztalc(3, podniesDoSzescianu));`,
    test: (out) => out.trim() === '27',
  },
  {
    tytul: 'Zadanie 11 – Zwracanie funkcji (closure 1)',
    opis: 'Napisz `mnoznik(k)`, która zwraca funkcję mnożącą argument przez `k`. Utwórz `razy4 = mnoznik(4)` i wypisz `razy4(7)`.',
    oczekiwane: '28',
    rozw: `function mnoznik(k) {
  return function(n) { return n * k; };
}
const razy4 = mnoznik(4);
document.write(razy4(7));`,
    test: (out) => out.trim() === '28',
  },
  {
    tytul: 'Zadanie 12 – Closure 2: licznik',
    opis: 'Napisz `licznik()`, która zwraca funkcję zwiększającą prywatną zmienną o 1 i zwracającą wartość. Utwórz `c = licznik()` i wypisz `c()`.',
    oczekiwane: '1',
    rozw: `function licznik() {
  let i = 0;
  return function() { i += 1; return i; };
}
const c = licznik();
document.write(c());`,
    test: (out) => out.trim() === '1',
  },
  {
    tytul: 'Zadanie 13 – Funkcja z domyślnym callbackiem',
    opis: 'Napisz `mapuj(arr, fn = x => x)`, która zwraca nową tablicę z wynikami `fn`. Użyj `mapuj([1,2,3])` i wypisz sumę elementów zwróconej tablicy.',
    oczekiwane: '6',
    rozw: `function mapuj(arr, fn = x => x) {
  const wyn = [];
  for (const el of arr) wyn.push(fn(el));
  return wyn;
}
const wynik = mapuj([1,2,3]);
document.write(wynik.reduce((a,b)=>a+b,0));`,
    test: (out) => out.trim() === '6',
  },
  {
    tytul: 'Zadanie 14 – Destrukturyzacja parametrów z aliasami',
    opis: 'Napisz `formatOsoby({imie: i="Jan", nazwisko: n="Kowalski"})`, która zwraca "i n". Wypisz `formatOsoby({imie:"Ala"})`.',
    oczekiwane: 'Ala Kowalski',
    rozw: `function formatOsoby({ imie: i = "Jan", nazwisko: n = "Kowalski" } = {}) {
  return \`\${i} \${n}\`;
}
document.write(formatOsoby({ imie: "Ala" }));`,
    test: (out) => out.trim() === 'Ala Kowalski',
  },
  {
    tytul: 'Zadanie 15 – Walidacja parametrów i wyjątek',
    opis: 'Napisz `pierwiastek(x)`, która rzuca błąd gdy `x < 0`, w przeciwnym razie zwraca `Math.sqrt(x)`. Złap błąd i wypisz "Błąd". Wywołaj z `-9`.',
    oczekiwane: 'Błąd',
    rozw: `function pierwiastek(x) {
  if (x < 0) throw new Error("Ujemny argument");
  return Math.sqrt(x);
}
try {
  document.write(pierwiastek(-9));
} catch(e) {
  document.write("Błąd");
}`,
    test: (out) => out.trim() === 'Błąd',
  },
  {
    tytul: 'Zadanie 16 – Rekurencja: silnia',
    opis: 'Napisz rekurencyjną funkcję `silnia(n)` zakładając `0! = 1`. Wypisz `silnia(5)`.',
    oczekiwane: '120',
    rozw: `function silnia(n) {
  if (n === 0) return 1;
  return n * silnia(n - 1);
}
document.write(silnia(5));`,
    test: (out) => out.trim() === '120',
  },
  {
    tytul: 'Zadanie 17 – Rekurencja: n-ty Fibonacci z domyślnymi parametrami',
    opis: 'Napisz `fib(n)`, która zwraca n-ty wyraz (0,1,1,2,3,5,...). Użyj prostego rekurencyjnego podejścia. Wypisz `fib(7)`.',
    oczekiwane: '13',
    rozw: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
document.write(fib(7));`,
    test: (out) => out.trim() === '13',
  },
  {
    tytul: 'Zadanie 18 – Funkcja z parametrem domyślnym jako funkcja',
    opis: 'Napisz `filtruj(arr, pred = x => true)`, która zwraca nową tablicę z elementami spełniającymi `pred`. Przefiltruj `[1,2,3,4,5]` liczbami parzystymi i wypisz sumę.',
    oczekiwane: '6',
    rozw: `function filtruj(arr, pred = x => true) {
  const wyn = [];
  for (const el of arr) if (pred(el)) wyn.push(el);
  return wyn;
}
const out = filtruj([1,2,3,4,5], x => x % 2 === 0);
document.write(out.reduce((a,b)=>a+b,0));`,
    test: (out) => out.trim() === '6',
  },
  {
    tytul: 'Zadanie 19 – Funkcja curry',
    opis: 'Napisz funkcję curry `dodaj(a)(b)`, która zwraca `a + b`. Wypisz `dodaj(10)(5)`.',
    oczekiwane: '15',
    rozw: `const dodaj = (a) => (b) => a + b;
document.write(dodaj(10)(5));`,
    test: (out) => out.trim() === '15',
  },
  {
    tytul: 'Zadanie 20 – Łączenie konceptów (default + rest + redukcja)',
    opis: 'Napisz `agreguj(op="suma", ...liczby)`. Dla "suma" zwraca sumę, dla "iloczyn" zwraca iloczyn, dla nieznanego op zwraca "Błąd". Wypisz `agreguj(undefined, 1,2,3,4)`.',
    oczekiwane: '10',
    rozw: `function agreguj(op = "suma", ...liczby) {
  if (op === "suma") return liczby.reduce((a,b)=>a+b, 0);
  if (op === "iloczyn") return liczby.reduce((a,b)=>a*b, 1);
  return "Błąd";
}
document.write(agreguj(undefined, 1,2,3,4));`,
    test: (out) => out.trim() === '10',
  },
];
