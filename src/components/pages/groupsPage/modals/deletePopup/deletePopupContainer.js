import {connect} from "react-redux";
import DeletePopup from "./deletePopup";
import {closeDeletePopup} from "../../../../../store/reducers/groupsPageReducer";

let mapStateToProps = (state) => {
    return {
        isShowPopup: state.groupsPage.isShowPopup
    };
}

export default connect(mapStateToProps, {
    closeDeletePopup
})(DeletePopup);