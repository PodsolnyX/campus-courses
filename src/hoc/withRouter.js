import React from 'react';
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom';

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        const [searchParams, setSearch] = useSearchParams();

        return <Component {...props} router={{ location, navigate, params, searchParams }} />;
    }

    return ComponentWithRouterProp;
}