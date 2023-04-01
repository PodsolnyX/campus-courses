import {Button, Container} from "react-bootstrap";
import EditCourseModalContainer from "../concreteGroupPage/editCourseModal/editCourseModalContainer";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";
import {useEffect} from "react";
import CourseInfoTabsContainer from "./courseInformationTabs/courseInfoTabsContainer";
import CourseMembersTabsContainer from "./courseMembersTabs/courseMembersTabsContainer";

const CoursePage = (props) => {

    useEffect(() => {
        props.getCourseDetails(props.router.params.id);
    }, [])

    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div>
                    {/*<EditCourseModalContainer/>*/}
                    {
                        props.isLoading ? undefined :
                            <div className={"d-flex justify-content-between"}>
                                <h3>{props.course?.name?.toUpperCase()}</h3>
                                <div>
                                    <Button variant={"outline-warning"} onClick={props.openCourseModal}>
                                        Редактировать данные</Button>
                                </div>
                            </div>
                    }
                </div>
                <CourseInfoContainer/>
                <CourseInfoTabsContainer/>
                <CourseMembersTabsContainer/>
            </div>
        </Container>
    );
}

export default CoursePage;