import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/shared/context/AppLayout";
import Login from "../components/pages/login/Login";
import Auth from "../services/cookie";

export class RoutePath {
  static HOME = "/";
}

function Load() {
  const auth = Auth();
  if (!auth.check()) return <Login />;

  return (
    <Routes>
      <Route path={RoutePath.HOME}>
        <Route index element={<AppLayout></AppLayout>} />
      </Route>
    </Routes>
  );
}

export default Load;
