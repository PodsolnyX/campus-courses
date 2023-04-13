import {connect} from "react-redux";
import EditGroupModal from "./editGroupModal";
import {
    closeGroupsModal,
    createGroup,
    editGroup,
    editNameGroupsModal
} from "../../../../../store/reducers/groupsReducer";

let mapStateToProps = (state) => {
    return {
        isShowModal: state.groupsPage.isShowModal,
        isEdit: state.groupsPage.isEdit,
        currentGroup: state.groupsPage.currentGroup,
        isLoading: state.groupsPage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeGroupsModal,
    editNameGroupsModal,
    createGroup,
    editGroup
})(EditGroupModal);