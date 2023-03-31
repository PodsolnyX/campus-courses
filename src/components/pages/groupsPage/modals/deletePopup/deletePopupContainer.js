import {connect} from "react-redux";
import DeletePopup from "./deletePopup";
import {closeDeletePopup, deleteGroup} from "../../../../../store/reducers/groupsReducer";

let mapStateToProps = (state) => {
    return {
        isShowPopup: state.groupsPage.isShowPopup,
        isLoading: state.groupsPage.isLoadingModal
    };
}

export default connect(mapStateToProps, {
    closeDeletePopup,
    deleteGroup
})(DeletePopup);