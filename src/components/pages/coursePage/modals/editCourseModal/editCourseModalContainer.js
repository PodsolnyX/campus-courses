import {connect} from "react-redux";
import {
    closeEditCourseModal, editCourse,
    setEditCourseModalData
} from "../../../../../store/reducers/coursesReducer";
import EditCourseModal from "./editCourseModal";

let mapStateToProps = (state) => {

    return {
        isShow: state.coursePage.editCourseModal.isShow,
        isLoading: state.coursePage.isLoadingModal,
        data: state.coursePage.editCourseModal.data
    };
}

export default connect(mapStateToProps, {
    closeEditCourseModal,
    setEditCourseModalData,
    editCourse
})(EditCourseModal);