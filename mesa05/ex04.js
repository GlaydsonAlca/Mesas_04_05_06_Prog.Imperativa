function idadeDog(AnoHomem,MesHomem) {
    const idadeDog = (7/12)*(12*AnoHomem+MesHomem);
    return "seu pet tem " + Math.trunc(idadeDog) + " anos"; //Math.trunc(idadeCachorro) retorna o valor sem as casas decimais, sem arredondar.
}

console.log(idadeDog(0,8));