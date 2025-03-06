const ciudadesDisponibles= new Array ("Santiago","Bogota","Lima","Monte Video");
const precioPasaje = new Array(200,300,100,400);
const precioDisponible=210;
let i=0;
while(precioPasaje[i]>precioDisponible && i<ciudadesDisponibles.length){
    i++;
}
if(i==ciudadesDisponibles.length){
    console.log("No existen pasajes");
}
else{
    console.log(`se puede comprar pasaje para :`+ciudadesDisponibles[i]);
}