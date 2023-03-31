import {connect} from "react-redux";
import CourseMembersTabs from "./courseMembersTabs";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
})(CourseMembersTabs);