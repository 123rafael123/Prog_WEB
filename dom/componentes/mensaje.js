const x= () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  window.addEventListener("load", x);
  
  document.getElementById("btn").addEventListener("click", x);