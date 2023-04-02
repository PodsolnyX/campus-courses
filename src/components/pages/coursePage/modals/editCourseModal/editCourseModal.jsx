import {toastError} from "../../../../../helpers/toaster";
import {Button, Modal} from "react-bootstrap";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";
import HtmlEditor from "../../../../other/htmlEditor/htmlEditor";

const EditCourseModal = (props) => {

    const onSave = () => {
        if (props.data.requirements === "" ||
            props.data.annotations === ""
        ) {
            toastError("Вы не заполнили все поля");
            return;
        }
        props.editCourse();
    }
    const onChangeRequirements = (e) => {
        props.setEditCourseModalData("requirements", e);
    }
    const onChangeAnnotations = (e) => {
        props.setEditCourseModalData("annotations", e);
    }

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeEditCourseModal}
            keyboard={true}
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Редактирование курса</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props.isLoading ? <LoadSpinner/> :
                        <div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Требования</label>
                                <HtmlEditor value={props.data.requirements} onChange={onChangeRequirements}/>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="" className="form-label">Аннотация</label>
                                <HtmlEditor value={props.data.annotations} onChange={onChangeAnnotations}/>
                            </div>
                        </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeEditCourseModal}>Отмена</Button>
                <Button variant="primary" type={"submit"} disabled={props.isLoading} onClick={onSave}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditCourseModal;