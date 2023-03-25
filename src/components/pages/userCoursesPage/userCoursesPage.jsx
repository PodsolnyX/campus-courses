import {Card, Container, ListGroup} from "react-bootstrap";
import ListCoursesItem from "../concreteGroupPage/listCoursesItem/listCoursesItem";

const UserCoursesPage = (props) => {
    return (
        <div>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Мои кампусные курсы</h3>
                    </div>
                    <Card className={"mt-4"}>
                        <ListGroup variant="flush">
                            <ListCoursesItem/>
                            <ListCoursesItem/>
                        </ListGroup>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default UserCoursesPage;