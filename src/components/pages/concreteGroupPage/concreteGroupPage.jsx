import {Button, Card, Container, ListGroup} from "react-bootstrap";
import ListCoursesItem from "./listCoursesItem/listCoursesItem";
import EditCourseModalContainer from "../../modals/editCourseModal/editCourseModalContainer";

const ConcreteGroupPage = (props) => {
    return (
        <div>
            <EditCourseModalContainer/>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группа - Компьютерные науки</h3>
                        <Button variant={"outline-primary"} onClick={() => props.openCourseModal(false)}>Создать курс</Button>
                    </div>

                    <Card className={"mt-4"}>
                        <ListGroup variant="flush">
                            <ListCoursesItem/>
                        </ListGroup>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default ConcreteGroupPage;