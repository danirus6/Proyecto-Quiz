# Proyecto-Quiz

## Descripción

El proyecto consiste en desarrollar una Single Page Application (SPA) para presentar un cuestionario (Quiz) compuesto por 10 preguntas provenientes de la API de preguntas de [https://opentdb.com/](https://opentdb.com/). Cada pregunta tendrá 4 opciones, de las cuales solo una será la correcta. La SPA mostrará las preguntas una a la vez y permitirá al usuario seleccionar una respuesta, mostrando los resultados incorrectos y correctos al final del cuestionario.

## Objetivos

- Repasar y profundizar en los conocimientos adquiridos durante el bootcamp.
- Practicar y reforzar el manejo de manipulación dinámica del DOM, ES6, asincronía y uso de APIs, como la de preguntas de [https://opentdb.com/](https://opentdb.com/).
- Mejorar habilidades en el trabajo con Git y gestión de proyectos colaborativos.
- Mejorar el trabajo en equipo y prácticas de codificación limpias.

## Requisitos Solicitados en el Proyecto

- Manipulación dinámica del DOM.
- Creación de una SPA para presentar las preguntas.
- Uso de ES6.
- Uso de la API de preguntas de [https://opentdb.com/](https://opentdb.com/).
- Posible uso de localStorage y la implementación de gráficas (opcional).
- Evitar el uso de frameworks y librerías externas, salvo frameworks de CSS como Bootstrap.
- Gestión del proyecto desde un único repositorio compartido en GitHub, con colaboradores.
- Código limpio, siguiendo buenas prácticas.
- README detallado explicando el proyecto.

## Páginas

### Página de Inicio

* Mensaje de bienvenida al usuario.
* Tarjeta de inicio que, al hacer clic, inicia el juego y realiza una llamada a la API para obtener las preguntas.
* Gráfica lineal que muestra los resultados anteriores.
![index](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/ad7c5d6e-2532-42e9-9ceb-6c5a8f52159c)

### Página del Cuestionario (Quiz)

* Presenta una pregunta a la vez.
* Cada pregunta tiene 4 opciones.
* Interacción con el usuario para responder.
* Modal con la respuesta correcta.
* Cambio de color de los botones de respuesta (rojo para fallos, verde para aciertos).
* Breve tiempo de espera (3 segundos) antes de pasar a la siguiente pregunta.
* Automáticamente pasa a la página de resultados después de responder las 10 preguntas.
![preguntas](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/9b81da5b-5c05-4d11-8401-1d6600d50606)

### Página de Resultados

* Muestra los resultados finales del cuestionario.
* Informa al usuario sobre su desempeño con un mensaje personalizado.
* Guarda la fecha actual y el número de aciertos para su visualización en la grafica de la página de inicio.
![resultados](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/8d9d9ae5-98f8-434a-ba81-c977728ea0a7)
![modal con respuesta](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/0d1df7c9-4a5d-4ede-a089-6d64c2b64e61)


## Instalación y Uso

1. Clonar este repositorio.
2. Abrir la carpeta del proyecto en la terminal.
3. Ejecutar `index.html` en un navegador web.
