const peso = 88;
const altura = 1.76;

let imc = peso / altura**2;

if (imc <= 18.5) {
    console.log(`Seu índice de IMC é ${imc.toFixed(2)} o que é considerado Magreza`);
}if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu índice de IMC é ${imc.toFixed(2)} o que é considerado Normal`);
}if (imc >= 24.9 && imc <= 30) {
    console.log(`Seu índice de IMC é ${imc.toFixed(2)} o que é considerado Sobrepeso`);
}if (imc >= 30) {
    console.log(`Seu índice de IMC é ${imc.toFixed(2)} o que é considerado Obesidade`);
}
    



