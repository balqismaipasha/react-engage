import appConfig from "../config/variable";
import * as CryptoJS from "crypto-js";

const API_KEY_KP = process.env.REACT_APP_API_KEY_Q;
const API_KEY_K = process.env.REACT_APP_API_KEY_P;

export function loginAuth(username, password) {
  let passwordEncrypt = CryptoJS.AES.encrypt(
    JSON.stringify(password),
    API_KEY_KP
  );
  let requestBody = {
    username: username,
    password: passwordEncrypt.toString(),
  };
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(requestBody), API_KEY_K);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ciphertext.toString(),
  };
  console.log(requestOptions);
  return fetch(appConfig.API + "/login", requestOptions);
}
