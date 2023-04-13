import {connect} from "react-redux";
import StudentTab from "./studentTab";

let mapStateToProps = (state) => {
    return {
        course: state.coursePage.course,
        userRoles: state.user.userRoles,
        userEmail: state.user.userData.email,
    };
}

export default connect(mapStateToProps, {
})(StudentTab);