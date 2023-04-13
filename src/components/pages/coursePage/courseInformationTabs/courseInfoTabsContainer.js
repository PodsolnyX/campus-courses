import {connect} from "react-redux";
import CourseInformationTabs from "./courseInformationTabs";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading
    };
}

export default connect(mapStateToProps, {
})(CourseInformationTabs);