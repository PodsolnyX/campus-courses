import {Button, Container} from "react-bootstrap";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";
import {useEffect} from "react";
import CourseInfoTabsContainer from "./courseInformationTabs/courseInfoTabsContainer";
import CourseMembersTabsContainer from "./courseMembersTabs/courseMembersTabsContainer";
import EditCourseModalContainer from "./modals/editCourseModal/editCourseModalContainer";
import {useNavigate} from "react-router-dom";

const CoursePage = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        props.getCourseDetails(props.router.params.id);
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

    console.log(props.course)

    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div>
                    {props.userRoles["isAdmin"] === true ? <EditCourseModalContainer/> : undefined}
                    {
                        props.isLoading ? undefined :
                            <div className={"d-md-flex justify-content-between mb-3"}>
                                <h3 className={"my-auto"}>{props.course?.name?.toUpperCase()}</h3>
                                {props.userRoles["isAdmin"] === true ?
                                    <div className={"d-flex flex-md-column justify-content-end mt-3 mt-md-0 ms-md-1"}>
                                        <Button variant={"outline-warning"} onClick={onOpenEditCourseModal}>
                                            Редактировать данные</Button>
                                        <Button variant={"outline-danger"} className={"ms-2 ms-md-0 mt-md-2"}
                                                onClick={onDeleteCourse}>
                                            Удалить курс
                                        </Button>
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