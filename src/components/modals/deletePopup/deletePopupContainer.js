import {connect} from "react-redux";
import DeletePopup from "./deletePopup";
import {closeDeletePopup} from "../../../store/reducers/modalReducers/deletePopupReducer";

let mapStateToProps = (state) => {
    return {
        isShow: state.deletePopup.isShow
    };
}

export default connect(mapStateToProps, {
    closeDeletePopup
})(DeletePopup);