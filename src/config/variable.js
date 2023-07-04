class appConfig {
  static API = process.env.REACT_APP_API ?? "http://localhost/";
  static k = process.env.REACT_APP_API_KEY_P ?? "";
  static kp = process.env.REACT_APP_API_KEY_Q ?? "";
}

export default appConfig;
