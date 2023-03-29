import {connect} from "react-redux";
import EditCourseModal from "./editCourseModal";
import {closeCourseModal} from "../../../../../store/reducers/modalReducers/courseModalReducer";

let mapStateToProps = (state) => {

    return {
        isShow: state.courseModal.isShow,
        isEdit: state.courseModal.isEdit
    };
}

export default connect(mapStateToProps, {
    closeCourseModal
})(EditCourseModal);