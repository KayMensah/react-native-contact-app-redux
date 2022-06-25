import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setAuthenticated = (authenticated) => {
  return {
    type: "SET_AUTHENTICATED",
    payload: authenticated,
  };
};

export const registerUser = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
};
