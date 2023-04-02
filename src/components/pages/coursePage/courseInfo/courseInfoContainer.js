import {connect} from "react-redux";
import CourseInfo from "./courseInfo";
import {openCourseStatusModal, signUpCourse} from "../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openCourseStatusModal,
    signUpCourse
})(CourseInfo);