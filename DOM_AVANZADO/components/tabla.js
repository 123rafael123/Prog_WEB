<<<<<<< HEAD
import cards from "./cards.js";
const tabla=(()=>{
    const cuerpoTabla=document.getElementById('taskTable').getElementsByTagName('tbody')(0);
    const addTask=(task)=>{
        const nuevaFila=cuerpoTabla.insertRow();
        nuevaFila.insertCell(0).textContent=task.task;
        nuevaFila.insertCell(1).textContent=task.description;
        nuevaFila.insertCell(2).textContent=task.date;
        nuevaFila.insertCell(3).textContent=task.priority;
        //ACCIONES
        const accionCell=nuevaFila.insertCell(4);
        const accions=document.createElement('div')
        accions.className='actions'
        //CREAR BOTONES
        const completeButton=document.createElement('button');
         completeButton.textContent='Completador';
         completeButton.className='view';
         completeButton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');

            cards.update();
         });
         accions.appendChild(completeButton);

         const deleteButton=document.createElement('button');
         deleteButton.textContent='eliminar';
         deleteButton.className='delete';
         deleteButton.addEventListener('click',()=>{
            cuerpoTabla.deleteRow(nuevaFila.rowIndex-1);
            
            cards.update();

         });
         accions.appendChild(deleteButton);
         accionCell.appendChild(accions);
    };
    const getTask=()=>{
        return Array.from(cuerpoTabla.row).map(row=>({
            taskName:row.cell[0].textContent,
            description:row.cell[1].textContent,
            date:row.cell[2].textContent,
            priority:row.cell[3].textContent,
            completed:row.classList.contains('completed')
        }));
        return{addTask,getTask}
    }

})();
export default tabla;
=======
import cards from "./cards.js";
const tabla=(()=>{
    const cuerpoTabla=document.getElementById('taskTable').getElementsByTagName('tbody')(0);
    const addTask=(task)=>{
        const nuevaFila=cuerpoTabla.insertRow();
        nuevaFila.insertCell(0).textContent=task.task;
        nuevaFila.insertCell(1).textContent=task.description;
        nuevaFila.insertCell(2).textContent=task.date;
        nuevaFila.insertCell(3).textContent=task.priority;
        //ACCIONES
        const accionCell=nuevaFila.insertCell(4);
        const accions=document.createElement('div')
        accions.className='actions'
        //CREAR BOTONES
        const completeButton=document.createElement('button');
         completeButton.textContent='Completador';
         completeButton.className='view';
         completeButton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');

            cards.update();
         });
         accions.appendChild(completeButton);

         const deleteButton=document.createElement('button');
         deleteButton.textContent='eliminar';
         deleteButton.className='delete';
         deleteButton.addEventListener('click',()=>{
            cuerpoTabla.deleteRow(nuevaFila.rowIndex-1);
            
            cards.update();

         });
         accions.appendChild(deleteButton);
         accionCell.appendChild(accions);
    };
    const getTask=()=>{
        return Array.from(cuerpoTabla.row).map(row=>({
            taskName:row.cell[0].textContent,
            description:row.cell[1].textContent,
            date:row.cell[2].textContent,
            priority:row.cell[3].textContent,
            completed:row.classList.contains('completed')
        }));
        return{addTask,getTask}
    }

})();
export default tabla;
>>>>>>> e928173f7f5c5453756a64c12de40fe30fdeebb9
