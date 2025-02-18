// scripts.js
function mostrarTabla() {
  // Lógica para generar la tabla
  fetch("../utils/equipos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      const tabla = generarTabla(data);
      document.getElementById("tabla-contenedor").innerHTML = tabla;
    })
    .catch((error) => console.error("Error:", error));
}

function generarTabla(datos) {
  let tablaHTML = `<table class="table-auto border-collapse border border-slate-400 w-full">
        <thead>
            <tr>
                <th class="p-2 border border-slate-300 sticky top-0 bg-red-400">Nombre</th>
                <th class="p-2 text-center border border-slate-300 sticky top-0 bg-red-400"># de Inventario</th>
                <th class="p-2 text-center border border-slate-300 sticky top-0 bg-red-400">Marca</th>
                <th class="p-2 text-center border border-slate-300 sticky top-0 bg-red-400">Modelo</th>
                <th class="p-2 text-center border border-slate-300 sticky top-0 bg-red-400">Acción</th>
            </tr>
        </thead>
        <tbody>`;

  let index = 1;
  datos.forEach((item) => {
    tablaHTML += `<tr>
            <td class="p-1 border border-slate-300"> ${index}. ${item.nombre}</td>
            <td class="p-1 text-center border border-slate-300">${item.numeroInventario}</td>
            <td class="p-1 text-center border border-slate-300">${item.marca}</td>
            <td class="p-1 text-center border border-slate-300">${item.modelo}</td>
            <td class="p-1 text-center border border-slate-300">
                <div class="flex justify-center items-center cursor-pointer" onclick="openModal('${item.nombre}', '${item.photos[0]}' )">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.043.123-.093.245-.15.364-.012.027-.025.054-.038.081C20.268 16.057 16.477 19 12 19c-4.477 0-8.268-2.943-9.542-7-.043-.123-.093-.245-.15-.364a1.593 1.593 0 01-.038-.081z" />
                    </svg>
                </div>
            </td>
        </tr>`;
    index++;
  });

  tablaHTML += `</tbody></table>`;
  return tablaHTML;
}

// Llama a la función cuando se muestre el componente

document.addEventListener("DOMContentLoaded", function () {
  console.log("Página cargada");

  const delay = 50; // Tiempo de espera en milisegundos (ajústalo según sea necesario)

  const checkHashAndShowTable = () => {
    setTimeout(() => {
      if (window.location.hash === "#laboratories") {
        mostrarTabla(); // Solo ejecuta si la URL tiene el hash correcto

        // JavaScript para el carrusel
        // Seleccionar el carrusel por clase
        const carrusel = document.querySelector('.carrusel'); // Selecciona el primer elemento con la clase "carrusel"
        const imagenes = carrusel.querySelectorAll('img');
        let indiceActual = 0;
        const totalImagenes = imagenes.length;

        function moverCarrusel() {
          if (indiceActual === totalImagenes - 2) {
              // Si está en el penúltimo elemento, vuelve al inicio
              indiceActual = 0;
          } else {
              // Avanza al siguiente índice
              indiceActual = (indiceActual + 1) % totalImagenes;
          }

          const offset = -indiceActual * 51; // Desplazamiento en porcentaje (50% por imagen)
          carrusel.style.transform = `translateX(${offset}%)`;
      }


        setInterval(moverCarrusel, 4000); // Cambia de imagen cada 5 segundos

      }
    }, delay);
  };

  // Ejecuta la función cuando la página se carga
  checkHashAndShowTable();

  // Escucha los cambios de hash
  window.addEventListener("hashchange", function () {
    checkHashAndShowTable();
  });
});

