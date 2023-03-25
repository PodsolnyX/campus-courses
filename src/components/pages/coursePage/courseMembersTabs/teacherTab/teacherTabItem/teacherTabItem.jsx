import {ListGroup} from "react-bootstrap";

const TeacherTabItem = (props) => {
    return (
        <ListGroup.Item>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"fw-bold"}>Иванов Препод Олегович
                        {
                            props.variant === 1 ? <span className={"badge bg-success ms-1"}>основной</span>
                                : undefined
                        }
                    </div>
                    <div className={"text-secondary"}>studota1@gmail.com</div>
                </div>
            </div>
        </ListGroup.Item>
    );
}

export default TeacherTabItem;