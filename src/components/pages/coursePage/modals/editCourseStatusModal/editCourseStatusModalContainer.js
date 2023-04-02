import {connect} from "react-redux";
import EditCourseStatusModal from "./editCourseStatusModal";
import {closeCourseStatusModal, editValueCourseStatusModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.courseStatusModal.isShow,
        value: state.coursePage.courseStatusModal.value
    };
}

export default connect(mapStateToProps, {
    closeCourseStatusModal,
    editValueCourseStatusModal
})(EditCourseStatusModal);