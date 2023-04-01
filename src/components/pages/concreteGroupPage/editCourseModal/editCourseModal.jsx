import {Button, Modal} from "react-bootstrap";
import HtmlEditor from "../../../other/htmlEditor/htmlEditor";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {
    FormGroupName,
    FormMainTeacher,
    FormMaxStudentsCount,
    FormSemester,
    FormStartYear
} from "../../../other/forms/forms";
import {toastError} from "../../../../helpers/toaster";
import LoadSpinner from "../../../other/loadSpinner/loadSpinner";

const EditCourseModal = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onBlur"
    });

    const defaultTeacher = props.users[props.users.findIndex(obj => obj.value === props.currentCourse.mainTeacherId)];

    useEffect(() => {
        props.getUsers();
    }, [])

    useEffect(() => {
        if (props.currentCourse) {
            reset({
                groupName: props.currentCourse.groupName,
                startYear: props.currentCourse.startYear,
                maxStudentsCount: props.currentCourse.maxStudentsCount
            });
        }
    }, [props.currentCourse]);

    const onChange = (e) => {
        if (e.target) {
            props.setCourseModalData(e.target.name, e.target.value);
        } else {
            props.setCourseModalData("mainTeacherId", e.value);
        }
    }
    const onSubmit = () => {
        if (props.currentCourse.requirements === "" ||
            props.currentCourse.annotations === "" ||
            props.currentCourse.mainTeacherId === ""
        ) {
            toastError("Вы не заполнили все поля");
            return;
        }
        props.createCourse(props.router.params.id);
    }
    const onChangeRequirements = (e) => {
        props.setCourseModalData("requirements", e);
    }
    const onChangeAnnotations = (e) => {
        props.setCourseModalData("annotations", e);
    }

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeCourseModal}
            keyboard={true}
            centered
            size="lg"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание курса</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.isLoading ? <LoadSpinner/> :
                        <div>
                            <div className="">
                                <label htmlFor="" className="form-label">Название курса</label>
                                <FormGroupName register={register} errors={errors} onChange={onChange}/>
                            </div>
                            <div className="pt-2 row">
                                <div className={"col-12 col-md-6"}>
                                    <label htmlFor="" className="form-label">Год начала курса</label>
                                    <FormStartYear register={register} errors={errors} onChange={onChange}/>
                                </div>
                                <div className={"col-12 col-md-6 pt-2 pt-md-0"}>
                                    <label htmlFor="" className="form-label">Общее количество мест</label>
                                    <FormMaxStudentsCount register={register} errors={errors} onChange={onChange}/>
                                </div>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Семестр</label>
                                <FormSemester onChange={onChange} semester={props.currentCourse.semester}/>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Основной преподаватель курса</label>
                                <FormMainTeacher options={props.users} register={register} errors={errors}
                                                 onChange={onChange} defaultValue={defaultTeacher}/>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Требования</label>
                                <HtmlEditor value={props.currentCourse.requirements} onChange={onChangeRequirements}/>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Аннотация</label>
                                <HtmlEditor value={props.currentCourse.annotations} onChange={onChangeAnnotations}/>
                            </div>
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeCourseModal}>Отмена</Button>
                    <Button variant="primary" type={"submit"} disabled={props.isLoading}>Сохранить</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default EditCourseModal;