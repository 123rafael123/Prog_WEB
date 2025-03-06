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
do{
    if(datos[i].calificacion<=NotaAprovacion){
        materialSeleccionado=datos[i].materia
        break;
    }
    i++
}while(i<datos.length && materialSeleccionado =="")
    if(materialSeleccionado==""){   
    console.log("NO APROBASTE LA MATERIA")
    }
    else{
        console.log("APROBASTE LA MATERIA DE "+materialSeleccionado);
    }