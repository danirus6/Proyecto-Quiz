//TODO: ESTO ES UN MODAL SIMPLE, HAY QUE AMOLDARLO
// Crear elementos del modal
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
const modalText = document.createElement('p');
modalText.textContent = ''; // Dejar el contenido del texto vacío por defecto
const exitButton = document.createElement('button');
exitButton.textContent = 'Salir';
const nextButton = document.createElement('button');
nextButton.textContent = 'Siguiente Pregunta';

// Agregar elementos al modal
modalContent.appendChild(modalText);
modalContent.appendChild(exitButton);
modalContent.appendChild(nextButton);
modal.appendChild(modalContent);

// Estilos CSS para el modal
// ...

// Función para abrir el modal
const openModal = () => {
    modal.style.display = 'block';
};

// Función para cerrar el modal
const closeModal = () => {
    modal.style.display = 'none';
};

// Agregar eventos a los botones
exitButton.addEventListener('click', closeModal);
nextButton.addEventListener('click', closeModal);

// Función para actualizar el texto del modal
const updateModalText = (text) => {
    modalText.textContent = text;
};

// Exportar el modal y la función de actualización del texto para poder utilizarlos en otros archivos
export { modal, openModal, updateModalText };