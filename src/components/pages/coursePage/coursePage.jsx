import {Button, Container} from "react-bootstrap";
import CourseInfo from "./courseInfo/courseInfo";
import CourseInformationTabs from "./courseInformationTabs/courseInformationTabs";
import CourseMembersTabs from "./courseMembersTabs/courseMembersTabs";

const CoursePage = () => {
    return (
        <Container className={"col"}>
            <div className="col-12 col-lg-10 mx-auto mt-5">
                <div className={"d-flex justify-content-between"}>
                    <h3>BIGDATA: ПРОГРАММНЫЕ МЕТОДЫ С PYTHON3</h3>
                    <div>
                        <Button variant={"outline-warning"}>Редактировать данные</Button>
                    </div>
                </div>
                <CourseInfo/>
                <CourseInformationTabs/>
                <CourseMembersTabs/>
            </div>
        </Container>
    );
}

export default CoursePage;