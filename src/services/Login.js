import appConfig from "../config/variable";
import * as CryptoJS from "crypto-js";

export function loginAuth(username, password) {
  let passwordEncrypt = CryptoJS.AES.encrypt(
    JSON.stringify(password),
    appConfig.k2
  );
  let requestBody = {
    username: username,
    password: passwordEncrypt.toString(),
  };
  let ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(requestBody),
    appConfig.k1
  );
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ciphertext.toString(),
  };
  console.log(requestOptions);
  return fetch(appConfig.API + "/login", requestOptions);
}
