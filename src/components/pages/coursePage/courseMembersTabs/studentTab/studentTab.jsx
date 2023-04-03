import {ListGroup} from "react-bootstrap";
import EditMarkModalContainer from "../../modals/editMarkModal/editMarkModalContainer";
import StudentTabItemContainer from "./studentTabItem/studentTabItemContainer";
import {isAdmin, isCourseTeacher} from "../../../../../helpers/roleDeterminant";


const StudentTab = (props) => {

    const isCanEdit = isAdmin(props.userRoles) || isCourseTeacher(props.userEmail, props.course.teachers);

    return (
        <div>
            {isCanEdit ? <EditMarkModalContainer/> : undefined}
            <ListGroup variant={"flush"}>
                {
                    props.course.students?.length === 0 ?
                        <div className={"text-secondary mx-auto my-3"}>Заявок студентов нет</div>
                    : props.course.students?.map(s =>
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