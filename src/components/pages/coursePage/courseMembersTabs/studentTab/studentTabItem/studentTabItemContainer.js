import {connect} from "react-redux";
import StudentTabItem from "./stidentTabItem";
import {editStudentCourseStatus, openMarkModal} from "../../../../../../store/reducers/coursesReducer";
import {openConfirmPopup} from "../../../../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state) => {
    return {
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openMarkModal,
    editStudentCourseStatus,
    openConfirmPopup
})(StudentTabItem);