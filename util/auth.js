import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
import { authFirebase } from '@/configuration/firebase';
import { insertData } from './user';

export const firebaseRegister = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            authFirebase,
            email,
            password,
        )
        const { user } = userCredential
        localStorage.setItem('jwt-token', user.accessToken)

        const data = {
            name, 
            email,
            password,
        }

        await insertData (user.uid, data)
        return {
            status: 'SUCCESS',
            data,
        }        
    } catch (error) {
        return {
            status: 'ERROR',
            message: error.message,
        }
    }
}

export const firebaseLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authFirebase,
        email,
        password,
      );
      const { user } = userCredential;
      localStorage.setItem('jwt-token', user.accessToken);
      return {
        status: 'SUCCESS',
      };
    } catch (error) {
      return {
        status: 'ERROR',
        message: error.message,
      };
    }
  };