import {connect} from "react-redux";
import StudentTabItem from "./stidentTabItem";
import {editStudentCourseStatus, openMarkModal} from "../../../../../../store/reducers/coursesReducer";
import {openConfirmPopup} from "../../../../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {
    openMarkModal,
    editStudentCourseStatus,
    openConfirmPopup
})(StudentTabItem);