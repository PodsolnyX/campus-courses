import {Button, Container} from "react-bootstrap";
import CourseInformationTabs from "./courseInformationTabs/courseInformationTabs";
import CourseMembersTabs from "./courseMembersTabs/courseMembersTabs";
import EditCourseModalContainer from "../../modals/editCourseModal/editCourseModalContainer";
import CourseInfoContainer from "./courseInfo/courseInfoContainer";

const CoursePage = (props) => {
    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div className={"d-flex justify-content-between"}>
                    <EditCourseModalContainer/>
                    <h3>BIGDATA: ПРОГРАММНЫЕ МЕТОДЫ С PYTHON3</h3>
                    <div>
                        <Button variant={"outline-warning"} onClick={props.openCourseModal}>
                            Редактировать данные</Button>
                    </div>
                </div>
                <CourseInfoContainer/>
                <CourseInformationTabs/>
                <CourseMembersTabs/>
            </div>
        </Container>
    );
}

export default CoursePage;