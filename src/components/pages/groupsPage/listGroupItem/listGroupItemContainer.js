import {connect} from "react-redux";
import ListGroupItem from "./listGroupItem";
import {openDeletePopup} from "../../../../store/reducers/deletePopupReducer";
import {openGroupsModal} from "../../../../store/reducers/groupsModalReducer";

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