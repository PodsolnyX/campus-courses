import {connect} from "react-redux";
import StudentTab from "./studentTab";
import {editStudentCourseStatus, openMarkModal} from "../../../../../store/reducers/coursesReducer";
import {openConfirmPopup} from "../../../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state) => {
    return {
        students: state.coursePage.course.students,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openMarkModal,
    editStudentCourseStatus,
    openConfirmPopup
})(StudentTab);