import {connect} from "react-redux";
import GroupsPage from "./groupsPage";
import {openGroupsModal} from "../../../store/reducers/modalReducers/groupsModalReducer";

let mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {
    openGroupsModal
})(GroupsPage);