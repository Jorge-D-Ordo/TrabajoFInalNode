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
  where
} from "firebase/firestore";

const col = "products";

export const getAll = async () => {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map(d => ({
    id: d.id, ...d.data()
  }));
};

export const getById = async (id) => {
  const ref = doc(db, col, id);
  const snap = await getDoc(ref);
  return snap.exists()
    ? { id: snap.id, ...snap.data() }
    : null;
};

export const create = async (data) => {
  const ref = await addDoc(collection(db, col), data);
  return { id: ref.id, ...data};
};

export const update = async (id, data) => {
  const ref = doc(db, col, id);
  await updateDoc(ref, data);
  return { id, ...data};
};

/*export const remove = async (id) => {
  const ref = doc(db, col, id);
  await deleteDoc(ref);
  return { id };
};*/
export const remove = async (id) => {
  
   console.log("ID recibido:", id);
  console.log("Colección:", col);
  
  const q = query(
    collection(db, col),
    where("id", "==", id)
    
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    throw new Error("Producto no encontrado");
  }

  const firebaseId = snap.docs[0].id;

  await deleteDoc(doc(db, col, firebaseId));f

  return { id };
};