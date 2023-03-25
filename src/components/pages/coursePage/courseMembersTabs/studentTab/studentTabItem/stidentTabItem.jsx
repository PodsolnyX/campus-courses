import {Button, ListGroup} from "react-bootstrap";

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
                                <div className={"col-12 mb-2"}>
                                    Промежуточная аттестация - <span className={"badge bg-success"}>успешно пройдено</span>
                                </div>
                                <div className={"col-12"}>
                                    Финальная аттестация - <span className={"badge bg-secondary"}>отметки нет</span>
                                </div>
                            </div>
                            :
                            props.variant === 2 ?
                                <div className={"row"}>
                                    <div className={"d-flex justify-content-end"}>
                                        <Button variant={"outline-primary"} className={"me-2"}>Принять</Button>
                                        <Button variant={"outline-danger"}>Отклонить</Button>
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