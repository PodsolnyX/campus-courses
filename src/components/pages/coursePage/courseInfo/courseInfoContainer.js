import {connect} from "react-redux";
import CourseInfo from "./courseInfo";
import {openCourseStatusModal} from "../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
    openCourseStatusModal
})(CourseInfo);