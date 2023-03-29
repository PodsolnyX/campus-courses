import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const RegistrationPage = (props) => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onBlur",
        defaultValues: {
            name: props.formData.name,
            email: props.formData.email,
            birthDate: props.formData.birthDate,
            password: props.formData.password,
            passwordConfirmation: props.formData.passwordConfirmation
        }
    });

    const onSubmit = () => {
        props.registerUser();
    }

    const onChange = (e) => {
        props.setRegistrationFormData(e.target.name, e.target.value.trimEnd())
    }

    return (
        <Container className="col">
            <Card className="col-12 col-md-10 col-lg-8 col-xl-7 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Регистрация</h4>
                    <form className={"mt-3"} id="form-register"
                          onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="col">
                            <label htmlFor="" className="form-label">ФИО</label>
                            <input {...register("name", {
                                required: "Обязательное поле",
                                pattern: {
                                    value: /^([А-ЯA-Z][а-яa-zА-ЯA-Z\-]+\s?){2,}\s*$/,
                                    message: "Неправильный формат ФИО"
                                }
                            })}
                                   className={`form-control ${ errors?.name?.message ? "border-danger" : undefined}`}
                                   onChange={onChange} placeholder={"Иванов Иван Иванович"} type="text"
                                   id="inputName" name="name"/>
                            <div className={"text-danger"}>{errors?.name?.message}</div>
                        </div>

                        <div className={"row mt-2"}>
                            <div className={"col-12 col-lg-6"}>
                                <label htmlFor="" className="form-label">Email</label>
                                <input {...register("email", {
                                    required: "Обязательное поле",
                                    pattern: {
                                        value: /^[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}$/,
                                        message: "Неправильный формат email-адреса"
                                    }
                                })}
                                       className={`form-control ${ errors?.email?.message ? "border-danger" : undefined}`}
                                       onChange={onChange} type="email"
                                       placeholder="name@example.com" id="inputEmail" name="email"
                                       aria-describedby="email"/>
                                <div className={"text-danger"}>{errors?.email?.message}</div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Дата рождения</label>
                                <input {...register("birthDate", {
                                    required: "Обязательное поле",
                                    max: {
                                        value: new Date().toISOString().slice(0, 10),
                                        message: "Вы физически не могли родиться"
                                    },
                                    min: {
                                        value: "1923-01-01",
                                        message: "Вы слишком стары для этого"
                                    }
                                })}
                                       className={`form-control ${ errors?.birthDate?.message ? "border-danger" : undefined}`}
                                       id="inputBirthDate" name="birthDate"
                                       onChange={onChange} type="date"
                                       max={new Date().toISOString().slice(0, 10)} />
                                <div className={"text-danger"}>{errors?.birthDate?.message}</div>
                            </div>
                        </div>
                        <div className="row mt-2">

                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Пароль</label>
                                <input {...register("password", {
                                    required: "Обязательное поле",
                                    minLength: {
                                        value: 6,
                                        message: "Длина пароля должна быть более 6 символов"
                                    }
                                })}
                                       className={`form-control ${ errors?.password?.message ? "border-danger" : undefined}`}
                                       onChange={onChange} type="password"
                                       id="inputPassword" name="password"/>
                                <div className={"text-danger"}>{errors?.password?.message}</div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <label htmlFor="" className="form-label">Подтверждение пароля</label>
                                <input {...register("passwordConfirmation", {
                                    required: "Обязательное поле",
                                    validate: (val) => {
                                        if (watch("password") !== val) {
                                            return "Пароли не совпадают";
                                        }
                                    }
                                })}
                                       className={`form-control ${ errors?.passwordConfirmation?.message ? "border-danger" : undefined}`}
                                       onChange={onChange} type="password"
                                       id="inputPasswordConfirmation"
                                       name="passwordConfirmation"/>
                                <div className={"text-danger"}>{errors?.passwordConfirmation?.message}</div>
                            </div>
                        </div>
                        <div className={"mt-3"}>
                            <Button variant={"outline-primary"} id="btn-register"
                                    type="submit">Зарегистироваться</Button>
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