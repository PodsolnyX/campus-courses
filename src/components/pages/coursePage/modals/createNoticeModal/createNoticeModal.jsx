import {Button, Modal} from "react-bootstrap";
import {FormIsImportantNotice, FormNoticeText} from "../../../../other/forms/forms";
import {toastError} from "../../../../../helpers/toaster";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";

const CreateNoticeModal = (props) => {

    const onChange = (e) => {
        e.target.name === "isImportant" ?
            props.editDataNoticeModal("isImportant", e.target.checked)
            :
            props.editDataNoticeModal(e.target.name, e.target.value);
    }

    const onSave = () => {
        if (props.data.text === "") {
            toastError("Текст уведомления не может быть пустым");
            return;
        }
        props.createNotice();
    }

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeNoticeModal}
            keyboard={true}
            centered
            size={"lg"}
        >
            <Modal.Header closeButton>
                <Modal.Title>Создать уведомление</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props.isLoading ? <LoadSpinner/> :
                        <div>
                            <FormNoticeText onChange={onChange} text={props.data.text}/>
                            <div className={"mt-3"}>
                                <FormIsImportantNotice onChange={onChange} isImportant={props.data.isImportant}/>
                            </div>
                        </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeNoticeModal}>Отмена</Button>
                <Button variant="primary" onClick={onSave} disabled={props.isLoading}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateNoticeModal;