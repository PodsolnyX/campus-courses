import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const RegistrationPage = () => {
    return (
        <Container className="col">
            <Card className="col-12 col-md-10 col-lg-8 col-xl-7 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Регистрация</h4>
                    <form className={"mt-3"} id="form-register">
                        <div className="col">
                            <label htmlFor="" className="form-label">ФИО</label>
                            <input type="text" className="form-control"
                                   id="inputName" name="name"/>
                        </div>
                        <div className={"row mt-2"}>
                            <div className={"col-12 col-lg-6"}>
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control"
                                       placeholder="name@example.com" id="inputEmail" name="email"
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Дата рождения</label>
                                <input type="date" className="form-control"
                                       id="inputBirthDate" name="birthDate"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Пароль</label>
                                <input type="password" className="form-control"
                                       id="inputPassword" name="password"/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Подтверждение пароля</label>
                                <input type="password" className="form-control"
                                       id="inputPasswordConfirmation"
                                       name="passwordConfirmation"/>
                            </div>
                        </div>
                        <div className={"mt-3"}>
                            <Button variant={"outline-primary"} id="btn-register">Зарегистироваться</Button>
                            <Link className="ms-2" to={"/login"}>
                                <Button variant={"outline-secondary"} id="btn-login">Войти</Button>
                            </Link>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RegistrationPage;