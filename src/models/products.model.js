import { db } from "../data/firebase.data.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const col = "products";

export const getAll = async () => {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

export const getById = async (id) => {
  const ref = doc(db, col, id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const create = async (data) => {
  const ref = await addDoc(collection(db, col), data);
  return { id: ref.id, ...data };
};

export const update = async (id, data) => {
  const ref = doc(db, col, id);
  await updateDoc(ref, data);
  return { id, ...data };
};

/*export const remove = async (id) => {
  const ref = doc(db, col, id);
  await deleteDoc(ref);
  return { id };
};*/

export const remove = async (id) => {
  /***************************************************************************** */
  console.log("=========== DELETE ===========");
  console.log("ID ID recibido desde la ruta::", id);
  console.log("Tipo del ID recibido:", typeof id);

// Mostrar todos los IDs almacenados en Firestore
  const todos = await getDocs(collection(db, col));
  /*
  const q = query(collection(db, col), where("id", "==", id));
*/
 
  /*********************************************************************************** */
  console.log("Cantidad de resultados:", snap.size);

console.log("Productos en Firestore:");

  todos.forEach((documento) => {
    console.log("----------------------");
    console.log("Firebase ID:", documento.id);
    console.log("Campo id:", documento.data().id);
    console.log("Tipo campo id:", typeof documento.data().id);
  });

  /*
  snap.forEach((item) => {
    console.log("Firebase ID:", item.id);
    console.log("Datos:", item.data());
    console.log("Tipo del id guardado:", typeof item.data().id);
  });
*/
  // Buscar por el campo id
  const q = query(
    collection(db, col),
    where("id", "==", id)
  );

const snap = await getDocs(q);

  console.log("Cantidad encontrada:", snap.size);

  if (snap.empty) {
    throw new Error("Producto no encontrado");
  }

  const firebaseId = snap.docs[0].id;

console.log("Documento a eliminar:", firebaseId);


  await deleteDoc(doc(db, col, firebaseId));
    console.log("Producto eliminado correctamente");


  return { id };
};
