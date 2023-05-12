import {connect} from "react-redux";
import CoursePage from "./coursePage";
import {
    getCourseDetails,
    getUserCourses
} from "../../../store/reducers/coursesReducer";
import {withRouter} from "../../../hoc/withRouter";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading,
    };
}

export default connect(mapStateToProps, {
    getCourseDetails,
    getUserCourses
})(withRouter(CoursePage));