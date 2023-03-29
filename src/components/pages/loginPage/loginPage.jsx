import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormEmail, FormPassword} from "../../other/forms/forms";

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
        props.setLoginFormData(e.target.name, e.target.value.trimEnd())
    }

    return (
        <Container className={"col"}>
            <Card className="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Авторизация</h4>
                    <form className={"mt-3"} id="form-login"
                          onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <FormEmail register={register} errors={errors} onChange={onChange}/>
                        </div>
                        <div className="pt-2">
                            <FormPassword register={register} errors={errors} onChange={onChange}/>
                        </div>
                        <div className="pt-3">
                            <Button variant={"outline-primary"} id="btn-login"
                                    type="submit">
                                Войти
                            </Button>
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