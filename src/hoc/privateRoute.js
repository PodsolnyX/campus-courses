import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = (props) => {

    if (props.unauthorized) {
        return !props.isAuth ? props.component : <Navigate to="/" />;
    }

    return (props.isAuth && !props.role) || (props.isAuth && props.userRoles[props.role] === true)
        ? props.component : <Navigate to="/login" />;
};

let mapStateToProps = (state, props) => {
    return {
        isAuth: state.user.isAuth,
        userRoles: state.user.userRoles,
        component: props.component,
        role: props.role,
        unauthorized: props.unauthorized
    };
}

export default connect(mapStateToProps)(PrivateRoute);

