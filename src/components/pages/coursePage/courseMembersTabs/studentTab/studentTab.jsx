import {ListGroup} from "react-bootstrap";
import EditMarkModalContainer from "../../modals/editMarkModal/editMarkModalContainer";
import StudentTabItemContainer from "./studentTabItem/studentTabItemContainer";
import {isAdmin, isCourseTeacher} from "../../../../../helpers/roleDeterminant";

const StudentTab = (props) => {

    const sort = (a, b) => {
        if (a.email === props.userEmail) return -1;
        if (a.status === "Accepted" && b.status === "InQueue") return -1;
        if (a.status === "Accepted" && b.status === "Declined") return -1;
        if (a.status === "InQueue" && b.status === "Declined") return -1;
        return 1;
    }

    const isCanEdit = isAdmin(props.userRoles) || isCourseTeacher(props.userEmail, props.course.teachers);
    const student = props.course?.students ? [...props.course.students] : [];
    student.sort(sort);

    return (
        <div>
            {isCanEdit ? <EditMarkModalContainer/> : undefined}
            <ListGroup variant={"flush"}>
                {
                    student.length === 0 ?
                        <div className={"text-secondary mx-auto my-3"}>Заявок студентов нет</div>
                    : student.map(s =>
                        <StudentTabItemContainer data={s} key={s.id} isCanEdit={isCanEdit}
                                                 isCanView={props.userEmail === s.email}
                        />
                    )
                }
            </ListGroup>
        </div>
    );
}

export default StudentTab;