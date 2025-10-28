export const zadania = [
  {
    tytul: 'Zadanie 1 – map: Kwadraty liczb',
    opis: 'Mając tablicę const arr = [1,2,3,4]; użyj map, aby zwrócić tablicę kwadratów.',
    oczekiwane: '[1,4,9,16] lub 1,4,9,16',
    rozw: `const arr = [1,2,3,4];
const res = arr.map(n => n*n);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[1,4,9,16]' || '1,4,9,16',
  },
  {
    tytul: 'Zadanie 2 – filter: Tylko parzyste',
    opis: 'Dla const nums = [3,4,7,10,12]; zwróć tylko liczby parzyste.',
    oczekiwane: '[4,10,12]',
    rozw: `const nums = [3,4,7,10,12];
const res = nums.filter(n => n % 2 === 0);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[4,10,12]',
  },
  {
    tytul: 'Zadanie 3 – reduce: Suma elementów',
    opis: 'Dla const nums = [5,10,-2]; oblicz sumę elementów.',
    oczekiwane: '13',
    rozw: `const nums = [5,10,-2];
const sum = nums.reduce((acc,n)=>acc+n,0);
document.write(String(sum));`,
    test: (out) => out.trim() === '13',
  },
  {
    tytul: 'Zadanie 4 – find: Pierwszy dłuższy napis',
    opis: 'Dla const words = ["kot","samochód","las"]; znajdź pierwszy napis o długości > 5.',
    oczekiwane: '"samochód"',
    rozw: `const words = ["kot","samochód","las"];
const found = words.find(w => w.length > 5);
document.write(JSON.stringify(found));`,
    test: (out) => out.trim() === '"samochód"',
  },
  {
    tytul: 'Zadanie 5 – some: Czy jest pełnoletni?',
    opis: 'Dla const ages = [12,16,20,15]; sprawdź, czy jest przynajmniej jedna wartość >= 18.',
    oczekiwane: 'true',
    rozw: `const ages = [12,16,20,15];
const res = ages.some(a => a >= 18);
document.write(String(res));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 6 – every: Czy wszyscy zaliczyli?',
    opis: 'Dla const scores = [67,88,60,91]; sprawdź, czy wszystkie wyniki >= 60.',
    oczekiwane: 'true',
    rozw: `const scores = [67,88,60,91];
const res = scores.every(s => s >= 60);
document.write(String(res));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 7 – sort: Liczby rosnąco (kopiowanie)',
    opis: 'Dla const nums = [10,2,30,4]; posortuj rosnąco NIE mutując oryginału.',
    oczekiwane: '[2,4,10,30]',
    rozw: `const nums = [10,2,30,4];
const res = nums.slice().sort((a,b)=>a-b);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[2,4,10,30]',
  },
  {
    tytul: 'Zadanie 8 – sort: Obiekty po polu age',
    opis: 'Posortuj osoby wg age rosnąco: const people = [{name:"Ala",age:30},{name:"Jan",age:20}].',
    oczekiwane: '[{"name":"Jan","age":20},{"name":"Ala","age":30}]',
    rozw: `const people = [{name:"Ala",age:30},{name:"Jan",age:20}];
const res = people.slice().sort((a,b)=>a.age-b.age);
document.write(JSON.stringify(res));`,
    test: (out) =>
      out.trim() === '[{"name":"Jan","age":20},{"name":"Ala","age":30}]',
  },
  {
    tytul: 'Zadanie 9 – flat: Spłaszcz jeden poziom',
    opis: 'Spłaszcz o 1 poziom: const nested = [1,[2,3],[4,[5]]];',
    oczekiwane: '[1,2,3,4,[5]]',
    rozw: `const nested = [1,[2,3],[4,[5]]];
const res = nested.flat(1);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[1,2,3,4,[5]]',
  },
  {
    tytul: 'Zadanie 10 – flatMap: Zdania na słowa',
    opis: 'Z const sentences = ["Ala ma kota","Kot je"]; zwróć wszystkie słowa w jednej tablicy.',
    oczekiwane: '["Ala","ma","kota","Kot","je"]',
    rozw: `const sentences = ["Ala ma kota","Kot je"];
const res = sentences.flatMap(s => s.split(" "));
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '["Ala","ma","kota","Kot","je"]',
  },
  {
    tytul: 'Zadanie 11 – includes: Czy zawiera?',
    opis: 'Sprawdź, czy 2 jest w [1,2,3].',
    oczekiwane: 'true',
    rozw: `const arr = [1,2,3];
document.write(String(arr.includes(2)));`,
    test: (out) => out.trim() === 'true',
  },
  {
    tytul: 'Zadanie 12 – indexOf/lastIndexOf: Pierwszy i ostatni indeks',
    opis: 'Dla ["a","b","a","c"] podaj indexOf("a") i lastIndexOf("a") w formacie "0,2".',
    oczekiwane: '0,2',
    rozw: `const arr = ["a","b","a","c"];
const first = arr.indexOf("a");
const last = arr.lastIndexOf("a");
document.write(first + "," + last);`,
    test: (out) => out.trim() === '0,2',
  },
  {
    tytul: 'Zadanie 13 – slice: Podtablica',
    opis: 'Zwróć fragment [10,20,30,40] od indeksu 1 do 3 (bez 3).',
    oczekiwane: '[20,30]',
    rozw: `const arr = [10,20,30,40];
const res = arr.slice(1,3);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[20,30]',
  },
  {
    tytul: 'Zadanie 14 – splice: Usuń i wstaw (mutuje)',
    opis: 'Na ["a","b","c","d"] usuń 1 element od index 2 i wstaw "X","Y". Wypisz wynik tablicy.',
    oczekiwane: '["a","b","X","Y","d"]',
    rozw: `const arr = ["a","b","c","d"];
arr.splice(2,1,"X","Y");
document.write(JSON.stringify(arr));`,
    test: (out) => out.trim() === '["a","b","X","Y","d"]',
  },
  {
    tytul: 'Zadanie 15 – concat: Połącz tablice',
    opis: 'Połącz [1,2] i [3,4] w jedną tablicę.',
    oczekiwane: '[1,2,3,4]',
    rozw: `const a = [1,2], b = [3,4];
const res = a.concat(b);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[1,2,3,4]',
  },
  {
    tytul: 'Zadanie 16 – join: Łączenie w string',
    opis: 'Połącz ["Ala","ma","kota"] separatorem ", " (przecinek+spacja).',
    oczekiwane: 'Ala, ma, kota',
    rozw: `const arr = ["Ala","ma","kota"];
document.write(arr.join(", "));`,
    test: (out) => out.trim() === 'Ala, ma, kota',
  },
  {
    tytul: 'Zadanie 17 – toReversed (ES2023): Odwracanie bez mutacji',
    opis: 'Dla [1,2,3] wypisz odwróconą kopię (oryginał bez zmian).',
    oczekiwane: '[3,2,1]',
    rozw: `const arr = [1,2,3];
const res = arr.toReversed();
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[3,2,1]',
  },
  {
    tytul: 'Zadanie 18 – toSorted (ES2023): Sort bez mutacji',
    opis: 'Dla [3,1,2] wypisz posortowaną kopię rosnąco.',
    oczekiwane: '[1,2,3]',
    rozw: `const arr = [3,1,2];
const res = arr.toSorted((a,b)=>a-b);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[1,2,3]',
  },
  {
    tytul: 'Zadanie 19 – Deduplikacja: filter + indexOf',
    opis: 'Usuń duplikaty z [1,2,2,3,1] zachowując kolejność pierwszych wystąpień.',
    oczekiwane: '[1,2,3]',
    rozw: `const arr = [1,2,2,3,1];
const res = arr.filter((v,i,a)=>a.indexOf(v)===i);
document.write(JSON.stringify(res));`,
    test: (out) => out.trim() === '[1,2,3]',
  },
  {
    tytul: 'Zadanie 20 – reduce: Grupowanie po category',
    opis: 'Zgrupuj po polu category: const items=[{name:"A",category:"x"},{name:"B",category:"y"},{name:"C",category:"x"}]; Zwróć obiekt {"x":[{"name":"A","category":"x"},{"name":"C","category":"x"}],"y":[{"name":"B","category":"y"}]}',
    oczekiwane:
      '{"x":[{"name":"A","category":"x"},{"name":"C","category":"x"}],"y":[{"name":"B","category":"y"}]}',
    rozw: `const items = [
  {name:"A",category:"x"},
  {name:"B",category:"y"},
  {name:"C",category:"x"},
];
const grouped = items.reduce((acc, it) => {
  (acc[it.category] ||= []).push(it);
  return acc;
}, {});
document.write(JSON.stringify(grouped));`,
    test: (out) =>
      out.trim() ===
      '{"x":[{"name":"A","category":"x"},{"name":"C","category":"x"}],"y":[{"name":"B","category":"y"}]}',
  },
];
