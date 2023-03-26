import {connect} from "react-redux";
import {closeGroupsModal, editValueGroupsModal} from "../../../store/reducers/modalReducers/groupsModalReducer";
import EditGroupModal from "./editGroupModal";

let mapStateToProps = (state) => {
    return {
        isShow: state.groupsModal.isShow,
        isEdit: state.groupsModal.isEdit,
        value: state.groupsModal.value
    };
}

export default connect(mapStateToProps, {
    closeGroupsModal,
    editValueGroupsModal
})(EditGroupModal);