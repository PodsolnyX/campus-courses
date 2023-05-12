import {Container} from "react-bootstrap";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";
import {useEffect} from "react";
import CourseInfoTabsContainer from "./courseInformationTabs/courseInfoTabsContainer";
import CourseMembersTabsContainer from "./courseMembersTabs/courseMembersTabsContainer";
import CourseHeaderContainer from "./courseHeader/courseHeaderContainer";

const CoursePage = (props) => {

    useEffect(() => {
        props.getCourseDetails(props.router.params.id);
        props.getUserCourses()
    }, [])

    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5 py-4 py-md-5 px-2 px-md-5 bg-white">
                {
                    props.course.length === 0 && props.isLoading === false ?
                        <h3 className={"text-center"}>Данный курс не существует</h3> :
                        <div>
                            <CourseHeaderContainer/>
                            <CourseInfoContainer/>
                            <CourseInfoTabsContainer/>
                            <CourseMembersTabsContainer/>
                        </div>
                }
            </div>
        </Container>
    );
}

export default CoursePage;