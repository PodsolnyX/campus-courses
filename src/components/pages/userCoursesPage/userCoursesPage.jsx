import {Container} from "react-bootstrap";
import {useEffect} from "react";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";
import ListCoursesItem from "../concreteGroupPage/listCoursesItem/listCoursesItem";

const UserCoursesPage = (props) => {

    useEffect(() => {
        props.getUserCourses();
    }, []);

    return (
        <div>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Мои кампусные курсы</h3>
                    </div>
                    <div className={"mt-4"}>
                        {
                            props.isLoading ? <LoadSpinner/> :
                                <div>
                                    {
                                        props.courses.length === 0
                                            ?
                                            <div className={"text-secondary mx-auto my-3"}>
                                                Вы ещё не записаны на курсы
                                            </div>
                                            :
                                            props.courses.map(course =>
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

export default UserCoursesPage;