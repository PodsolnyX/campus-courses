import {connect} from "react-redux";
import EditCourseStatusModal from "./editCourseStatusModal";
import {
    closeCourseStatusModal, editValueCourseStatusModal
} from "../../../../../store/reducers/modalReducers/courseStatusReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.courseStatusModal.isShow,
        value: state.courseStatusModal.value
    };
}

export default connect(mapStateToProps, {
    closeCourseStatusModal,
    editValueCourseStatusModal
})(EditCourseStatusModal);