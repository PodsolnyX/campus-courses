import {Button, Modal} from "react-bootstrap";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";

const DeletePopup = (props) => {

    return (
        <Modal
            show={props.isShowPopup}
            onHide={props.closeDeletePopup}
            keyboard={true}
            centered
            size="sm"
        >
            <Modal.Body>
                {
                    props.isLoading ? <LoadSpinner marginX={4}/> :
                        <div className={"row"}>
                            <label htmlFor="" className={"text-center mb-3 fs-4"}>Вы уверены?</label>
                            <div className={"d-flex justify-content-center"}>
                                <Button variant="secondary" className={"mx-1"} onClick={props.closeDeletePopup}>
                                    Отмена</Button>
                                <Button variant="primary" className={"mx-1"} onClick={props.deleteGroup}>
                                    Удалить
                                </Button>
                            </div>
                        </div>
                }
            </Modal.Body>
        </Modal>
    );
}

export default DeletePopup;