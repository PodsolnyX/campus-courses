import {Button, Form, Modal} from "react-bootstrap";

const CreateNoticeModal = (props) => {

    const onInputChange = (e) => {
        props.editValueNoticeModal(e.target.value);
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
                <Form>
                    <Form.Control as="textarea" rows={5} value={props.value} onChange={onInputChange}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeNoticeModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateNoticeModal;