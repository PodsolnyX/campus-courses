import {connect} from "react-redux";
import GroupsPage from "./groupsPage";
import {openGroupsModal} from "../../../store/reducers/groupsModalReducer";

let mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {
    openGroupsModal
})(GroupsPage);