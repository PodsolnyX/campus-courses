import {connect} from "react-redux";
import {openCourseModal} from "../../../store/reducers/modalReducers/courseModalReducer";
import CoursePage from "./coursePage";

let mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    openCourseModal
})(CoursePage);