import {connect} from "react-redux";
import LoginPage from "./loginPage";
import {loginUser, setLoginFormData} from "../../../store/reducers/loginPageReducer";

let mapStateToProps = (state) => {
    return {
        formData: state.loginPage.formData,
        isLoading: state.loginPage.isLoading
    };
}

export default connect(mapStateToProps, {
    setLoginFormData,
    loginUser
})(LoginPage);