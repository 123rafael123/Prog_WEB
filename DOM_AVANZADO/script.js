<<<<<<< HEAD
import form from "./components/formulario.js"
import tabla from "./components/tabla.js"
import cards from "./components/tabla.js"
(()=>{
    form.setDatos((task)=>{
        tabla.addTask(task);
        cards.update();
    });
=======
import form from "./components/formulario.js"
import tabla from "./components/tabla.js"
import cards from "./components/tabla.js"
(()=>{
    form.setDatos((task)=>{
        tabla.addTask(task);
        cards.update();
    });
>>>>>>> e928173f7f5c5453756a64c12de40fe30fdeebb9
})();