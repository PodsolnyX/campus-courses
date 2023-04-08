import {Tab, Tabs} from "react-bootstrap";
import TeacherTabContainer from "./teacherTab/teacherTabContainer";
import StudentTabContainer from "./studentTab/studentTabContainer";
import LoadSpinner from "../../../other/loadSpinner/loadSpinner";

const CourseMembersTabs = (props) => {
    return (
        <div className="mt-4 mb-5">
            <Tabs
                defaultActiveKey="students"
                id="justify-tab-example"
                justify
            >
                <Tab eventKey="teachers" title="Преподаватели">
                    <div className={"bg-white border-bottom border-end border-start border-1 p-3"}>
                        <TeacherTabContainer/>
                    </div>
                </Tab>
                <Tab eventKey="students" title="Студенты">
                    <div className={"bg-white border-bottom border-end border-start border-1 p-3"}>
                        {
                            props.isLoading ? <LoadSpinner/> : <StudentTabContainer/>
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default CourseMembersTabs;