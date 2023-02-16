import { onValue, ref, set } from 'firebase/database'
import { databaseFirebase } from '../configuration/firebase'

export const insertData = async (id, userData) => {
    await set(ref(databaseFirebase, `user/${id}`), userData)
    return 'Data Created'
}

export const getUserBiodataById = (id) => new Promise((resolve, reject) => {
    const dbRef = ref(databaseFirebase, `user/${id}`);
    onValue(dbRef, (data) => {
      const value = data.val();
      resolve(value);
    });
  });