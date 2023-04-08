import {Button, Card, Container, ListGroup} from "react-bootstrap";
import ListCoursesItem from "./listCoursesItem/listCoursesItem";
import {useEffect} from "react";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";
import CreateCourseModalContainer from "./createCourseModal/createCourseModalContainer";
import {isAdmin} from "../../../helpers/roleDeterminant";

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
            { isAdmin(props.userRoles) ? <CreateCourseModalContainer/> : undefined}
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группа - {groupName}</h3>
                        {
                            isAdmin(props.userRoles) ?
                                <Button variant={"outline-primary"} onClick={() => props.openCreateCourseModal()}>
                                    Создать курс
                                </Button>
                                : undefined
                        }
                    </div>
                    <div className={"mt-4"}>
                        {
                            props.isLoading ? <LoadSpinner/> :
                                <div>
                                    {
                                        props.groupCourses.length === 0
                                            ?
                                            <div className={"text-secondary mx-auto my-3"}>В данной группе ещё нет
                                                курсов</div>
                                            :
                                            props.groupCourses.map(course =>
                                                <ListCoursesItem data={course} key={course.id}/>)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ConcreteGroupPage;