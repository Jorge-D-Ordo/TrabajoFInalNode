import { db } from "../data/firebase.data.js";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const col = "products";

export const getAll = async () => {
  const q = query(collection(db, col), orderBy("id"));

  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    ...d.data(),
  }));
};

export const getById = async (id) => {
  const q = query(collection(db, col), where("id", "==", id));

  const snap = await getDocs(q);

  if (snap.empty) {
    return null;
  }

  const documento = snap.docs[0];

  return {
    ...documento.data(),
  };
};

export const create = async (data) => {
  await addDoc(collection(db, col), data);
  return data;
};
/*
export const update = async (id, data) => {
  const ref = doc(db, col, id);
  await updateDoc(ref, data);
  return { id, ...data };
};
*/

export const remove = async (id) => {
  const q = query(collection(db, col), where("id", "==", id));
};

const snap = await getDocs(q);

if (snap.empty) {
  throw new Error("Producto no encontrado");
}

const firebaseId = snap.docs[0].id;

await deleteDoc(doc(db, col, firebaseId));
console.log("Producto eliminado correctamente");

return { id };
