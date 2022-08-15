function calcularIMC(altura,peso) {
    const calcularIMC = (peso/(altura*altura)).toFixed(2);
    return "seu índice de massa corporal é de: " + calcularIMC;
}

console.log(calcularIMC(1.81,77.5))

