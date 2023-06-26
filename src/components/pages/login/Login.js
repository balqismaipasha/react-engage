import { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { loginAuth } from "../../../services/Login";

function Login() {
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();

  return (
    <Container style={{ padding: "10% 30% 10% 30%" }}>
      <Card style={{ padding: "3% 2% 3% 2%" }}>
        <Card.Body>
          <p
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginBottom: "0",
              color: "navy",
            }}
          >
            Welcome
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            Sign In to Engage System
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="userNameId">
              <label
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "14px",
                  marginTop: "1rem",
                }}
              >
                Username / E-mail
              </label>
              <Form.Control
                ref={(input) => SetEmail(input?.value)}
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
                placeholder="difinite@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordId">
              <label
                style={{ textAlign: "left", width: "100%", fontSize: "14px" }}
              >
                Password
              </label>
              <Form.Control
                ref={(input) => SetPassword(input?.value)}
                onChange={(e) => SetPassword(e.target.value)}
                type="password"
                placeholder="********"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => Auth(Email, Password)}
              >
                SIGN IN
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Auth(Email, Password) {
  if (Email !== "" && Password !== "") {
    loginAuth(Email, Password)
      .then((response) => response.json())
      .then((data) => {
        if (data["error_schema"]["error_code"] === "S001") {
          // set cookies
          // tampilin toast berhasil
          // pindah navigate ke home
        } else {
        }
      });
  }
}

export default Login;
