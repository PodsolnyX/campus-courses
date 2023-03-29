import {ListGroup} from "react-bootstrap";
import StudentTabItem from "./studentTabItem/stidentTabItem";
import EditMarkModalContainer from "../../modals/editMarkModal/editMarkModalContainer";

const StudentTab = (props) => {
    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            <EditMarkModalContainer/>
            <ListGroup variant={"flush"}>
                <StudentTabItem variant={1} openMarkModal={props.openMarkModal}/>
                <StudentTabItem variant={2} openMarkModal={props.openMarkModal}/>
                <StudentTabItem variant={3} openMarkModal={props.openMarkModal}/>
            </ListGroup>
        </div>
    );
}

export default StudentTab;