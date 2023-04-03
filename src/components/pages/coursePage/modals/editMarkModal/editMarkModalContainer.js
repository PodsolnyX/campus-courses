import {connect} from "react-redux";
import EditMarkModal from "./editMarkModal";
import {closeMarkModal, editStudentMark, editValueMarkModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.markModal.isShow,
        data: state.coursePage.markModal.data,
        isLoading: state.coursePage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeMarkModal,
    editValueMarkModal,
    editStudentMark
})(EditMarkModal);