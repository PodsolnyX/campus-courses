import {connect} from "react-redux";
import userCoursesPage from "./userCoursesPage";
import {getUserCourses} from "../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        courses: state.coursePage.userCourses,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
    getUserCourses
})(userCoursesPage);