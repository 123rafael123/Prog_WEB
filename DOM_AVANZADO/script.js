import form from "./components/formulario.js"
import tabla from "./components/tabla.js"
import cards from "./components/tabla.js"
(()=>{
    form.setDatos((task)=>{
        tabla.addTask(task);
        cards.update();
    });
})();