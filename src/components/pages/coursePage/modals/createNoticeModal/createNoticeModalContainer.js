import {connect} from "react-redux";
import CreateNoticeModal from "./createNoticeModal";
import {
    closeNoticeModal, createNotice,
    editDataNoticeModal,
} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.noticeModal.isShow,
        data: state.coursePage.noticeModal.data
    };
}

export default connect(mapStateToProps, {
    closeNoticeModal,
    editDataNoticeModal,
    createNotice
})(CreateNoticeModal);