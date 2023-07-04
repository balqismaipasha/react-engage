import appConfig from "../config/variable";
import * as CryptoJS from "crypto-js";

// key
const k = "/B?E(H+MbQeThWmZq4t6w9z$C&F)J@Nc";
const kp = "aQV]4-bqEMa_pGUU$ZzAitb}HlB|.r";

export function loginAuth(username, password) {
  let passwordEncrypt = CryptoJS.AES.encrypt(JSON.stringify(password), kp);
  let requestBody = {
    username: username,
    password: passwordEncrypt.toString(),
  };
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(requestBody), k);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ciphertext.toString(),
  };
  console.log(requestOptions);
  return fetch(appConfig.API + "/login", requestOptions);
}

// export function loginAuth(username, password) {
//   let passwordEncrypt = CryptoJS.AES.encrypt(
//     JSON.stringify(password),
//     process.env.REACT_APP_API_KEY_Q
//   );
//   let requestBody = {
//     username: username,
//     password: passwordEncrypt.toString(),
//   };
//   let ciphertext = CryptoJS.AES.encrypt(
//     JSON.stringify(requestBody),
//     process.env.REACT_APP_API_KEY_P
//   );
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: ciphertext.toString(),
//   };

//   console.log(requestOptions);
//   return fetch(appConfig.API + "/login", requestOptions);
// }
