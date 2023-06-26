import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Outlet } from "react-router-dom";

function AppSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        className="pi pi-bars"
        onClick={handleShow}
        style={{ fontSize: "1rem" }}
      ></i>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <Outlet />
    </>
  );
}

export default AppSidebar;
