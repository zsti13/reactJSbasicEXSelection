export const zadania = [
  {
    tytul: 'Zadanie 1 – Deklaracja let (podstawy)',
    opis: 'Zadeklaruj let name = "Ala" i wypisz jej wartość.',
    oczekiwane: 'Ala',
    rozw: `let name = "Ala";
document.write(name);`,
    test: (out) => out.trim() === 'Ala',
  },
  {
    tytul: 'Zadanie 2 – Deklaracja const (liczba)',
    opis: 'Zadeklaruj const pi = 3.14 i wypisz jego wartość.',
    oczekiwane: '3.14',
    rozw: `const pi = 3.14;
document.write(String(pi));`,
    test: (out) => out.trim() === '3.14',
  },
  {
    tytul: 'Zadanie 3 – var: redeklaracja zmiennej',
    opis: 'Użyj var: var x = 1; następnie var x = 2; wypisz wartość x.',
    oczekiwane: '2',
    rozw: `var x = 1;
var x = 2;
document.write(String(x));`,
    test: (out) => out.trim() === '2',
  },
  {
    tytul: 'Zadanie 4 – let: ponowne przypisanie (bez redeklaracji)',
    opis: 'Zadeklaruj let y = 1; przypisz y = 3; wypisz y.',
    oczekiwane: '3',
    rozw: `let y = 1;
y = 3;
document.write(String(y));`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 5 – const + tablica: modyfikacja zawartości',
    opis: 'Zadeklaruj const arr = [1,2]; użyj arr.push(3); wypisz tablicę w JSON.',
    oczekiwane: '[1,2,3]',
    rozw: `const arr = [1,2];
arr.push(3);
document.write(JSON.stringify(arr));`,
    test: (out) => out.trim() === '[1,2,3]',
  },
  {
    tytul: 'Zadanie 6 – Nazewnictwo: camelCase',
    opis: 'Zadeklaruj let firstName = "Jan"; wypisz jego wartość.',
    oczekiwane: 'Jan',
    rozw: `let firstName = "Jan";
document.write(firstName);`,
    test: (out) => out.trim() === 'Jan',
  },
  {
    tytul: 'Zadanie 7 – Łączenie napisów z użyciem zmiennych',
    opis: 'Utwórz const first = "Ala", last = "Nowak"; wypisz "Ala Nowak" używając szablonów.',
    oczekiwane: 'Ala Nowak',
    rozw: `const first = "Ala", last = "Nowak";
document.write(\`\${first} \${last}\`);`,
    test: (out) => out.trim() === 'Ala Nowak',
  },
  {
    tytul: 'Zadanie 8 – Zasięg blokowy: shadowing (let)',
    opis: 'Pokaż różne wartości w i poza blokiem: let a = 1; w bloku { let a = 2; } Wypisz "outer:1,inner:2,outer:1".',
    oczekiwane: 'outer:1,inner:2,outer:1',
    rozw: `let a = 1;
let out1 = a;
{
  let a = 2;
  var inner = a; // var tylko do przechowania napisu
}
let out2 = a;
document.write(\`outer:\${out1},inner:\${inner},outer:\${out2}\`);`,
    test: (out) => out.trim() === 'outer:1,inner:2,outer:1',
  },
  {
    tytul: 'Zadanie 9 – Zasięg funkcyjny: var',
    opis: 'var jest funkcjo-zasięgowe. Zadeklaruj var z=1; w funkcji ustaw var z=2; wypisz globalne z.',
    oczekiwane: '1',
    rozw: `var z = 1;
function f(){ var z = 2; }
f();
document.write(String(z));`,
    test: (out) => out.trim() === '1',
  },
  {
    tytul: 'Zadanie 10 – Hoisting var (bez błędów)',
    opis: 'W obrębie funkcji wypisz wartość x zanim zostanie zadeklarowane var x = 5; (powinno dać "undefined").',
    oczekiwane: 'undefined',
    rozw: `(function(){
  document.write(String(x));
  var x = 5;
})();`,
    test: (out) => out.trim() === 'undefined',
  },
  {
    tytul: 'Zadanie 11 – const + obiekt: zmiana właściwości',
    opis: 'const user = {name:"A"}; ustaw user.name = "B"; wypisz obiekt w JSON.',
    oczekiwane: '{"name":"B"}',
    rozw: `const user = {name:"A"};
user.name = "B";
document.write(JSON.stringify(user));`,
    test: (out) => out.trim() === '{"name":"B"}',
  },
  {
    tytul: 'Zadanie 12 – Preferuj const: obliczenia bez mutacji',
    opis: 'Utwórz const a=1, b=2; const sum=a+b; wypisz sum.',
    oczekiwane: '3',
    rozw: `const a = 1, b = 2;
const sum = a + b;
document.write(String(sum));`,
    test: (out) => out.trim() === '3',
  },
  {
    tytul: 'Zadanie 13 – Zamiana wartości (destrukturyzacja)',
    opis: 'let a=1, b=2; zamień wartości miejscami i wypisz "2,1".',
    oczekiwane: '2,1',
    rozw: `let a = 1, b = 2;
[a, b] = [b, a];
document.write(\`\${a},\${b}\`);`,
    test: (out) => out.trim() === '2,1',
  },
  {
    tytul: 'Zadanie 14 – Zasięg let w pętli',
    opis: 'Sprawdź, czy i z pętli let jest poza zakresem: for(let i=0;i<3;i++){}; wypisz wynik (true jeśli i nie istnieje).',
    oczekiwane: 'true',
    rozw: `for(let i=0;i<3;i++){}
document.write(String(typeof i === 'undefined'));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 15 – var w bloku (przeciek do zasięgu funkcji)',
    opis: 'Pokaż, że var nie ma zasięgu blokowego: var g=1; w if ustaw var g=2; wypisz g.',
    oczekiwane: '2',
    rozw: `var g = 1;
if (true) {
  var g = 2;
}
document.write(String(g));`,
    test: (out) => out.trim() === '2',
  },
  {
    tytul: 'Zadanie 16 – const w pętli for-of (stała referencja, zmienny stan)',
    opis: 'const counter = {count:0}; dla tablicy [1,2,3] zwiększaj counter.count i wypisz sumę.',
    oczekiwane: '6',
    rozw: `const counter = { count: 0 };
for (const n of [1,2,3]) {
  counter.count += n;
}
document.write(String(counter.count));`,
    test: (out) => out.trim() === '6',
  },
  {
    tytul: 'Zadanie 17 – Deklaracje w jednej linii',
    opis: 'Zadeklaruj let a=1, b=2, c=3; wypisz "1,2,3".',
    oczekiwane: '1,2,3',
    rozw: `let a = 1, b = 2, c = 3;
document.write(\`\${a},\${b},\${c}\`);`,
    test: (out) => out.trim() === '1,2,3',
  },
  {
    tytul: 'Zadanie 18 – Domyślna wartość: let bez inicjalizacji',
    opis: 'Zadeklaruj let total; wypisz jego wartość (powinno być "undefined").',
    oczekiwane: 'undefined',
    rozw: `let total;
document.write(String(total));`,
    test: (out) => out.trim() === 'undefined',
  },
  {
    tytul: 'Zadanie 19 – const + tablica: usuwanie elementu',
    opis: 'const arr = [1,2,3]; użyj arr.pop(); wypisz tablicę (const nie zabrania modyfikacji zawartości).',
    oczekiwane: '[1,2]',
    rozw: `const arr = [1,2,3];
arr.pop();
document.write(JSON.stringify(arr));`,
    test: (out) => out.trim() === '[1,2]',
  },
  {
    tytul: 'Zadanie 20 – Konwencje: UPPER_SNAKE_CASE dla stałych',
    opis: 'Zadeklaruj const MAX_USERS=10; let currentUsers=7; wypisz "OK" jeśli currentUsers < MAX_USERS, inaczej "FULL".',
    oczekiwane: 'OK',
    rozw: `const MAX_USERS = 10;
let currentUsers = 7;
document.write(currentUsers < MAX_USERS ? "OK" : "FULL");`,
    test: (out) => out.trim() === 'OK',
  },
];