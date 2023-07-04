import appConfig from "../config/variable";
import * as CryptoJS from "crypto-js";

export function loginAuth(username, password) {
  let passwordEncrypt = CryptoJS.AES.encrypt(
    JSON.stringify(password),
    process.env.REACT_APP_API_KEY_Q
  );
  let requestBody = {
    username: username,
    password: passwordEncrypt.toString(),
  };
  let ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(requestBody),
    process.env.REACT_APP_API_KEY_P
  );
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ciphertext.toString(),
  };

  return fetch(appConfig.API + "/login", requestOptions);
}
