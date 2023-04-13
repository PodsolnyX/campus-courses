import {Button, Container} from "react-bootstrap";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";
import {useEffect} from "react";
import CourseInfoTabsContainer from "./courseInformationTabs/courseInfoTabsContainer";
import CourseMembersTabsContainer from "./courseMembersTabs/courseMembersTabsContainer";
import EditCourseModalContainer from "./modals/editCourseModal/editCourseModalContainer";
import {useNavigate} from "react-router-dom";
import {isAdmin, isCourseTeacher} from "../../../helpers/roleDeterminant";

const CoursePage = (props) => {

    const navigate = useNavigate();

    const isCanEdit = isAdmin(props.userRoles) || isCourseTeacher(props.userEmail, props.course.teachers);

    useEffect(() => {
        props.getCourseDetails(props.router.params.id);
        props.getUserCourses()
    }, [])

    const onOpenEditCourseModal = () => {
        props.openEditCourseModal({
            requirements: props.course?.requirements,
            annotations: props.course?.annotations
        })
    }

    const onDeleteCourse = () => {
        props.openConfirmPopup(() => {
            navigate(-1);
            props.deleteCourse();
        })
    }

    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5 bg-white py-4 py-md-5 px-2 px-md-5">
                <div>
                    {
                        isCanEdit ? <EditCourseModalContainer/> : undefined}
                    {
                        props.isLoading ? undefined :
                            <div className={"d-md-flex justify-content-between mb-3"}>
                                <h3 className={"my-auto"}>{props.course?.name?.toUpperCase()}</h3>
                                {isCanEdit ?
                                    <div className={"d-flex justify-content-end mt-3 mt-md-0 ms-md-1"}>
                                        <Button variant={"outline-primary px-5 px-md-2"} onClick={onOpenEditCourseModal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd"
                                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </Button>
                                        {
                                            isAdmin(props.userRoles) ?
                                        <Button variant={"outline-danger px-5 px-md-2"} className={"ms-2"}
                                                onClick={onDeleteCourse}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                 className="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                            </svg>
                                        </Button> : undefined
                                        }
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