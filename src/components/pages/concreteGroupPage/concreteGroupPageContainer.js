import {connect} from "react-redux";
import ConcreteGroupPage from "./concreteGroupPage";
import {withRouter} from "../../../hoc/withRouter";
import {getGroupCourses, getGroups} from "../../../store/reducers/groupsReducer";
import {openCourseModal} from "../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        groupCourses: state.groupsPage.groupCourses,
        isLoading: state.groupsPage.isLoading,
        groups: state.groupsPage.groups,
        userRoles: state.user.userRoles
    };
}

export default connect(mapStateToProps, {
    openCourseModal,
    getGroupCourses,
    getGroups
})(withRouter(ConcreteGroupPage));