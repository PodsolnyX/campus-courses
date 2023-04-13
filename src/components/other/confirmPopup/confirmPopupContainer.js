import {connect} from "react-redux";
import ConfirmPopup from "./confirmPopup";
import {closeConfirmPopup, confirmConfirmPopup, openConfirmPopup} from "../../../store/reducers/confirmPopupReducer";

let mapStateToProps = (state) => {

    return {
        isShow: state.confirmPopup.isShow,
    };
}

export default connect(mapStateToProps, {
    openConfirmPopup,
    closeConfirmPopup,
    confirmConfirmPopup
})(ConfirmPopup);