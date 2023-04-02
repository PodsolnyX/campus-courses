import {connect} from "react-redux";
import ListGroupItem from "./listGroupItem";
import {deleteGroup, openGroupsModal} from "../../../../store/reducers/groupsReducer";
import {openConfirmPopup} from "../../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state, props) => {
    return {
        title: props.title,
        isEdit: props.isEdit,
        data: props.data
    };
}

export default connect(mapStateToProps, {
    openGroupsModal,
    openConfirmPopup,
    deleteGroup
})(ListGroupItem);