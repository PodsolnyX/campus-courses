import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/other/navbar/navbar";
import MainPage from "./components/pages/mainPage/mainPage";
import LoginPage from "./components/pages/loginPage/loginPage";
import RegistrationPage from "./components/pages/registrationPage/registrationPage";
import ProfilePage from "./components/pages/profilePage/profilePage";
import DeletePopupContainer from "./components/modals/deletePopup/deletePopupContainer";
import GroupsPageContainer from "./components/pages/groupsPage/groupsPageContainer";
import ConcreteGroupPageContainer from "./components/pages/concreteGroupPage/concreteGroupPageContainer";
import UserCoursesPage from "./components/pages/userCoursesPage/userCoursesPage";
import TaughtCoursesPage from "./components/pages/taughtCoursesPage/taughtCoursesPage";
import NotFoundPage from "./components/pages/notFoundPage/notFoundPage";
import CoursePage from "./components/pages/coursePage/coursePage";
import Footer from "./components/other/footer/footer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <DeletePopupContainer/>
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/groups" element={<GroupsPageContainer/>}/>
                    <Route path="/groups/:id" element={<ConcreteGroupPageContainer/>}/>
                    <Route path="/courses/my" element={<UserCoursesPage/>}/>
                    <Route path="/courses/teaching" element={<TaughtCoursesPage/>}/>
                    <Route path="/courses/:id" element={<CoursePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
