import {ListGroup} from "react-bootstrap";

const TeacherTabItem = (props) => {
    return (
        <ListGroup.Item>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"fw-bold"}>{props.data.name}
                        {
                            props.data.isMain ? <span className={"badge bg-success ms-1"}>основной</span>
                                : undefined
                        }
                    </div>
                    <div className={"text-secondary"}>{props.data.email}</div>
                </div>
            </div>
        </ListGroup.Item>
    );
}

export default TeacherTabItem;