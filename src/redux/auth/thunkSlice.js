import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { setUser } from "./AuthSlice";

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
