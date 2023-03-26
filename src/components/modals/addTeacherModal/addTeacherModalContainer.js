import {connect} from "react-redux";
import {closeTeacherModal, editValueTeacherModal} from "../../../store/reducers/modalReducers/teacherModalReducer";
import AddTeacherModal from "./addTeacherModal";

let mapStateToProps = (state) => {
    return {
        isShow: state.teacherModal.isShow,
        value: state.teacherModal.value
    };
}

export default connect(mapStateToProps, {
    closeTeacherModal,
    editValueTeacherModal
})(AddTeacherModal);