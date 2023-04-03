import {ListGroup} from "react-bootstrap";
import EditMarkModalContainer from "../../modals/editMarkModal/editMarkModalContainer";
import StudentTabItemContainer from "./studentTabItem/studentTabItemContainer";


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
                        <StudentTabItemContainer data={s} key={s.id}/>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default StudentTab;