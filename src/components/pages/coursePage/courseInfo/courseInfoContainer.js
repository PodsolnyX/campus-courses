import {connect} from "react-redux";
import {openCourseStatusModal} from "../../../../store/reducers/modalReducers/courseStatusReducer";
import CourseInfo from "./courseInfo";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
    openCourseStatusModal
})(CourseInfo);