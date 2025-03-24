<<<<<<< HEAD
const deleteIcon=()=>{
    const i=document.createElement('i')
    i.classList.add('fas','fa-trash-alt','trashIcon','icon')
    i.addEventListener('click',eliminarTarea)
    return i;
}

const eliminarTarea=()=>{
    const parent=evento.target.parentElement;
    parent.remove();
=======
const deleteIcon=()=>{
    const i=document.createElement('i')
    i.classList.add('fas','fa-trash-alt','trashIcon','icon')
    i.addEventListener('click',eliminarTarea)
    return i;
}

const eliminarTarea=()=>{
    const parent=evento.target.parentElement;
    parent.remove();
>>>>>>> e928173f7f5c5453756a64c12de40fe30fdeebb9
}