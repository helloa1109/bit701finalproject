import React from 'react';
import {Home, Menu} from "./components";
import {Route, Routes} from "react-router-dom";
import {LoginForm, MemberForm, MemberList} from "./member";
import {BoardForm, BoardList} from "./board";
import homin from "./image/homin.gif";
import dog from "./image/dog.jpg";
import BoardDetailPage from "./board/BoardDetailPage";

function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<LoginForm/>}/>

                <Route path={'/member'}>
                    <Route path={'form'} element={<MemberForm/>}/>
                    <Route path={'list'} element={<MemberList/>}/>
                </Route>

                <Route path={'/board'}>
                    <Route path={'form'} element={<BoardForm/>}/>
                    <Route path={'list'} element={<BoardList/>}/>
                    <Route path={'list/:currentPage'} element={<BoardList/>}/>
                    <Route path={'detail/:num'} element={<BoardDetailPage/>}/>
                </Route>

                <Route path={'*'} element={
                    <div>
                        <h1>error 404error 404error 404error 404</h1>
                        <img alt={''} src={homin}/>
                        <img alt={''} src={dog}/>
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;