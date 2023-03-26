import {connect} from "react-redux";
import NoticeTab from "./noticeTab";
import {openNoticeModal} from "../../../../../store/reducers/modalReducers/noticeModalReducer";

let mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    openNoticeModal
})(NoticeTab);