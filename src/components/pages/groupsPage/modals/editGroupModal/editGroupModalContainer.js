import {connect} from "react-redux";
import EditGroupModal from "./editGroupModal";
import {closeGroupsModal, editValueGroupsModal} from "../../../../../store/reducers/groupsPageReducer";

let mapStateToProps = (state) => {
    return {
        isShowModal: state.groupsPage.isShowModal,
        isEdit: state.groupsPage.isEdit,
        value: state.groupsPage.value
    };
}

export default connect(mapStateToProps, {
    closeGroupsModal,
    editValueGroupsModal
})(EditGroupModal);