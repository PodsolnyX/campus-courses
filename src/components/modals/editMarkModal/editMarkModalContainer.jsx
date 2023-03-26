import {connect} from "react-redux";
import EditMarkModal from "./editMarkModal";
import {closeMarkModal, editValueMarkModal} from "../../../store/reducers/modalReducers/markModalReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.markModal.isShow,
        value: state.markModal.value
    };
}

export default connect(mapStateToProps, {
    closeMarkModal,
    editValueMarkModal
})(EditMarkModal);