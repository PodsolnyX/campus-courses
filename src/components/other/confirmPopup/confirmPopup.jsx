import {Button, Modal} from "react-bootstrap";

const ConfirmPopup = (props) => {

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeConfirmPopup}
            keyboard={true}
            centered
            size="sm"
        >
            <Modal.Body>
                <div>
                    <div className={"col text-center"}>
                        <label htmlFor="" className={" mb-3 fs-4"}>Вы уверены?</label>
                    </div>
                    <div className={"row justify-content-center"}>
                        <Button variant="secondary" className={"col-5 me-1 button-inline"} onClick={props.closeConfirmPopup}>
                            Отмена</Button>
                        <Button variant="primary" className={"col-5 ms-1 button-inline"} onClick={props.confirmConfirmPopup}>
                            Подтвердить
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ConfirmPopup;