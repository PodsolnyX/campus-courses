import {Button, Modal} from "react-bootstrap";

const EditGroupModal = (props) => {

    const onInputChange = (e) => {
        props.editValueGroupsModal(e.target.value);
    }

    return (
        <Modal
            show={props.isShowModal}
            onHide={props.closeGroupsModal}
            keyboard={true}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {
                        props.isEdit ? "Редактирование группы" : "Создание группы"
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label htmlFor="" className="form-label">Название группы</label>
                    <input type="text" className="form-control" id="inputGroup"
                           onChange={onInputChange}
                           name="groupName" value={props.currentGroup.name}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeGroupsModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditGroupModal;