import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import "primeicons/primeicons.css";
// import appRoute from './router/Route';
import { lazy, Suspense } from "react";

const AppRoute = lazy(() => import("./router/Route"));

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Suspense
        fallback={
          <div className="content">
            <div className="position-content">
              <Spinner animation="border" />
            </div>
          </div>
        }
      >
        <Routes>
          <AppRoute />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
