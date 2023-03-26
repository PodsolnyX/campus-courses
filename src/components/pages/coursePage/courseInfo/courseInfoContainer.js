import {connect} from "react-redux";
import {openCourseStatusModal} from "../../../../store/reducers/modalReducers/courseStatusReducer";
import CourseInfo from "./courseInfo";

let mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    openCourseStatusModal
})(CourseInfo);