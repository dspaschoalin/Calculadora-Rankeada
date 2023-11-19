console.log("Calculadora de partidas Rankeadas")

let nickname = "Squalidus: Herói"

let victory = 126;

let defeat = 39;

console.log(nickname)

console.log("Vitórias: " + victory)

console.log("Derrotas:" + defeat)

const nome = "O Herói tem de saldo de "

const nivel= " está no nível de "

let resultado = balance(victory , defeat)
console.log("Saldo de Vitórias: " + resultado)

function balance(victory,defeat){
    let balance = victory - defeat
    return balance
}
if(resultado<10){
    console.log(nome + resultado + " vitórias" + nivel + "Ferro")}
     
else if(resultado >=11 && resultado<= 20){
    console.log(nome + resultado + " vitórias" + nivel + "Bronze")}

else if(resultado >=21 && resultado<= 50){
    console.log(nome + resultado + " vitórias" + nivel + "Prata")}

else if(resultado >=51 && resultado<= 80){
    console.log(nome + resultado + " vitórias" + nivel + "Ouro")}

else if(resultado >=81 && resultado<= 90){
    console.log(nome + resultado + " vitórias" + nivel + "Diamante")}

else if(resultado >=91 && resultado<= 100){
    console.log(nome + resultado + " vitórias" + nivel + "Lendário")}

else if(resultado >=101){
    console.log(nome + resultado + " vitórias" + nivel + "Imortal")}
        


