import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { setUser } from "../redux/auth/AuthSlice";

const usernameExists = async (username) => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);
    let exists = false;

    querySnapshot.forEach((doc) => {
      if (doc.data().username === username) {
        exists = true;
      }
    });

    return exists;
  } catch (error) {
    console.error("Error al verificar el nombre de usuario:", error);
    throw error;
  }
};

export const registerUser = async (email, password, username, birthday) => {
  try {
    const usernameAlreadyExists = await usernameExists(username);
    if (usernameAlreadyExists) {
      return {
        success: false,
        error: "El nombre de usuario ya está en uso. Por favor, elige otro.",
      };
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Usuario creado en Authentication:", user.uid);

    await updateProfile(user, {
      displayName: username,
    });

    console.log("Perfil actualizado con displayName:", username);

    // Datos para guardar en Firestore
    const userData = {
      username,
      email,
      birthday,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      uid: user.uid,
    };

    console.log("Intentando guardar en Firestore:", userData);

    try {
      await setDoc(doc(db, "users", user.uid), userData);
      console.log("Documento creado exitosamente en Firestore");
    } catch (firestoreError) {
      console.error("Error al crear documento en Firestore:", firestoreError);
      return {
        success: true,
        user,
        warning:
          "Usuario creado, pero hubo un problema al guardar datos adicionales: " +
          firestoreError.message,
      };
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error en el registro:", error);
    let errorMessage = error.message;

    if (error.code === "auth/email-already-in-use") {
      errorMessage =
        "Este correo electrónico ya está registrado. Prueba con otro o inicia sesión.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "El formato del correo electrónico no es válido.";
    } else if (error.code === "auth/weak-password") {
      errorMessage =
        "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
    } else if (error.code === "auth/network-request-failed") {
      errorMessage =
        "Error de conexión. Verifica tu conexión a internet e intenta nuevamente.";
    }

    return { success: false, error: errorMessage };
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (firestoreError) {
      console.error("Error al actualizar último acceso:", firestoreError);
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);

    let errorMessage = error.message;

    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      errorMessage = "Correo electrónico o contraseña incorrectos.";
    } else if (error.code === "auth/too-many-requests") {
      errorMessage =
        "Demasiados intentos fallidos. Intenta más tarde o restablece tu contraseña.";
    } else if (error.code === "auth/network-request-failed") {
      errorMessage =
        "Error de conexión. Verifica tu conexión a internet e intenta nuevamente.";
    }

    return { success: false, error: errorMessage };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getCurrentUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return { success: true, userData: userDoc.data() };
    } else {
      return { success: false, error: "User document does not exist" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
