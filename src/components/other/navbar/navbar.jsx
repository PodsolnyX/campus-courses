import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import s from "./navbar.module.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant={"dark"} expand="md" style={{minHeight: "70px"}}>
            <Container fluid>
                <Link to={"/"}>
                    <Navbar.Brand>Кампусные курсы</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                            to={"/groups"}>Группы курсов</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                            to={"/courses/my"}>Мои курсы</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                            to={"/courses/teaching"}>Преподаваемые курсы</NavLink>
                    </Nav>
                    <div className={"row me-2"}>
                        {/*<Link className={"col text-white"} to={"/registration"}>Регистрация</Link>*/}
                        <Link className={"col text-white"} to={"/profile"}>user@mail.ru</Link>
                        <Link className={"col text-white"} to={"/login"}>Войти</Link>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;