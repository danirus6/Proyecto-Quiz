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
  
![index_reduced](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/01713656-1211-462b-9c45-6f412b68035e)


### Página del Cuestionario (Quiz)

* Presenta una pregunta a la vez.
* Cada pregunta tiene 4 opciones.
* Interacción con el usuario para responder.
* Modal con la respuesta correcta.
* Cambio de color de los botones de respuesta (rojo para fallos, verde para aciertos).
* Breve tiempo de espera (3 segundos) antes de pasar a la siguiente pregunta.
* Automáticamente pasa a la página de resultados después de responder las 10 preguntas.
![preguntas_reduced](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/e8ed9b2d-e238-4a74-91a0-b45e9289d9bd)
![modal con respuesta_reduced](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/f39f33f4-7312-4d69-a5ca-ec4fff2ee30f)



### Página de Resultados

* Muestra los resultados finales del cuestionario.
* Informa al usuario sobre su desempeño con un mensaje personalizado.
* Guarda la fecha actual y el número de aciertos para su visualización en la grafica de la página de inicio.
![resultados_reduced](https://github.com/danirus6/Proyecto-Quiz/assets/134865137/7c2ce9b6-95f1-46de-941d-48f6d7a44bff)



## Instalación y Uso

1. Clonar este repositorio.
2. Abrir la carpeta del proyecto en la terminal.
3. Ejecutar `index.html` en un navegador web.
