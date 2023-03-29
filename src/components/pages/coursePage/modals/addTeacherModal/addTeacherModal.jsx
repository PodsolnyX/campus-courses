import {Button, Form, Modal} from "react-bootstrap";
import Select from "react-select";

const AddTeacherModal = (props) => {

    const options = [
        { value: '1', label: 'Иванов' },
        { value: '2', label: 'Сидоров' },
        { value: '3', label: 'Арышев' }
    ]

    const onInputChange = (e) => {
        props.editValueTeacherModal(e.target.value);
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
                <label htmlFor="" className="form-label">Выберите преподавателя</label>
                <Select options={options}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeTeacherModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddTeacherModal;