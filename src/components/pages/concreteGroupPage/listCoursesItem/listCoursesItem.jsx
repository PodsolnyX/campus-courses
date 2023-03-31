import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const SEMESTER = {
    "Spring": "Весенний",
    "Autumn": "Осенний"
}

const COURSE_STATUS = {
    "Created": "Создан",
    "OpenForAssigning": "Открыт для записи",
    "Started": "В процессе обучения",
    "Finished": "Закрыт"
}

const COURSE_STATUS_COLOR = {
    "Created": "secondary",
    "OpenForAssigning": "success",
    "Started": "primary",
    "Finished": "danger"
}


const ListCoursesItem = (props) => {
    return (
        <ListGroup.Item>
            <Link to={"/courses/222"}>
                <div>
                    <div className={"d-flex justify-content-between"}>
                        <h5>{props.data.name}</h5>
                        <div className={`fw-bold text-end text-${COURSE_STATUS_COLOR[props.data.status]}`}>
                            {COURSE_STATUS[props.data.status]}
                        </div>
                    </div>
                    <div>Учебный год - {props.data.startYear}-{props.data.startYear + 1}</div>
                    <div className={"mb-2"}>Семестр - {SEMESTER[props.data.semester]}</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест всего
                        - {props.data.maximumStudentsCount}</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест свободно
                        - {props.data.remainingSlotsCount}</div>
                </div>
            </Link>
        </ListGroup.Item>
    );
}

export default ListCoursesItem;