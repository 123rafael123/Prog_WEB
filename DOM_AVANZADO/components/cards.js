<<<<<<< HEAD
import tabla from './tabla.js';
const cards=(()=>{
    const taskCards=document.getElementById('taskCard');
    const update=()=>{
        const task=tabla.getTask();
        taskCards.innerHTML='';//LIMPIA LAS CARDS REFRESCANDO
        task.forEach(task =>{
            const card=document.createElement('div');
            card.className='taskCard';
            card.innerHTML=`
            <p><strong>Nombre:</strong>${task.task}</p>
            <p><strong>Descripcion:</strong>${task.description}</p>
            <p><strong>Fecha:</strong>${task.date}</p>
            <p><strong>Prioridad:</strong>${task.priority}</p>
            <p><strong>Estado:</strong>${task.completed}</p>
            ;`
            taskCards.appendChild(card);
        });
    };
    return{update}
})();
export default cards;
=======
import tabla from './tabla.js';
const cards=(()=>{
    const taskCards=document.getElementById('taskCard');
    const update=()=>{
        const task=tabla.getTask();
        taskCards.innerHTML='';//LIMPIA LAS CARDS REFRESCANDO
        task.forEach(task =>{
            const card=document.createElement('div');
            card.className='taskCard';
            card.innerHTML=`
            <p><strong>Nombre:</strong>${task.task}</p>
            <p><strong>Descripcion:</strong>${task.description}</p>
            <p><strong>Fecha:</strong>${task.date}</p>
            <p><strong>Prioridad:</strong>${task.priority}</p>
            <p><strong>Estado:</strong>${task.completed}</p>
            ;`
            taskCards.appendChild(card);
        });
    };
    return{update}
})();
export default cards;
>>>>>>> e928173f7f5c5453756a64c12de40fe30fdeebb9
