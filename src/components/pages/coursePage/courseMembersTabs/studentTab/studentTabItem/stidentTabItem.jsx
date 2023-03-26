import {Button, ListGroup} from "react-bootstrap";
import {toast} from "react-toastify";
import { Slide, Flip, Bounce } from 'react-toastify';
import {toastSuccess} from "../../../../../../helpers/toaster";

const StudentTabItem = (props) => {
    return (
        <ListGroup.Item>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"fw-bold"}>Тестовый Студент Отличников</div>
                    <div className={"text-secondary"}>Статус - {
                        props.variant === 1 ?
                            <span className={"text-success"}>принят в группу</span>
                            : props.variant === 2 ?
                                <span className={"text-primary"}>в очереди</span>
                            : <span className={"text-danger"}>отклонен</span>
                    }
                    </div>
                    <div className={"text-secondary"}>studota1@gmail.com</div>
                </div>
                <div className={"col my-auto"}>
                    {
                        props.variant === 1 ?
                            <div className={"row"}>
                                <div className={"col-12 mb-2"} onClick={props.openMarkModal} style={{cursor: "pointer"}}>
                                    Промежуточная аттестация - <span className={"badge bg-success"}>пройдено</span>
                                </div>
                                <div className={"col-12"} onClick={props.openMarkModal} style={{cursor: "pointer"}}>
                                    Финальная аттестация - <span className={"badge bg-secondary"}>отметки нет</span>
                                </div>
                            </div>
                            :
                            props.variant === 2 ?
                                <div className={"row"}>
                                    <div className={"d-flex justify-content-end"}>
                                        <Button variant={"outline-primary"} className={"me-2"} onClick={() => toastSuccess("Студент успешно принят")}>
                                            Принять
                                        </Button>
                                        <Button variant={"outline-danger"} onClick={() => toastSuccess("Студент успешно отклонён")}>
                                            Отклонить
                                        </Button>
                                    </div>
                                </div>
                                : undefined
                    }
                </div>
            </div>
        </ListGroup.Item>
    );
}

export default StudentTabItem;