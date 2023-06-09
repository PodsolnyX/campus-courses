import {connect} from "react-redux";
import RegistrationPage from "./registrationPage";
import {registerUser, setRegistrationFormData} from "../../../store/reducers/registrationPageReducer";

let mapStateToProps = (state) => {
    return {
        formData: state.registrationPage.formData,
        isLoading: state.registrationPage.isLoading
    };
}

export default connect(mapStateToProps, {
    setRegistrationFormData,
    registerUser
})(RegistrationPage);