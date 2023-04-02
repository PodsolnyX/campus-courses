import {connect} from "react-redux";
import EditCourseStatusModal from "./editCourseStatusModal";
import {
    closeCourseStatusModal,
    editValueCourseStatusModal,
    setCourseStatus
} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.courseStatusModal.isShow,
        status: state.coursePage.courseStatusModal.status,
        isLoading: state.coursePage.isLoadingModal,
        curStatus: state.coursePage.courseStatusModal.curStatus
    };
}

export default connect(mapStateToProps, {
    closeCourseStatusModal,
    editValueCourseStatusModal,
    setCourseStatus
})(EditCourseStatusModal);