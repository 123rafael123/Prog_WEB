const numeros = new Array(1,2,3,4,5,6,7,8,9,10);
let i=0
let pares=[];
let impares=[];
while(i<=numeros.length){
    if(numeros[i]%2==0){
        pares.push(numeros[i]);
    }
    else{
        impares.push(numeros[i]);
    }
    i=i+1
}
console.log(pares)
console.log(impares)
