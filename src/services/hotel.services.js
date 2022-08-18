import { db, storage } from '../config/firebase';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const hotelsCollectionRef = collection(db, 'hotels');
export const addHotel = async (newHotel) => {
  return addDoc(hotelsCollectionRef, newHotel);
};

export const updateHotel = async (id, updatedHotel) => {
  const hotelDoc = doc(db, 'hotels', id);
  return updateDoc(hotelDoc, updatedHotel);
};

export const deleteHotel = async (id) => {
  const hotelDoc = doc(db, 'hotels', id);
  return deleteDoc(hotelDoc);
};

export const getAllHotels = async () => {
  return getDocs(hotelsCollectionRef);
};

export const getHotel = async (id) => {
  const hotelDoc = doc(db, 'hotels', id);
  return getDoc(hotelDoc);
};

export const uploadImage = async (file) => {
  const imageRef = ref(storage, `/images/${file.name + v4()}`);
  const uploadTask = await uploadBytes(imageRef, file);
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};
