import {Button, ListGroup} from "react-bootstrap";
import {CONST} from "../../../../../../helpers/constants";

const StudentTabItem = (props) => {

    const onAccept = () => {
        props.editStudentCourseStatus(props.data.id, "Accepted")
    }

    const onDecline = () => {
        props.openConfirmPopup(() => {
                props.editStudentCourseStatus(props.data.id, "Declined")
            }
        )
    }

    return (
        <ListGroup.Item>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"fw-bold"}>{props.data.name}</div>
                    {!props.isAdmin ? undefined :
                        <div className={"text-secondary"}>Статус - {
                            props.data.status === "Accepted" ?
                                <span className={"text-success"}>принят в группу</span>
                                : props.data.status === "InQueue" ?
                                    <span className={"text-primary"}>в очереди</span>
                                    : <span className={"text-danger"}>отклонен</span>
                        }
                        </div>
                    }
                    <div className={"text-secondary"}>{props.data.email}</div>
                </div>
                {
                    !props.isAdmin ? undefined :
                        <div className={"col my-auto"}>
                            {
                                props.data.status === "Accepted" ?
                                    <div className={"row text-md-end"}>
                                        <div className={"col-12 mb-2"} onClick={props.openMarkModal}
                                             style={{cursor: "pointer"}}>
                                            Промежуточная аттестация -
                                            <span
                                                className={`badge ms-1 bg-${CONST.RESULT_STATUS_COLOR[props.data.midtermResult]}`}>
                                        {CONST.RESULT_STATUS[props.data.midtermResult]}
                                    </span>
                                        </div>
                                        <div className={"col-12"} onClick={props.openMarkModal}
                                             style={{cursor: "pointer"}}>
                                            Финальная аттестация -
                                            <span
                                                className={`badge ms-1 bg-${CONST.RESULT_STATUS_COLOR[props.data.finalResult]}`}>
                                        {CONST.RESULT_STATUS[props.data.finalResult]}
                                    </span>
                                        </div>
                                    </div>
                                    :
                                    props.data.status === "InQueue" ?
                                        <div className={"row"}>
                                            <div className={"d-flex justify-content-end"}>
                                                <Button variant={"outline-primary"} className={"me-2"}
                                                        onClick={onAccept}>
                                                    Принять
                                                </Button>
                                                <Button variant={"outline-danger"}
                                                        onClick={onDecline}>
                                                    Отклонить
                                                </Button>
                                            </div>
                                        </div>
                                        : undefined
                            }
                        </div>
                }
            </div>
        </ListGroup.Item>
    );
}

export default StudentTabItem;