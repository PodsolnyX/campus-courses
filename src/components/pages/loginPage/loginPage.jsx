import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <Container className={"col"}>
            <Card className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Авторизация</h4>
                    <form className={"mt-3"} id="form-login">
                        <div>
                            <label htmlFor="" className="form-label">Логин</label>
                            <input type="text" className="form-control" id="inputLogin"
                                   name="login"/>
                        </div>
                        <div className="pt-2">
                            <label htmlFor="" className="form-label">Пароль</label>
                            <input type="password" className="form-control"
                                   id="inputPassword" name="password"/>
                        </div>
                        <div className="pt-3">
                            <Button variant={"outline-primary"} id="btn-login">Войти</Button>
                            <Link className="ms-2" to={"/registration"}>
                                <Button variant={"outline-secondary"} id="btn-register">Зарегистироваться</Button>
                            </Link>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;