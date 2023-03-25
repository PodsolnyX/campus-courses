import {Card, Container, ListGroup} from "react-bootstrap";
import ListCoursesItem from "../concreteGroupPage/listCoursesItem/listCoursesItem";

const TaughtCoursesPage = (props) => {
    return (
        <div>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Преподаваемые кампусные курсы</h3>
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

export default TaughtCoursesPage;