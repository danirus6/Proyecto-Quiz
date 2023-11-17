// Función para crear y actualizar el gráfico
const crearGrafico = (fechas, aciertos) => {
  // Obtén una referencia al elemento canvas
  const chartCanvas = document.getElementById("myChart");

  // Crea un contexto 2D para el gráfico
  const ctx = chartCanvas.getContext("2d");
  console.log("HOLA");
  // Crea el gráfico utilizando Chart.js
  new Chart(ctx, {
    type: "line", //TIPO DE GRAFICO
    data: {
      labels: fechas,
      datasets: [
        {
          label: "Cantidad de aciertos",
          data: aciertos,
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Color de fondo del gráfico
          borderColor: "rgba(255, 255, 0, 1)", // Color del borde del gráfico
          borderWidth: 1, // Ancho del borde del gráfico
        },
      ],
    },
    options: {
      scales: {
        y: {
          type: "linear",
          ticks: {
            precision: 0, // Set precision to 0 to display only integers
          },
        },
      },
    },
  });
};

// Exportar la función del gráfico para poder utilizarla en otros archivos
export { crearGrafico };
