
function somar(x, y) {
    return x + y;
};

function subtrair(x, y) {
    return x - y;
};

function multiplicar(x, y) {
    return x * y;
};

function dividir(x, y) {
    return x / y;
};

console.log("Testando Operações / Calculadora ")

console.log(somar(3, 5));
console.log(subtrair(14, 6));
console.log(multiplicar(2, 7));
console.log(dividir(4, 2));

console.log(dividir(8, 0));

// Quadrado de um número

function numAoQuadrado(x) {
    return multiplicar(x, x);
};

console.log(numAoQuadrado(8));

// Média

function mediaTresNumeros(x, y, z) {
    return (dividir((somar(x, y) + z), 3))
};

console.log(mediaTresNumeros(8, 16, 24));

// Porcentagem

function calcPorcentagem(x, y) {
    return calcPorcentagem = multiplicar(x, dividir(y, 100))
}

console.log(calcPorcentagem(200, 25))

// Gera Porcentagem

function criaPorcentagem(x, y) {
    return multiplicar(dividir(x, y), 100)
}

console.log(criaPorcentagem(75, 500))