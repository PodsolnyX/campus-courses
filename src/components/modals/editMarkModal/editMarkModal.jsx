import {Button, Form, Modal} from "react-bootstrap";

const EditMarkModal = (props) => {

    const onInputChange = (e) => {
        props.editValueMarkModal(e.target.value);
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
                <Modal.Title>Изменение отметки для "Финальная аттестация"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className={"mb-3"}>Студент - Тестовый Студент Олегович</div>
                    <Form>
                        <Form.Check
                            type={"radio"}
                            label={"Пройдено"}
                            name="pass"
                            inline
                            value={"pass"}
                            checked={props.value === "pass"}
                            onChange={onInputChange}
                        />
                        <Form.Check
                            type={"radio"}
                            label={"Провалено"}
                            name="fail"
                            inline
                            value={"fail"}
                            checked={props.value === "fail"}
                            onChange={onInputChange}
                        />
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeMarkModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditMarkModal;