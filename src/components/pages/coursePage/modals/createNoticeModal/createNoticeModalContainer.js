import {connect} from "react-redux";
import CreateNoticeModal from "./createNoticeModal";
import {closeNoticeModal, editValueNoticeModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.noticeModal.isShow,
        value: state.coursePage.noticeModal.value
    };
}

export default connect(mapStateToProps, {
    closeNoticeModal,
    editValueNoticeModal
})(CreateNoticeModal);