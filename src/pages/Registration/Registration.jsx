import { useState } from "react"
import { Form, Button, Alert, Container, Row, Col, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { setCurrentUser } from "../../redux/actions/index.js"
import { useDispatch } from "react-redux"
import "../../assets/navbar.css"
import "../../assets/login&reg.css"

const Registration = () => {
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userRegistration = async () => {
        const userRegInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        };
        try {
        let res = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
            method: "POST",
            body: JSON.stringify(userRegInfo),
            headers: {
            "Content-Type": "application/json",
            }
        });
        if (res.ok) {
            const newUser = await res.json();
            console.log("New user: ", newUser);
            localStorage.setItem("accessToken", newUser.accessToken);
            dispatch(setCurrentUser(newUser.user));
            navigate("/")
        }
        } catch (error) {
        setError(error.response.data.message)
        }
    }


  return (
    <>
    <Container className="login-container">
        <div className="reg-title-wrapper">
        <h2 className="navbar-brand text-center">Register to  <span className="putonghua">普通话</span>MandarinApp!</h2>
        </div>
      <Row>
        <Col col="10" md="6">
            <div className="dragon-wrapper">
            <img className="dragon" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684417100/Untitled_design_munqlw.png" alt="Chinese dragon" />
            </div>
        </Col>

        <Col col="4" md="6">
          <Form onSubmit={(e) => {e.preventDefault(); userRegistration()}}>

          <Form.Group className="mb-3">
              <Form.Label className="login-form-label">First Name</Form.Label>
              <Form.Control className="login-form-ctrl"
                type="firstName"
                placeholder="Enter name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="login-form-label">Last Name</Form.Label>
              <Form.Control className="login-form-ctrl"
                type="lastName"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label className="login-form-label">Email address</Form.Label>
              <Form.Control className="login-form-ctrl"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="login-form-label">Password</Form.Label>
              <Form.Control className="login-form-ctrl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </Form.Group>

            <Button className="login-btn mb-2 w-100" size="lg" type="submit" onClick={userRegistration}>
              Register
            </Button>

            <div className="d-flex justify-content-center my-4">
              <p className="or text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
              <Button className="google-btn mb-4 w-100" size="lg" style={{ backgroundColor: "#8CAE6D" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Sign in with Google
              </Button>
            </a>

          </Form>
        </Col>
      </Row>
      <Row>{error && <Alert variant="danger">{error}</Alert>}</Row>
    </Container>
    </>
  )
}

export default Registration