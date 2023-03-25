import {ListGroup} from "react-bootstrap";
import StudentTabItem from "./studentTabItem/stidentTabItem";

const StudentTab = () => {
    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            <ListGroup variant={"flush"}>
                <StudentTabItem variant={1}/>
                <StudentTabItem variant={2}/>
                <StudentTabItem variant={3}/>
            </ListGroup>
        </div>
    );
}

export default StudentTab;