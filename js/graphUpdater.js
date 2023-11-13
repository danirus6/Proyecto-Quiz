// Importar la librería Chart.js


// Función para crear y actualizar el gráfico
const crearGrafico = (fechas, aciertos) => {
    // Obtén una referencia al elemento canvas
    const chartCanvas = document.getElementById('myChart');

    // Crea un contexto 2D para el gráfico
    const ctx = chartCanvas.getContext('2d');
    console.log("HOLA")
    // Crea el gráfico utilizando Chart.js
    new Chart(ctx, {
        type: 'line', // Puedes elegir el tipo de gráfico que mejor se adapte a tus necesidades
        data: {
            labels: fechas,
            datasets: [{
                label: 'Cantidad de aciertos',
                data: aciertos,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo del gráfico
                borderColor: 'rgba(75, 192, 192, 1)', // Color del borde del gráfico
                borderWidth: 1 // Ancho del borde del gráfico
            }]
        },
        options: {
            // Puedes personalizar las opciones del gráfico según tus necesidades
        }
    });
};

// Exportar la función del gráfico para poder utilizarla en otros archivos
export { crearGrafico };