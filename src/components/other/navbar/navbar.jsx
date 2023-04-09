import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import s from "./navbar.module.css";
import {isStudent, isTeacher} from "../../../helpers/roleDeterminant";

const NavBar = (props) => {

    return (
        <Navbar bg="light" variant={"light"} expand="lg" sticky="top"
                style={{minHeight: "90px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)"}}>
            <Container>
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
                        {
                            props.isAuth ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/groups"}>Группы курсов
                                </NavLink> : undefined
                        }
                        {
                            props.isAuth && isStudent(props.userRoles) ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/courses/my"}>Мои курсы
                                </NavLink> : undefined
                        }
                        {
                            props.isAuth && isTeacher(props.userRoles) ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/courses/teaching"}>Преподаваемые курсы
                                </NavLink> : undefined
                        }
                    </Nav>
                    <div className={"row me-2"}>
                        {
                            props.isAuth ?
                                <div>
                                    <Link className={`col me-4 ${s.navBarLink}`} to={"/profile"}>{props.userData.email}</Link>
                                    <Link className={`col`} onClick={props.logoutUser}>
                                        <Button variant={"outline-danger"}>
                                            Выйти
                                        </Button>
                                    </Link>
                                </div>
                                :
                                <Link to={"/login"}>
                                    <Button variant={"outline-primary"}>
                                        Войти
                                    </Button>
                                </Link>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;