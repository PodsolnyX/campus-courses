import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/mainPage/mainPage";
import GroupsPageContainer from "./components/pages/groupsPage/groupsPageContainer";
import ConcreteGroupPageContainer from "./components/pages/concreteGroupPage/concreteGroupPageContainer";
import NotFoundPage from "./components/pages/notFoundPage/notFoundPage";
import Footer from "./components/other/footer/footer";
import CoursePageContainer from "./components/pages/coursePage/coursePageContainer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationPageContainer from "./components/pages/registrationPage/registrationPageContainer";
import LoginPageContainer from "./components/pages/loginPage/loginPageContainer";
import {connect} from "react-redux";
import {getUserProfile} from "./store/reducers/userReducer";
import {useEffect} from "react";
import NavbarContainer from "./components/other/navbar/navbarContainer";
import PrivateRoute from "./hoc/privateRoute";
import ProfilePageContainer from "./components/pages/profilePage/profilePageContainer";
import ConfirmPopup from "./components/other/confirmPopup/confirmPopupContainer";
import UserCoursesPageContainer from "./components/pages/userCoursesPage/userCoursesPageContainer";
import TaughtCoursesPageContainer from "./components/pages/taughtCoursesPage/taughtCoursesPageContainer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth
    };
}

export default connect(mapStateToProps, {
    getUserProfile
})(App);

function App (props) {

    useEffect(() => {
        if (props.isAuth)
            props.getUserProfile();
    }, []);

    return (
        <div className="App">
            <NavbarContainer/>
            <ConfirmPopup/>
            <ToastContainer/>
            <div className={"content mb-5"}>
                <Routes>
                    <Route path="/"
                           element={<MainPage/>}/>
                    <Route path="/registration"
                           element={<PrivateRoute component={<RegistrationPageContainer/>} unauthorized={true}/>}/>
                    <Route path="/login"
                           element={<PrivateRoute component={<LoginPageContainer/>} unauthorized={true}/>}/>
                    <Route path="/profile"
                           element={<PrivateRoute component={<ProfilePageContainer/>}/>}/>
                    <Route path="/groups"
                           element={<PrivateRoute component={<GroupsPageContainer/>}/>}/>
                    <Route path="/groups/:id"
                           element={<PrivateRoute component={<ConcreteGroupPageContainer/>}/>}/>
                    <Route path="/courses/my"
                           element={<PrivateRoute component={<UserCoursesPageContainer/>} role={["isStudent"]}/>}/>
                    <Route path="/courses/teaching"
                           element={<PrivateRoute component={<TaughtCoursesPageContainer/>} role={["isTeacher"]}/>}/>
                    <Route path="/courses/:id"
                           element={<PrivateRoute component={<CoursePageContainer/>}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}




