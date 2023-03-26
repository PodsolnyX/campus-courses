import {connect} from "react-redux";
import ListGroupItem from "./listGroupItem";
import {openDeletePopup} from "../../../../store/reducers/modalReducers/deletePopupReducer";
import {openGroupsModal} from "../../../../store/reducers/modalReducers/groupsModalReducer";

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