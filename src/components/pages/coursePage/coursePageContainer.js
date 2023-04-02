import {connect} from "react-redux";
import CoursePage from "./coursePage";
import {deleteCourse, getCourseDetails, openEditCourseModal} from "../../../store/reducers/coursesReducer";
import {withRouter} from "../../../hoc/withRouter";
import {openConfirmPopup} from "../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        isLoading: state.coursePage.isLoading,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openEditCourseModal,
    getCourseDetails,
    deleteCourse,
    openConfirmPopup
})(withRouter(CoursePage));