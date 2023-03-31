import {connect} from "react-redux";
import {openCourseModal} from "../../../store/reducers/modalReducers/courseModalReducer";
import CoursePage from "./coursePage";
import {getCourseDetails} from "../../../store/reducers/coursesReducer";
import {withRouter} from "../../../hoc/withRouter";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
    openCourseModal,
    getCourseDetails
})(withRouter(CoursePage));