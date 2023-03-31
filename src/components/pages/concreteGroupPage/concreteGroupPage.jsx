import {Button, Card, Container, ListGroup, Spinner} from "react-bootstrap";
import ListCoursesItem from "./listCoursesItem/listCoursesItem";
import EditCourseModalContainer from "../coursePage/modals/editCourseModal/editCourseModalContainer";
import {useEffect} from "react";

const ConcreteGroupPage = (props) => {

    useEffect(() => {
        props.getGroupCourses(props.router.params.id);
    }, []);

    return (
        <div>
            <EditCourseModalContainer/>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группа - {props.router.searchParams.get("name")
                            ? props.router.searchParams.get("name")
                            : "Без названия"
                        }</h3>
                        <Button variant={"outline-primary"} onClick={() => props.openCourseModal(false)}>Создать
                            курс</Button>
                    </div>
                    <Card className={"mt-4"}>
                        {
                            props.isLoading ?
                                <div className={"d-flex mt-5 mb-5"}>
                                    <Spinner className={"mx-auto"} animation="border"/>
                                </div>
                                :
                                <ListGroup variant="flush">
                                    {
                                        props.groupCourses.map(course =>
                                            <ListCoursesItem data={course} key={course.id}/>
                                        )
                                    }
                                </ListGroup>
                        }
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default ConcreteGroupPage;