import {Button, ListGroup} from "react-bootstrap";
import TeacherTabItem from "./teacherTabItem/teacherTabItem";

const TeacherTab = () => {
    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            <Button variant={"outline-primary"} className={"mb-3"}>Добавить преподавателя</Button>
            <ListGroup variant={"flush"}>
                <TeacherTabItem variant={1}/>
                <TeacherTabItem/>
            </ListGroup>
        </div>
    );
}

export default TeacherTab;