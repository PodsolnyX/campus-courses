import {connect} from "react-redux";
import ConcreteGroupPage from "./concreteGroupPage";
import {openCourseModal} from "../../../store/reducers/modalReducers/courseModalReducer";

let mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {
    openCourseModal
})(ConcreteGroupPage);