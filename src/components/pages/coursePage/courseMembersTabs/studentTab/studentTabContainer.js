import {connect} from "react-redux";
import StudentTab from "./studentTab";
import {openMarkModal} from "../../../../../store/reducers/modalReducers/markModalReducer";

let mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    openMarkModal
})(StudentTab);