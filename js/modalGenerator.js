

// Crear elementos del modal
const modal = document.createElement('div');
modal.classList.add('modal', 'fade'); // 'fade' es una clase de Bootstrap para agregar un efecto de transición
modal.tabIndex = -1; // Permite cerrar el modal al presionar la tecla ESC

const modalDialog = document.createElement('div');
modalDialog.classList.add('modal-dialog-centered','modal-sm');


const modalContent = document.createElement('div');
modalContent.classList.add('modal-content',"modal-sm");

const modalBody = document.createElement('div');
modalBody.classList.add('modal-body',"modal-sm");

const modalText = document.createElement('h3');
modalText.textContent = ''; // Dejar el contenido del texto vacío por defecto
modalText.classList.add('mt-3', 'mx-3','text-center');
// const modalFooter = document.createElement('div');
// modalFooter.classList.add('modal-footer');

// const exitButton = document.createElement('button');
// exitButton.classList.add('btn', 'btn-secondary');
// exitButton.textContent = 'Salir';

// const nextButton = document.createElement('button');
// nextButton.classList.add('btn', 'btn-primary');
// nextButton.textContent = 'Siguiente Pregunta';

// Agregar elementos al modal
modalBody.appendChild(modalText);
// modalFooter.appendChild(exitButton);
// modalFooter.appendChild(nextButton);
modalContent.appendChild(modalBody);
// modalContent.appendChild(modalFooter);
modalDialog.appendChild(modalContent);
modal.appendChild(modalDialog);

// Agregar modal al DOM
document.body.appendChild(modal);

// Función para abrir el modal
const openModal = () => {
    modal.style.display = 'block';
    modal.classList.add('show'); // Añade la clase 'show' para mostrar el modal
    modalDialog.classList.add('show'); // Añade la clase 'show' al dialog
    document.body.classList.add('modal-open'); // Añade la clase 'modal-open' al body
};

// Función para cerrar el modal
const closeModal = () => {
    modal.style.display = 'none';
    modal.classList.remove('show');
    modalDialog.classList.remove('show');
    document.body.classList.remove('modal-open');
};

// Agregar eventos a los botones
// exitButton.addEventListener('click', closeModal);
// nextButton.addEventListener('click', closeModal);

// Función para actualizar el texto del modal
const updateModalText = (text) => {
    modalText.textContent = text;
};

// Exportar el modal y la función de actualización del texto para poder utilizarlos en otros archivos
export { modal, openModal, updateModalText, closeModal };
