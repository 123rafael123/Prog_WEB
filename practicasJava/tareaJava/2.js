function x(frase) {
    let palabras = frase.split(' ');
  
    let n = '';
  
    for (let palabra of palabras) {
      if (palabra.length > n.length) {
        n = palabra;
      }
    }
  
    return n;
  }
  
  let a = "Sabe que la quiero pero she dont give a fo";
  let resultado = x(a);
  console.log(resultado);
