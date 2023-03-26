import {Tab, Tabs} from "react-bootstrap";
import "./courseInformationTab.css";
import NoticeTabContainer from "./noticeTab/noticeTabContainer";

const CourseInformationTabs = () => {
    return (
        <Tabs
            defaultActiveKey="notifications"
            id="justify-tab-example"
            className="mt-4"
            justify
        >
            <Tab eventKey="requirements" title="Требования к курсу">
                <div className={"border-bottom border-end border-start border-1 p-3"}>
                    Для успешного освоения обучающиеся уже должны овладеть общими компетенциями: способностью
                    приобретать новые знания, используя современные образовательные и информационные технологии.
                </div>
            </Tab>
            <Tab eventKey="annotations" title="Аннотация">
                <div className={"border-bottom border-end border-start border-1 p-3"}>
                    Аннотация
                </div>
            </Tab>
            <Tab eventKey="notifications" title={<div>Уведомления<span className={"badge bg-danger ms-1"}>3+</span></div>}>
                <NoticeTabContainer/>
            </Tab>
        </Tabs>
    );
}

export default CourseInformationTabs;