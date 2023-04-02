import {Button, Card, ListGroup, Spinner} from "react-bootstrap";
import EditCourseStatusModalContainer from "../modals/editCourseStatusModal/editCourseStatusModalContainer";
import {CONST} from "../../../../helpers/constants";
import LoadSpinner from "../../../other/loadSpinner/loadSpinner";
import {signUpCourse} from "../../../../store/reducers/coursesReducer";


const CourseInfo = (props) => {
    return (
        <div className={"mt-2"}>
            <div className={"fw-bold my-auto"}>Основные данные курса</div>
            <Card className={"mt-1"}>
                {
                    props.isLoading ? <LoadSpinner/> :
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className={"d-flex justify-content-between"}>

                                    <div>
                                        <div className={"fw-bold"}>Статус курса</div>
                                        <div className={`text-${CONST.COURSE_STATUS_COLOR[props.course.status]}`}>
                                            {CONST.COURSE_STATUS[props.course.status]}
                                        </div>
                                    </div>
                                    {
                                        props.userRoles["isAdmin"] === true && props.course.status !== "Finished" ?
                                        <div>
                                            <EditCourseStatusModalContainer/>
                                            <div className={"my-auto"} >
                                                <Button variant={"outline-warning"}
                                                        onClick={() => props.openCourseStatusModal(props.course.status)}
                                                >Изменить статус</Button>
                                            </div>
                                        </div> : undefined
                                    }
                                    {props.userRoles["isAdmin"] === false ?
                                        <Button variant={"outline-success"} onClick={props.signUpCourse}>
                                            Записаться на курс</Button> : undefined
                                    }
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <div className={"fw-bold"}>Учебный год</div>
                                        <div>{props.course.startYear}-{props.course.startYear + 1}</div>
                                    </div>
                                    <div className={"col-6"}>
                                        <div className={"fw-bold"}>Семестр</div>
                                        <div>{CONST.SEMESTER[props.course.semester]}</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <div className={"fw-bold"}>Всего мест</div>
                                        <div>{props.course.maximumStudentsCount}</div>
                                    </div>
                                    <div className={"col-6"}>
                                        <div className={"fw-bold"}>Студентов зачислено</div>
                                        <div>{props.course.studentsEnrolledCount}</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div>
                                    <div className={"fw-bold"}>Заявок на рассмотрении</div>
                                    <div className={"text-success"}>{props.course.studentsInQueueCount}</div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                }
            </Card>
        </div>
    );
}

export default CourseInfo;