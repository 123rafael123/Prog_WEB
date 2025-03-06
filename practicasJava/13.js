const datos =[
    {
        "materia":"Programacion Web",
        "calificacion":51,
    },
    {
        "materia":"Programacion III",
        "calificacion":40,
    },
    {
        "materia":"Base De Datos",
        "calificacion":60,
    },
    {
        "materia":"Programacion Movil",
        "calificacion":30,
    },
    {
        "materia":"Ingles",
        "calificacion":100,
    },
];
let i=0
const NotaAprovacion=51;
let materialSeleccionado="";
for(let i=0; i<datos.length && NotaAprovacion =="" ;i++){
    if(datos[i].calificacion<=NotaAprovacion){
        materialSeleccionado=datos[i].materia
    }
}
if(materialSeleccionado=="")
    console.log("No hay materias aprobadas");
else
console.log("La materia aprobada es "+materialSeleccionado)