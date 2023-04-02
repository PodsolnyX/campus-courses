import {Button, ListGroup} from "react-bootstrap";
import TeacherTabItem from "./teacherTabItem/teacherTabItem";
import AddTeacherModalContainer from "../../modals/addTeacherModal/addTeacherModalContainer";

const TeacherTab = (props) => {
    return (
        <div>
            {
                props.userRoles["isAdmin"] === true ?
                    <div>
                        <AddTeacherModalContainer/>
                        <Button variant={"outline-primary"} className={"mb-3"} onClick={props.openTeacherModal}>
                            Добавить преподавателя
                        </Button>
                    </div> : undefined
            }
            <ListGroup variant={"flush"}>
                {
                    props.teachers?.map(t =>
                        <TeacherTabItem data={t} key={t.email}/>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default TeacherTab;