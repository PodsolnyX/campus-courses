import {Tab, Tabs} from "react-bootstrap";
import StudentTab from "./studentTab/studentTab";
import TeacherTab from "./teacherTab/teacherTab";

const CourseMembersTabs = () => {
    return (
        <div className="mt-4 mb-5">
            <Tabs
                defaultActiveKey="students"
                id="justify-tab-example"
                justify
            >
                <Tab eventKey="teachers" title="Преподаватели">
                    <TeacherTab/>
                </Tab>
                <Tab eventKey="students" title="Студенты">
                    <StudentTab/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default CourseMembersTabs;