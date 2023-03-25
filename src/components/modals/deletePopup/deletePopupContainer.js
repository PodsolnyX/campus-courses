import {connect} from "react-redux";
import DeletePopup from "./deletePopup";
import {closeDeletePopup, openDeletePopup} from "../../../store/reducers/deletePopupReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.deletePopup.isShow
    };
}

export default connect(mapStateToProps, {
    closeDeletePopup
})(DeletePopup);