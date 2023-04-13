import {connect} from "react-redux";
import NoticeTab from "./noticeTab";
import {openNoticeModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        userRoles: state.user.userRoles,
        userEmail: state.user.userData.email
    };
}

export default connect(mapStateToProps, {
    openNoticeModal
})(NoticeTab);