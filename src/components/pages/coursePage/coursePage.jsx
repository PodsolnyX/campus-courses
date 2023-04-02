import {Button, Container} from "react-bootstrap";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";
import {useEffect} from "react";
import CourseInfoTabsContainer from "./courseInformationTabs/courseInfoTabsContainer";
import CourseMembersTabsContainer from "./courseMembersTabs/courseMembersTabsContainer";
import EditCourseModalContainer from "./modals/editCourseModal/editCourseModalContainer";

const CoursePage = (props) => {

    useEffect(() => {
        props.getCourseDetails(props.router.params.id);
    }, [])

    const onOpenEditCourseModal = () => {
        props.openEditCourseModal({
            requirements: props.course?.requirements,
            annotations: props.course?.annotations
        })
    }

    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div>
                    { props.userRoles["isAdmin"] === true ? <EditCourseModalContainer/> : undefined }
                    {
                        props.isLoading ? undefined :
                            <div className={"d-flex justify-content-between"}>
                                <h3>{props.course?.name?.toUpperCase()}</h3>
                                { props.userRoles["isAdmin"] === true ?
                                <div>
                                    <Button variant={"outline-warning"} onClick={onOpenEditCourseModal}>
                                        Редактировать данные</Button>
                                </div> : undefined
                                }
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