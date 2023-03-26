import {connect} from "react-redux";
import TeacherTab from "./teacherTab";
import {openTeacherModal} from "../../../../../store/reducers/modalReducers/teacherModalReducer";

let mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    openTeacherModal
})(TeacherTab);