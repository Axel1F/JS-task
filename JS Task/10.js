let number;
do {
    number = prompt('Введите число больше 100?');
} while (number<=100&&number !== '' &&number !== null);

const n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  console.log( i ); 
}
