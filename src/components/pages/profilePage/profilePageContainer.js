import {connect} from "react-redux";
import ProfilePage from "./profilePage";
import {
    getUserProfileForPage,
    saveProfileData, setIsEditProfilePage,
    setProfileFormData
} from "../../../store/reducers/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        formData: state.profilePage.formData,
        isLoading: state.profilePage.isLoading,
        isEdit: state.profilePage.isEdit
    };
}

export default connect(mapStateToProps, {
    getUserProfileForPage,
    setProfileFormData,
    saveProfileData,
    setIsEditProfilePage
})(ProfilePage);