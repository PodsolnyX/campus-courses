import {Button, Card, ListGroup} from "react-bootstrap";
import EditCourseStatusModalContainer from "../modals/editCourseStatusModal/editCourseStatusModalContainer";


const CourseInfo = (props) => {
    return (
        <div className={"mt-2"}>
            <div className={"fw-bold my-auto"}>Основные данные курса</div>
            <Card className={"mt-1"}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className={"d-flex justify-content-between"}>
                            <EditCourseStatusModalContainer/>
                            <div>
                                <div className={"fw-bold"}>Статус курса</div>
                                <div className={"text-success"}>Открыт для записи</div>
                            </div>
                            <div className={"my-auto"} onClick={props.openCourseStatusModal}>
                                <Button variant={"outline-warning"}>Изменить статус</Button>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"fw-bold"}>Учебный год</div>
                                <div>2022-2023</div>
                            </div>
                            <div className={"col-6"}>
                                <div className={"fw-bold"}>Семестр</div>
                                <div>Осенний</div>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"fw-bold"}>Всего мест</div>
                                <div>100</div>
                            </div>
                            <div className={"col-6"}>
                                <div className={"fw-bold"}>Студентов зачислено</div>
                                <div>5</div>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <div className={"fw-bold"}>Заявок на рассмотрении</div>
                            <div className={"text-success"}>30</div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default CourseInfo;