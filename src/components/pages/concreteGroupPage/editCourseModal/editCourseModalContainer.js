import {connect} from "react-redux";
import EditCourseModal from "./editCourseModal";
import {getUsers} from "../../../../store/reducers/userReducer";
import {closeCourseModal, createCourse, setCourseModalData} from "../../../../store/reducers/coursesReducer";
import {withRouter} from "../../../../hoc/withRouter";

let mapStateToProps = (state) => {

    return {
        isShow: state.coursePage.isShowCourseModal,
        users: state.user.users,
        currentCourse: state.coursePage.currentCourse,
        isLoading: state.coursePage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeCourseModal,
    getUsers,
    setCourseModalData,
    createCourse
})(withRouter(EditCourseModal));