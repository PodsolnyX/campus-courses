import {connect} from "react-redux";
import StudentTab from "./studentTab";
import {openMarkModal} from "../../../../../store/reducers/coursesReducer";

let mapStateToProps = (state) => {
    return {
        students: state.coursePage.course.students
    };
}

export default connect(mapStateToProps, {
    openMarkModal
})(StudentTab);