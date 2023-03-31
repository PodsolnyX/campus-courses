import {connect} from "react-redux";
import ConcreteGroupPage from "./concreteGroupPage";
import {openCourseModal} from "../../../store/reducers/modalReducers/courseModalReducer";
import {withRouter} from "../../../hoc/withRouter";
import {getGroupCourses, getGroups} from "../../../store/reducers/groupsReducer";

let mapStateToProps = (state) => {
    return {
        groupCourses: state.groupsPage.groupCourses,
        isLoading: state.groupsPage.isLoading,
        groups: state.groupsPage.groups
    };
}

export default connect(mapStateToProps, {
    openCourseModal,
    getGroupCourses,
    getGroups
})(withRouter(ConcreteGroupPage));