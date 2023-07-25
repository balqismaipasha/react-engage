import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/shared/context/AppLayout";
import LoginComponent from "../components/pages/login/Login";
// import Auth from "../services/CookieServices";

export class RoutePath {
  static HOME = "home";
  static LOGIN = "/";
}

function Load() {
  // const auth = Auth();
  // if (!auth.check()) return <LoginComponent></LoginComponent>;

  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<AppLayout />} />
      <Route path={RoutePath.LOGIN} element={<LoginComponent />} />
    </Routes>
  );
}

export default Load;
