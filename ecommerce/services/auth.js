import axios from "axios";

const authenticate = async (mode, email, password) => {
  const API_KEY = "AIzaSyBmg_YJKBb2PIN0OXNoieh_tl1xdzb1eXk"
  const URL_API = "https://identitytoolkit.googleapis.com/v1/accounts:"

    try {
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (email, password) => {
  const token = await authenticate("signUp", email, password);
  return token;
};
export const login = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
};
