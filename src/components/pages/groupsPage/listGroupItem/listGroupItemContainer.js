import {connect} from "react-redux";
import ListGroupItem from "./listGroupItem";
import {openDeletePopup, openGroupsModal} from "../../../../store/reducers/groupsPageReducer";

let mapStateToProps = (state, props) => {
    return {
        title: props.title,
        isEdit: props.isEdit
    };
}

export default connect(mapStateToProps, {
    openDeletePopup,
    openGroupsModal
})(ListGroupItem);