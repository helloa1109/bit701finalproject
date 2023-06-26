import React from 'react';
import "../App.css";
import {useNavigate, useParams} from "react-router-dom";
function BoardList(props) {

    const navi=useNavigate();

    const {currentPage}=useParams();
    console.log({currentPage});

    const onWriteButtonEvent=()=>{
        if(sessionStorage.loginok==null){
            alert("로그인 먼저 해랏!");
            navi("/login");
        }else {
            navi("/board/form");
        }
    }
    return (
        <div>
            <button type={'button'} className={'form_btn'}
            style={{marginLeft:'35px',marginTop:'50px'}}
            onClick={onWriteButtonEvent}>글작성</button>
        </div>
    );
}

export default BoardList;