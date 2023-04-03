import {Button, Modal} from "react-bootstrap";
import {FormMark} from "../../../../other/forms/forms";
import {toastError} from "../../../../../helpers/toaster";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";

const EditMarkModal = (props) => {

    const onChange = (e) => {
        props.editValueMarkModal(e.target.value);
    }

    const onSave = () => {
        if (props.data.mark === "") {
            toastError("Выберете оценку");
            return;
        }
        props.editStudentMark();
    }

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeMarkModal}
            keyboard={true}
            centered
            size={"lg"}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Изменение отметки для { props.data.markType === "Midterm"
                    ? `"Промежуточная аттестация"`
                    : `"Финальная аттестация"`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { props.isLoading ? <LoadSpinner marginX={4}/> :
                <div>
                    <div className={"mb-3"}>Студент - {props.data.name}</div>
                    <FormMark onChange={onChange} mark={props.data.mark}/>
                </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeMarkModal}>Отмена</Button>
                <Button variant="primary" onClick={onSave} disabled={props.isLoading}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditMarkModal;