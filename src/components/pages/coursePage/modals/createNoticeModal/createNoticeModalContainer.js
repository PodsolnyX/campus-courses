import {connect} from "react-redux";
import {closeNoticeModal, editValueNoticeModal} from "../../../../../store/reducers/modalReducers/noticeModalReducer";
import CreateNoticeModal from "./createNoticeModal";

let mapStateToProps = (state) => {
    return {
        isShow: state.noticeModal.isShow,
        value: state.noticeModal.value
    };
}

export default connect(mapStateToProps, {
    closeNoticeModal,
    editValueNoticeModal
})(CreateNoticeModal);