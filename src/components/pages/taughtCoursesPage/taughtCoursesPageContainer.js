import {connect} from "react-redux";
import {getTaughtCourses} from "../../../store/reducers/coursesReducer";
import TaughtCoursesPage from "./taughtCoursesPage";

let mapStateToProps = (state) => {
    return {
        courses: state.coursePage.taughtCourses,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
    getTaughtCourses
})(TaughtCoursesPage);