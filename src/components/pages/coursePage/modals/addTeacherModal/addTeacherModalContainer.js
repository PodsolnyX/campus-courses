import {connect} from "react-redux";
import AddTeacherModal from "./addTeacherModal";
import {closeTeacherModal, editValueTeacherModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.teacherModal.isShow,
        value: state.coursePage.teacherModal.value
    };
}

export default connect(mapStateToProps, {
    closeTeacherModal,
    editValueTeacherModal
})(AddTeacherModal);