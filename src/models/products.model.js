import { db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const col = "products";

export const getAll = async () => {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getById = async (id) => {
  const ref = doc(db, col, id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const create = async (data) => {
  return await addDoc(collection(db, col), data);
};

export const remove = async (id) => {
  return await deleteDoc(doc(db, col, id));
};