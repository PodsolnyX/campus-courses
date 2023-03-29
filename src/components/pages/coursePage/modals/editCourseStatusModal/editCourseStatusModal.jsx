import {Button, Form, Modal} from "react-bootstrap";

const EditCourseStatusModal = (props) => {

    const onInputChange = (e) => {
        props.editValueCourseStatusModal(e.target.value);
    }

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
                <div>
                    <Form>
                        <Form.Check
                            type={"radio"}
                            label={"Открыт для записи"}
                            name="open"
                            inline
                            value={"open"}
                            checked={props.value === "open"}
                            onChange={onInputChange}
                        />
                        <Form.Check
                            type={"radio"}
                            label={"В процессе"}
                            name="process"
                            inline
                            value={"process"}
                            checked={props.value === "process"}
                            onChange={onInputChange}
                        />
                        <Form.Check
                            type={"radio"}
                            label={"Завершен"}
                            name="done"
                            inline
                            value={"done"}
                            checked={props.value === "done"}
                            onChange={onInputChange}
                        />
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeCourseStatusModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditCourseStatusModal;