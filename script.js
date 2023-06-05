const button = document.getElementById("button");
const back = document.getElementById("back");
const input = document.querySelectorAll('.input');
const nome = document.getElementById("name");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");

const getText = (imc) => {
    if(imc > 40) return `IMC = ${+imc} - Obesidade Grau III`;
    if(imc > 35) return `IMC = ${+imc} - Obesidade Grau II`;
    if(imc > 30) return `IMC = ${+imc} - Obesidade Grau I`;
    if(imc > 25) return `IMC = ${+imc} - Sobrepeso`;
    if(imc > 18.5) return `IMC = ${+imc} - Peso Ideal`;
    return `IMC = ${imc} - Abaixo do Peso Ideal`;
}

const imcCalc = () => {
    if(!nome.value || !altura.value || !peso.value) return resultado.textContent = "Preencha todos os campos!"
    const valorImc = (peso.value/(altura.value * altura.value)).toFixed(1);
    resultado.textContent = `${nome.value}, ${getText(valorImc)}`; 
}

button.addEventListener('click', () => {
    input.forEach((input) => {
        input.style.display = "none";
    });
    button.style.display = "none";
    back.style.display = "block";
    resultado.style.display = "block";
    imcCalc();
});

back.addEventListener('click', () => {
    input.forEach((input) => {
        input.style.display = "flex";
    });
    button.style.display = "block";
    back.style.display = "none";
    resultado.style.display = "none";
    nome.value = "";
    altura.value = "";
    peso.value = "";
});