import {Tab, Tabs} from "react-bootstrap";
import TeacherTabContainer from "./teacherTab/teacherTabContainer";
import StudentTabContainer from "./studentTab/studentTabContainer";

const CourseMembersTabs = () => {
    return (
        <div className="mt-4 mb-5">
            <Tabs
                defaultActiveKey="students"
                id="justify-tab-example"
                justify
            >
                <Tab eventKey="teachers" title="Преподаватели">
                    <TeacherTabContainer/>
                </Tab>
                <Tab eventKey="students" title="Студенты">
                    <StudentTabContainer/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default CourseMembersTabs;