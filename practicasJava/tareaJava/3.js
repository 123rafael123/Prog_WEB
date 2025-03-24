function x(cadena) {
    let a = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return a;
  }
  
  console.log(x("123456789"));
