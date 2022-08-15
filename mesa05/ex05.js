function valHoraTrabalho (salarioMensal) {
    const valHoraTrabalho = salarioMensal/110;
    return "O valor da sua hora de trabalho é de R$ " + valHoraTrabalho.toFixed(2);
}

console.log(valHoraTrabalho(900.15)); 