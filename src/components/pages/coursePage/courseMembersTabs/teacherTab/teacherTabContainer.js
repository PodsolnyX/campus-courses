import {connect} from "react-redux";
import TeacherTab from "./teacherTab";
import {openTeacherModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        teachers: state.coursePage.course.teachers,
        userRoles: state.user.userRoles,
        userEmail: state.user.userData.email,
    };
}

export default connect(mapStateToProps, {
    openTeacherModal
})(TeacherTab);