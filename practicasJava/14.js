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
const procesarDatos= datos =>{
    return datos
         .filter(datos => datos.calificacion >51)
         .map(datos => {
            const{materia}=datos;
            return materia.length >5 ?
         })
}