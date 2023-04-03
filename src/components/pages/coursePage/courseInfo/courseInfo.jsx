import {Button, Card, ListGroup} from "react-bootstrap";
import EditCourseStatusModalContainer from "../modals/editCourseStatusModal/editCourseStatusModalContainer";
import {CONST} from "../../../../helpers/constants";
import LoadSpinner from "../../../other/loadSpinner/loadSpinner";
import {isAdmin, isCourseStudent, isCourseTeacher} from "../../../../helpers/roleDeterminant";


const CourseInfo = (props) => {

    const isTeacher = isCourseTeacher(props.userEmail, props.course.teachers)
    const isCanEdit = isAdmin(props.userRoles) || isTeacher;

    return (
        <div className={"mt-2"}>
            {isCanEdit && props.course.status !== "Finished" ? <EditCourseStatusModalContainer/> : undefined}
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
                                    <div className={"d-flex"}>
                                        {
                                            isCanEdit ?
                                                <Button variant={"outline-warning"}
                                                        onClick={() => props.openCourseStatusModal(props.course.status)}
                                                >Изменить статус</Button>
                                                : undefined
                                        }
                                        {!isTeacher && !isCourseStudent(props.course.id, props.userCourses)
                                        && props.course.status === "OpenForAssigning" ?
                                            <Button variant={"outline-success"} onClick={props.signUpCourse}
                                                    className={"ms-2"}
                                            >
                                                Записаться на курс</Button> : undefined
                                        }
                                    </div>
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