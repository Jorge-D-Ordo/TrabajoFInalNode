import { db } from "../data/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc
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

export const remove = async (id) => {
  const ref = doc(db, col, id);
  await deleteDoc(ref);
  return { id };
};