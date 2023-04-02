import {connect} from "react-redux";
import StudentTab from "./studentTab";
import {openMarkModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        students: state.coursePage.course.students,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openMarkModal
})(StudentTab);