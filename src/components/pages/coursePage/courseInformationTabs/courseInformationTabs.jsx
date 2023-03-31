import {Tab, Tabs} from "react-bootstrap";
import "./courseInformationTab.css";
import NoticeTabContainer from "./noticeTab/noticeTabContainer";
import LoadSpinner from "../../../other/loadSpinner/loadSpinner";

const CourseInformationTabs = (props) => {

    return (
        <Tabs
            defaultActiveKey="requirements"
            id="justify-tab-example"
            className="mt-4"
            justify
        >
            <Tab eventKey="requirements" title="Требования к курсу">
                <div className={"border-bottom border-end border-start border-1 p-3"}>
                    {
                        props.isLoading ? <LoadSpinner/> :
                            <div dangerouslySetInnerHTML={{__html: props.course.requirements}}></div>
                    }
                </div>
            </Tab>
            <Tab eventKey="annotations" title="Аннотация">
                <div className={"border-bottom border-end border-start border-1 p-3"}>
                    <div dangerouslySetInnerHTML={{__html: props.course.annotations}}></div>
                </div>
            </Tab>
            <Tab eventKey="notifications"
                 title={<div>Уведомления
                     <span className={"badge bg-danger ms-1"}>
                         {
                             props.course?.notifications?.length === 0 ? undefined :
                                 props.course?.notifications?.length <= 3 ?
                                     props.course?.notifications?.length : "3+"
                         }
                     </span>
                 </div>}>
                <NoticeTabContainer/>
            </Tab>
        </Tabs>
    );
}

export default CourseInformationTabs;