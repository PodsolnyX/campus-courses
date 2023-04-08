import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CONST} from "../../../../helpers/constants";

const ListCoursesItem = (props) => {
    return (
        <Card className={"mb-2 card-list"}>
            <Link to={`/courses/${props.data.id}`}>
                <Card.Body>
                    <div className={"d-flex justify-content-between"}>
                        <h5>{props.data.name}</h5>
                        <div className={`fw-bold text-end text-${CONST.COURSE_STATUS_COLOR[props.data.status]}`}>
                            {CONST.COURSE_STATUS[props.data.status]}
                        </div>
                    </div>
                    <div>Учебный год - {props.data.startYear}-{props.data.startYear + 1}</div>
                    <div className={"mb-2"}>Семестр - {CONST.SEMESTER[props.data.semester]}</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест всего
                        - {props.data.maximumStudentsCount}</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест свободно
                        - {props.data.remainingSlotsCount}</div>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default ListCoursesItem;