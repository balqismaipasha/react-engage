import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AppSidebar from "./AppSidebar";
import { Avatar } from "primereact/avatar";
// import { AvatarGroup } from 'primereact/avatargroup';   //Optional for grouping

function AppTopbar() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
        <Navbar.Brand href="#">
          Engage Difinite <AppSidebar />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#">
              {" "}
              <Avatar
                image="/logo192.png"
                shape="circle"
                pt={{ image: { className: "w-4rem h-4rem" } }}
              />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>

  );
}

export default AppTopbar;
