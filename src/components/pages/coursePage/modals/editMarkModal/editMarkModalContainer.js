import {connect} from "react-redux";
import EditMarkModal from "./editMarkModal";
import {closeMarkModal, editValueMarkModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.coursePage.markModal.isShow,
        value: state.coursePage.markModal.value
    };
}

export default connect(mapStateToProps, {
    closeMarkModal,
    editValueMarkModal
})(EditMarkModal);