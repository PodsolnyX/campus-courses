import {ListGroup} from "react-bootstrap";
import StudentTabItem from "./studentTabItem/stidentTabItem";
import EditMarkModalContainer from "../../modals/editMarkModal/editMarkModalContainer";

const StudentTab = (props) => {
    const isAdmin = props.userRoles["isAdmin"] === true;
    return (
        <div>
            {isAdmin ? <EditMarkModalContainer/> : undefined}
            <ListGroup variant={"flush"}>
                {
                    props.students?.length === 0 ?
                        <div className={"text-secondary mx-auto my-3"}>Заявок студентов нет</div>
                    : props.students?.map(s =>
                        <StudentTabItem data={s} openMarkModal={props.openMarkModal}
                                        key={s.id} isAdmin={isAdmin}/>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default StudentTab;