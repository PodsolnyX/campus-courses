import {connect} from "react-redux";
import CreateCourseModal from "./createCourseModal";
import {getUsers} from "../../../../store/reducers/userReducer";
import {closeCreateCourseModal, createCourse, setCreateCourseModalData} from "../../../../store/reducers/coursesReducer";
import {withRouter} from "../../../../hoc/withRouter";

let mapStateToProps = (state) => {

    return {
        isShow: state.coursePage.createCourseModal.isShow,
        users: state.user.users,
        currentCourse: state.coursePage.createCourseModal.currentCourse,
        isLoading: state.coursePage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeCreateCourseModal,
    getUsers,
    setCreateCourseModalData,
    createCourse
})(withRouter(CreateCourseModal));