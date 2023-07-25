import { useRef, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { loginAuth } from "../../../services/LoginServices";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Cookies } from "react-cookie";
import "./Login.css";
import { Toast } from 'primereact/toast';

const cookies = new Cookies();

function Login() {
  const navigate = useNavigate();
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const toast = useRef(null);

 async function Auth2() {
    // e.preventDefault();
    if (Email !== "" && Password !== "") {
      await loginAuth(Email, Password)
        .then((response) => response.json())
        .then((data) => {
          // setTimeout(() => {
            if (data["error_schema"]["error_code"] === "S001") {
  
              // set cookies
              let date = new Date();
              date.setDate(data["output_schema"]["expires_in"]);
              cookies.set("Access Token", data["output_schema"]["access_token"], { path: "/", expires: date});
              date.setDate(data["output_schema"]["refresh_expires_in"]);
              cookies.set("Refresh Token", data["output_schema"]["refresh_token"], { path: "/", expires: date });
              
              // setauthenticated(true)
              localStorage.setItem("authenticated", true);
  
              // tampilin toast berhasil
              toast.current.show({severity: 'success', summary: 'Success Message', detail: data['error_schema']['error_message']['indonesian'], closable: true, life: 3000});
 
              // pindah navigate ke home
              navigate("/home");
  
            } else {
            }
          // }, 2000);
        });
    }
  }

  return (
    <Container className="container-login">
      <Toast ref={toast} />
      <Row>
        <Col xs={6} md={2}>
          <Image src="login_logobca.png" rounded className="logo" />
        </Col>
        <Col sm={12}>
          <Card className="card-header">
            <Card.Body>
              <p className="lableLarger"> Welcome </p>
              <p className="lable"> Sign In to Engage System </p>
              <Form>
                <Form.Group className="mb-3" controlId="userNameId">
                  <label className="lable" > Username / E-mail </label>
                  <Form.Control ref={(input) => SetEmail(input?.value)} onChange={(e) => SetEmail(e.target.value)} type="email" placeholder="difinite@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordId">
                  <label className="lable"> Password </label>
                  <Form.Control ref={(input) => SetPassword(input?.value)} onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="********" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="sm" onClick={(e) => Auth2()}> SIGN IN </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

// function Auth(Email, Password, authenticated, navigate, setauthenticated) {
//   if (Email !== "" && Password !== "") {
//     loginAuth(Email, Password)
//       .then((response) => response.json())
//       .then((data) => {
//         setTimeout(() => {
//           if (data["error_schema"]["error_code"] === "S001") {

//             // set cookies
//             let date = new Date();
//             date.setDate(data["output_schema"]["expires_in"]);
//             cookies.set("Access Token", data["output_schema"]["access_token"], { path: "/", expires: date});
//             date.setDate(data["output_schema"]["refresh_expires_in"]);
//             cookies.set("Refresh Token", data["output_schema"]["refresh_token"], { path: "/", expires: date });
            
//             setauthenticated(true)
//             localStorage.setItem("authenticated", true);

//             // tampilin toast berhasil
//             // pindah navigate ke home
//             navigate("/home");

//           } else {
//           }
//         }, 2000);
//       });
//   }
// }

export default Login;
