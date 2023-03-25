import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


const ListCoursesItem = () => {
    return (
        <ListGroup.Item className={"border-start border-success border-5"}>
            <Link to={"/courses/222"}>
                <div>
                    <div className={"d-flex justify-content-between"}>
                        <h5>BigData: программные методы с Python3</h5>
                        <div className={"fw-bold text-success"}>Открыт для записи</div>
                    </div>
                    <div>Учебный год - 2022-2023</div>
                    <div className={"mb-2"}>Семестр - Осенний</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест всего - 100</div>
                    <div className={"text-secondary"} style={{fontSize: "14px"}}>Мест свободно - 95</div>
                </div>
            </Link>
        </ListGroup.Item>
    );
}

export default ListCoursesItem;