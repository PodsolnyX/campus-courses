import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormBirthDay, FormEmail, FormFIO, FormPassword, FormPasswordConfirm} from "../../other/forms/forms";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";

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
                <Card.Body className={"px-5 pt-5 pb-4"}>
                    <h4 className={"text-center mb-5"}>Регистрация</h4>
                    {
                        props.isLoading ? <LoadSpinner/> :
                            <div>
                                <form className={"text-secondary mt-3 mb-5"} id="form-register"
                                      onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="col">
                                        <label htmlFor="" className="form-label">ФИО</label>
                                        <FormFIO register={register} errors={errors} onChange={onChange}/>
                                    </div>
                                    <div className={"row mt-2"}>
                                        <div className={"col-12 col-lg-6"}>
                                            <label htmlFor="" className="form-label">Email</label>
                                            <FormEmail register={register} errors={errors} onChange={onChange}/>
                                        </div>
                                        <div className="col-12 col-lg-6 mt-2 mt-lg-0">
                                            <label htmlFor="" className="form-label">Дата рождения</label>
                                            <FormBirthDay register={register} errors={errors} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12 col-lg-6">
                                            <label htmlFor="" className="form-label">Пароль</label>
                                            <FormPassword register={register} errors={errors} onChange={onChange}/>
                                        </div>
                                        <div className="col-12 col-lg-6 mt-2 mt-lg-0">
                                            <label htmlFor="" className="form-label">Подтверждение пароля</label>
                                            <FormPasswordConfirm register={register} errors={errors} onChange={onChange}
                                                                 watch={watch}/>
                                        </div>
                                    </div>
                                    <div className={"mt-4 col"}>
                                        <Button variant={"primary"} id="btn-register" className={"col-12 button-inline"}
                                                type="submit">Зарегистироваться</Button>
                                    </div>
                                </form>
                                <div className={"col text-center"}>
                                    <Link className="text-secondary" to={"/login"} style={{fontSize: "13px"}}>
                                        Уже есть аккаунт? <span style={{textDecoration: "underline"}}>Войдите</span>
                                    </Link>
                                </div>
                            </div>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RegistrationPage;