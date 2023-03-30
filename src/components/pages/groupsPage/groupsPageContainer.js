import {connect} from "react-redux";
import GroupsPage from "./groupsPage";
import {getGroups, openGroupsModal} from "../../../store/reducers/groupsPageReducer";

let mapStateToProps = (state) => {
    return {
        groups: state.groupsPage.groups,
        isLoading: state.groupsPage.isLoading,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openGroupsModal,
    getGroups
})(GroupsPage);