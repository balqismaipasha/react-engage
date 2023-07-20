import { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { loginAuth } from "../../../services/LoginServices";
import { cookiesSecure } from "../../../config/variable";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();

  return (
    <Container className="container-login">
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
              <Button variant="primary" size="sm" onClick={(e) => Auth(Email, Password)}> SIGN IN </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Auth(Email, Password) {
  const navigate = useNavigate();

  if (Email !== "" && Password !== "") {
    loginAuth(Email, Password)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (data["error_schema"]["error_code"] === "S001") {
            // set cookies
            this.cookie.set("ACCESS_TOKEN", data["output_schema"]["access_token"], undefined, "/", undefined, cookiesSecure, "Lax");
            this.cookie.set("REFRESH_TOKEN", data["output_schema"]["refresh_token"], undefined, "/", undefined, cookiesSecure, "Lax");
            navigate(0);
            // tampilin toast berhasil
            // pindah navigate ke home
          } else {
          }
        }, 2000);
      });
  }
}

export default Login;
