import { Navbar, Nav } from "react-bootstrap"
import "../assets/navbar.css"

const NavbarComponent = () => {
    return(
        <>
        <Navbar className="navbar" >
            <Navbar.Brand className="navbar-brand text-center" href="/"><span className="putonghua">普通话</span>MandarinApp</Navbar.Brand>
            <div className="nav-container">
                <Nav className="mr-auto">
                    <Nav.Link className="navlink text-center" href="/"><span className="nav-text">Home</span></Nav.Link>
                    <Nav.Link className="navlink text-center" href="/chooseYourLevel"><span className="nav-text">Games</span></Nav.Link>
                    <Nav.Link className="navlink text-center" href="/users/me"><span className="nav-text">Account</span></Nav.Link>
                </Nav>
            </div>
            <div className="admin-wrapper">
                    <Nav.Link className="admin-navlink text-center" href="/admin"><span className="nav-text">Admin</span></Nav.Link>
            </div>
        </Navbar>
        </>
    )
}

export default NavbarComponent