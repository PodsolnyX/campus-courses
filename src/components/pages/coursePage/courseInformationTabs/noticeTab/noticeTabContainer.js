import {connect} from "react-redux";
import NoticeTab from "./noticeTab";
import {openNoticeModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        notifications: state.coursePage.course.notifications
    };
}

export default connect(mapStateToProps, {
    openNoticeModal
})(NoticeTab);