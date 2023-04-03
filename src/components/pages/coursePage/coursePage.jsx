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
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div>
                    {
                        isCanEdit ? <EditCourseModalContainer/> : undefined}
                    {
                        props.isLoading ? undefined :
                            <div className={"d-md-flex justify-content-between mb-3"}>
                                <h3 className={"my-auto"}>{props.course?.name?.toUpperCase()}</h3>
                                {isCanEdit ?
                                    <div className={"d-flex flex-md-column justify-content-end mt-3 mt-md-0 ms-md-1"}>
                                        <Button variant={"outline-warning"} onClick={onOpenEditCourseModal}>
                                            Редактировать данные</Button>
                                        {
                                            isAdmin(props.userRoles) ?
                                        <Button variant={"outline-danger"} className={"ms-2 ms-md-0 mt-md-2"}
                                                onClick={onDeleteCourse}>
                                            Удалить курс
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