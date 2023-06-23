import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteMain from "./RouteMain";
import 'bootstrap/dist/css/bootstrap.min.css';

function Root(props) {
    return (
        <BrowserRouter>
            <RouteMain/>
        </BrowserRouter>
    );
}

export default Root;