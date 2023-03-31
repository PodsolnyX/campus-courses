import {connect} from "react-redux";
import ConcreteGroupPage from "./concreteGroupPage";
import {openCourseModal} from "../../../store/reducers/modalReducers/courseModalReducer";
import {withRouter} from "../../../hoc/withRouter";
import {getGroupCourses} from "../../../store/reducers/groupsPageReducer";

let mapStateToProps = (state) => {
    return {
        groupCourses: state.groupsPage.groupCourses,
        isLoading: state.groupsPage.isLoading
    };
}

export default connect(mapStateToProps, {
    openCourseModal,
    getGroupCourses
})(withRouter(ConcreteGroupPage));