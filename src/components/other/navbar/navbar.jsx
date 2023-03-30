import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import s from "./navbar.module.css";

const NavBar = (props) => {

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
                        {
                            props.isAuth ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/groups"}>Группы курсов
                                </NavLink> : undefined
                        }
                        {
                            props.isAuth && props.userRoles["IsStudent"] === true ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/courses/my"}>Мои курсы
                                </NavLink> : undefined
                        }
                        {
                            props.isAuth && props.userRoles["IsTeacher"] === true ?
                                <NavLink className={({isActive}) => isActive ? s.activeLink : s.nonActiveLink}
                                         to={"/courses/teaching"}>Преподаваемые курсы
                                </NavLink> : undefined
                        }
                    </Nav>
                    <div className={"row me-2"}>
                        {
                            props.isAuth ?
                                <div>
                                    <Link className={"col text-white me-4"} to={"/profile"}>{props.userData.email}</Link>
                                    <Link className={"col text-white"} onClick={props.logoutUser}>Выйти</Link>
                                </div>
                                :
                                <Link className={"col text-white"} to={"/login"}>Войти</Link>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;