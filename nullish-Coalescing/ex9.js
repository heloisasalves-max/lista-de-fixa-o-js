const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// O || imprime o 10 porque 0 é falsy
// O ?? imprime o 0 porque o 0 não é null nem undefined
