import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const MainPage = () => {

    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <div className={"main-page-bg"}>
            <div className={"h-75 d-flex align-items-center justify-content-end  me-3"}>
                <div className={"row"}>
                    <h2 className="text-white fw-light fs-1 col-12 text-center">Добро пожаловать в систему<br/>Кампусных курсов</h2>
                    <div className={"col-12 d-flex justify-content-center mt-4"}>
                        {
                            isAuth ?
                                <Link to={"/groups"}>
                                    <Button variant={"light"} size={"lg"} className={"px-5 py-3"}>Группы курсов</Button>
                                </Link>
                                :
                                <Link to={"/login"}>
                                    <Button variant={"light"} size={"lg"} className={"px-5 py-3"}>Войти</Button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;