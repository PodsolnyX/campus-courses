import {Button, Card, Container, ListGroup, Spinner} from "react-bootstrap";
import ListCoursesItem from "./listCoursesItem/listCoursesItem";
import EditCourseModalContainer from "../coursePage/modals/editCourseModal/editCourseModalContainer";
import {useEffect} from "react";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";

const ConcreteGroupPage = (props) => {

    useEffect(() => {
        props.getGroupCourses(props.router.params.id);
    }, []);

    useEffect(() => {
        if (props.groups.length === 0)
            props.getGroups();
    }, []);

    const groupName = (props.groups?.find(group => group.id === props.router.params.id))?.name;

    return (
        <div>
            <EditCourseModalContainer/>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группа - {groupName}</h3>
                        <Button variant={"outline-primary"} onClick={() => props.openCourseModal(false)}>Создать
                            курс</Button>
                    </div>
                    <Card className={"mt-4"}>
                        {
                            props.isLoading ?
                                <LoadSpinner/>
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