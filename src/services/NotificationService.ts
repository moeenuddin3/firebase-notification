// src/services/NotificationService.ts
import {
    collection, addDoc, updateDoc, getDocs, query, where, doc
  } from 'firebase/firestore';
  import { db } from '../firebaseConfig';
  import { Notification } from '../types/Notification';
  
  const collectionRef = collection(db, 'notifications');
  
  export const createNotification = async (message: string) => {
    await addDoc(collectionRef, { message, read: false });
  };
  
  export const getNotifications = async (): Promise<Notification[]> => {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      message: doc.data().message as string,
      read: doc.data().read as boolean
    }));
  };
  
  export const markNotificationRead = async (id: string) => {
    const notificationRef = doc(db, 'notifications', id);
    await updateDoc(notificationRef, { read: true });
  };
  