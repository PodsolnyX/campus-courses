import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormEmail, FormPassword} from "../../other/forms/forms";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";

const LoginPage = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        defaultValues: {
            email: props.formData.email,
            password: props.formData.password
        }
    });

    const onSubmit = () => {
        props.loginUser();
    }

    const onChange = (e) => {
        props.setLoginFormData(e.target.name, e.target.value.trimEnd());
    }

    return (
        <Container className={"col"}>
            <Card className="col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4 mx-auto mt-5">
                <Card.Body className={"px-5 pt-5 pb-4"}>
                    <h4 className={"text-center mb-5"}>Авторизация</h4>
                    {
                        props.isLoading ? <LoadSpinner/> :
                            <div>
                                <form className={"text-secondary mt-3 mb-5"} id="form-login"
                                      onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label htmlFor="" className="form-label">Email</label>
                                        <FormEmail register={register} errors={errors} onChange={onChange}/>
                                    </div>
                                    <div className="pt-2">
                                        <label htmlFor="" className="form-label">Пароль</label>
                                        <FormPassword register={register} errors={errors} onChange={onChange}/>
                                    </div>
                                    <div className="col pt-3 mt-3">
                                        <Button variant={"primary"} id="btn-login" className={"col-12 button-inline"}
                                                type="submit">
                                            Войти
                                        </Button>
                                    </div>
                                </form>
                                <div className={"col text-center"}>
                                    <Link className="text-secondary" to={"/registration"} style={{fontSize: "13px"}}>
                                        У вас нет аккаунта? <span style={{textDecoration: "underline"}}>Зарегистрируйтесь</span>
                                    </Link>
                                </div>

                            </div>
                    }
                </Card.Body>

            </Card>
        </Container>
    );
}

export default LoginPage;