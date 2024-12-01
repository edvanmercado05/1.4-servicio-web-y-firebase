// main.js
import { agregarLibro, obtenerLibros, actualizarEstadoLibro, eliminarLibro } from './crud-operations.js';

// Función para agregar libro desde el formulario
window.agregarLibro = async () => {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const tipo = document.getElementById('tipo').value;
  const estado = document.getElementById('estado').value;

  if (titulo && autor && tipo && estado) {
    await agregarLibro(titulo, autor, tipo, estado);
    mostrarLibros();
    limpiarFormulario();
  } else {
    alert('Por favor, complete todos los campos.');
  }
};

// Función para mostrar libros en la tabla
const mostrarLibros = async () => {
  const tablaLibros = document.getElementById('tabla-libros').getElementsByTagName('tbody')[0];
  tablaLibros.innerHTML = '';

  const libros = await obtenerLibros();

  libros.forEach(libro => {
    const fila = tablaLibros.insertRow();
    fila.innerHTML = `<td>${libro.id}</td>
                      <td>${libro.titulo}</td>
                      <td>${libro.autor}</td>
                      <td>${libro.tipo}</td>
                      <td>${libro.estado}</td>
                      
                      <td>
                      <button onclick="actualizarEstado('${libro.id}', 'Leído')">Leído</button>
                      <button onclick="eliminarLibro('${libro.id}')">Eliminar</button>
                      </td>`;
    });
  };
  
  // Función para actualizar el estado de un libro
  window.actualizarEstado = async (libroId, nuevoEstado) => {
    await actualizarEstadoLibro(libroId, nuevoEstado);
    mostrarLibros();
  };
  
  // Función para limpiar el formulario después de agregar un libro
  const limpiarFormulario = () => {
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('estado').value = '';
  };
  
  // Cargar libros al cargar la página
  window.onload = () => {
    mostrarLibros();
  };
