import {Button, Modal} from "react-bootstrap";
import {useEffect} from "react";
import {FormMainTeacher} from "../../../../other/forms/forms";
import {toastError} from "../../../../../helpers/toaster";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";

const AddTeacherModal = (props) => {

    const defaultTeacher = props.users[props.users.findIndex(obj => obj.value === props.userId)];

    useEffect(() => {
        props.getUsers();
    }, [])

    const onChange = (e) => {
        props.editValueTeacherModal(e.value);
    }

    const onSave = () => {
        if (props.userId === "") {
            toastError("Выберете преподавателя");
            return;
        }
        props.addCourseTeacher()
    }

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeTeacherModal}
            keyboard={true}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление преподавателя на курс</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.isLoading ? <LoadSpinner marginX={2}/> :
                    <div>
                        <label htmlFor="" className="form-label">Выберите преподавателя</label>
                        <FormMainTeacher options={props.users} defaultValue={defaultTeacher} onChange={onChange}/>
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeTeacherModal}>Отмена</Button>
                <Button variant="primary" onClick={onSave} disabled={props.isLoading}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddTeacherModal;