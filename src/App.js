import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import "primeicons/primeicons.css";
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
        <AppRoute />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
