import {connect} from "react-redux";
import LoginPage from "./loginPage";
import {loginUser, setLoginFormData} from "../../../store/reducers/loginPageReducer";

let mapStateToProps = (state) => {
    return {
        formData: state.loginPage.formData
    };
}

export default connect(mapStateToProps, {
    setLoginFormData,
    loginUser
})(LoginPage);