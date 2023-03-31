import {Button, Card, Container, Spinner} from "react-bootstrap";
import {useEffect} from "react";
import {FormBirthDay, FormFIO} from "../../other/forms/forms";
import {useForm} from "react-hook-form";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";

const ProfilePage = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        props.getUserProfileForPage();
    },[]);

    useEffect(() => {
        if (props.formData) {
            reset({
                name: props.formData.fullName,
                birthDate: props.formData.birthDate?.slice(0, 10)
            });
        }
    }, [props.formData]);

    const onChange = (e) => {
        const key = e.target.name === "name" ? "fullName" : e.target.name;
        props.setProfileFormData(key, e.target.value);
    }

    const onSave = () => {
        if(Object.entries(errors).length === 0)
            props.saveProfileData();
    }

    return (
        <Container className={"col"}>
            <Card className="col-12 col-md-10 col-lg-8 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Профиль</h4>
                    {
                        props.isLoading
                            ?
                            <LoadSpinner/>
                            :
                            <form className={"mt-5 ms-3 me-3"}
                                  onSubmit={handleSubmit(onSave)}
                            >
                                <div className="row">
                                    <label htmlFor="" className="col-4 form-label">ФИО</label>
                                    <div className={"col"}>
                                        <FormFIO register={register} errors={errors} onChange={onChange} disabled={!props.isEdit}/>
                                    </div>
                                </div>
                                <div className={"row mt-3"}>
                                    <label htmlFor="" className="col-4 form-label">Email</label>
                                    <label className="col">{props.formData.email}</label>
                                </div>
                                <div className="row mt-3">
                                    <label htmlFor="" className="col-4 form-label">Дата рождения</label>
                                    <div className={"col"}>
                                        <FormBirthDay register={register} errors={errors} onChange={onChange} disabled={!props.isEdit}/>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-end">
                                    {
                                        props.isEdit ?
                                            <Button variant={"outline-primary"} onClick={onSave}>
                                                Сохранить
                                            </Button>
                                            :
                                            <Button variant={"warning"} onClick={props.setIsEditProfilePage}>
                                                Изменить
                                            </Button>
                                    }
                                </div>
                            </form>
                    }

                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProfilePage;