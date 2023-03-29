import {Button, ListGroup} from "react-bootstrap";
import TeacherTabItem from "./teacherTabItem/teacherTabItem";
import AddTeacherModalContainer from "../../modals/addTeacherModal/addTeacherModalContainer";

const TeacherTab = (props) => {
    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            <AddTeacherModalContainer/>
            <Button variant={"outline-primary"} className={"mb-3"} onClick={props.openTeacherModal}>
                Добавить преподавателя
            </Button>
            <ListGroup variant={"flush"}>
                <TeacherTabItem variant={1}/>
                <TeacherTabItem/>
            </ListGroup>
        </div>
    );
}

export default TeacherTab;