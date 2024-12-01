// crud-operations.js
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';
import { db } from './firebase-config.js';

const agregarLibro = async (titulo, autor, tipo, estado) => {
  try {
    const librosRef = collection(db, 'libros');
    await addDoc(librosRef, { titulo, autor, tipo, estado });
    console.log('Libro agregado con éxito');
  } catch (error) {
    console.error('Error al agregar libro:', error);
  }
};

const obtenerLibros = async () => {
  try {
    const librosRef = collection(db, 'libros');
    const snapshot = await getDocs(librosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener libros:', error);
    return [];
  }
};

const actualizarEstadoLibro = async (libroId, nuevoEstado) => {
  try {
    const libroRef = doc(db, 'libros', libroId);
    await updateDoc(libroRef, { estado: nuevoEstado });
    console.log('Estado de libro actualizado con éxito');
  } catch (error) {
    console.error('Error al actualizar estado de libro:', error);
  }
};

const eliminarLibro = async (libroId) => {
  try {
    const libroRef = doc(db, 'libros', libroId);
    await deleteDoc(libroRef);
    console.log('Libro eliminado con éxito');
  } catch (error) {
    console.error('Error al eliminar libro:', error);
  }
};

export { agregarLibro, obtenerLibros, actualizarEstadoLibro, eliminarLibro };
