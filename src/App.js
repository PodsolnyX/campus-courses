import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./components/pages/mainPage/mainPage";
import ProfilePage from "./components/pages/profilePage/profilePage";
import DeletePopupContainer from "./components/pages/groupsPage/modals/deletePopup/deletePopupContainer";
import GroupsPageContainer from "./components/pages/groupsPage/groupsPageContainer";
import ConcreteGroupPageContainer from "./components/pages/concreteGroupPage/concreteGroupPageContainer";
import UserCoursesPage from "./components/pages/userCoursesPage/userCoursesPage";
import TaughtCoursesPage from "./components/pages/taughtCoursesPage/taughtCoursesPage";
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
            <DeletePopupContainer/>
            <ToastContainer/>
            <div className={"content"}>
                <Routes>
                    <Route path="/"
                           element={<PrivateRoute component={<MainPage/>}/>}/>
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
                           element={<PrivateRoute component={<UserCoursesPage/>} role={["isStudent"]}/>}/>
                    <Route path="/courses/teaching"
                           element={<PrivateRoute component={<TaughtCoursesPage/>} role={["isTeacher"]}/>}/>
                    <Route path="/courses/:id"
                           element={<PrivateRoute component={<CoursePageContainer/>}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}




