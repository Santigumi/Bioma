import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebaseConfig";

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));

      if (!userDoc.exists()) {
        return thunkAPI.rejectWithValue(
          "Usuario no encontrado en la base de datos"
        );
      }

      const userData = userDoc.data();

      const completeUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        username: userData.username || firebaseUser.displayName,
      };

      return completeUser;
    } catch (error) {
      console.error("Error en login:", error);

      let errorMessage = error.message;
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuario no encontrado";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Contraseña incorrecta";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username, birthday }, thunkAPI) => {
    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", firebaseUser.uid), {
        username,
        email,
        birthday: birthday ? birthday.toISOString() : null,
        createdAt: new Date().toISOString(),
      });

      // Retornar el usuario completo
      const completeUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        username,
      };

      return completeUser;
    } catch (error) {
      console.error("Error en registro:", error);

      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este email ya está registrado";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "La contraseña es muy débil";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Email inválido";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
