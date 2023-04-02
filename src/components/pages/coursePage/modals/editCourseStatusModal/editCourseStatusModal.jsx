import {Button, Modal} from "react-bootstrap";
import {FormCourseStatus} from "../../../../other/forms/forms";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";
import {toastError} from "../../../../../helpers/toaster";

const EditCourseStatusModal = (props) => {

    const onChange = (e) => {
        props.editValueCourseStatusModal(e.target.value);
    }

    const onSave = () => {
        if (props.status === "") {
            toastError("Выберете статус");
            return;
        }
        props.setCourseStatus();
    }

    console.log(props.curStatus)

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeCourseStatusModal}
            keyboard={true}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменение статуса курса</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { props.isLoading ? <LoadSpinner/> :
                <FormCourseStatus status={props.status} curStatus={props.curStatus} onChange={onChange}/>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeCourseStatusModal}>Отмена</Button>
                <Button variant="primary" disabled={props.isLoading} onClick={onSave}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditCourseStatusModal;