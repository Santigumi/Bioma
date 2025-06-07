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
      const user = userCredential.user;

      // Obtener info adicional desde Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        thunkAPI.dispatch(setUser(userData)); // Envía al slice
        return userData;
      } else {
        return thunkAPI.rejectWithValue(
          "No se encontró el usuario en Firestore"
        );
      }
    } catch (error) {
      console.error("Error en login:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
