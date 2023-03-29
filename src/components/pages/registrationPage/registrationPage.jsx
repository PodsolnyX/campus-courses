import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormBirthDay, FormEmail, FormFIO, FormPassword, FormPasswordConfirm} from "../../other/forms/forms";

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
                            <FormFIO register={register} errors={errors} onChange={onChange}/>
                        </div>
                        <div className={"row mt-2"}>
                            <div className={"col-12 col-lg-6"}>
                                <FormEmail register={register} errors={errors} onChange={onChange}/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <FormBirthDay register={register} errors={errors} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-lg-6">
                                <FormPassword register={register} errors={errors} onChange={onChange}/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <FormPasswordConfirm register={register} errors={errors} onChange={onChange} watch={watch}/>
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