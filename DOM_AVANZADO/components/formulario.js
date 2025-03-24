const Form=(()=>{
    //RECUPERANDO DATA DEL FORMULARIO
    const form=document.querySelector('[data-form]');
    const inputTask=document.querySelector('[data-input-task]');
    const inputDescription=document.querySelector('[data-input-description]');
    const date=document.querySelector('[data-input-fecha]');
    const inputPrioridad=document.querySelector('[data-input-prioridad]');
//GUARDA LOS DATOS COMO OBJETO (datosForm)
    const datosForm=()=>{
        return{
            task:inputTask.value.trim(),
            description:inputDescription.value.trim(),
            date:date.value.trim(),
            priority:inputPrioridad.value.trim(),
        };
    };

const reset=()=>{
    inputTask.value="";
    inputDescription.value="";
    date.value="";
    inputPrioridad.value="";
};
const setDatos=(callBack)=>{
    form.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        callBack(datosForm());
        reset();
    });
};
return {setDatos};
})();
export default Form;