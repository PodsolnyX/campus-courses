import {connect} from "react-redux";
import NavBar from "./navbar";
import {logoutUser} from "../../../store/reducers/userReducer";

let mapStateToProps = (state) => {
    return {
        userData: state.user.userData,
        userRoles: state.user.userRoles,
        isAuth: state.user.isAuth
    };
}

export default connect(mapStateToProps, {
    logoutUser
})(NavBar);