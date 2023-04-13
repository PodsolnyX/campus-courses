import {connect} from "react-redux";
import AddTeacherModal from "./addTeacherModal";
import {addCourseTeacher, closeTeacherModal, editValueTeacherModal} from "../../../../../store/reducers/coursesReducer";
import {getUsers} from "../../../../../store/reducers/userReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.teacherModal.isShow,
        userId: state.coursePage.teacherModal.userId,
        users: state.user.users,
        isLoading: state.coursePage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeTeacherModal,
    getUsers,
    editValueTeacherModal,
    addCourseTeacher
})(AddTeacherModal);