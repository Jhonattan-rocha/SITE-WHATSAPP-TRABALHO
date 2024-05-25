import React from "react";
import history from "../services/history"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
    
export default function Protected(props){
    const isLoggedIn = useSelector(state => {
        return state.authreducer.isLoggedIn;
    })

    if(props.isClosed && !isLoggedIn){
        history.go("/login");
        return <Login></Login>;
    };

    return props.children
}

Protected.defaultProps = {
    isClosed: false
}

Protected.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool
}
