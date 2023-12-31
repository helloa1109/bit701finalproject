import React, {useState} from 'react';
import "../App.css";
import {useNavigate} from "react-router-dom";
import Axios from "axios";
function LoginForm(props) {
    const [myid, setMyid] = useState('');
    const [mypass, setMypass] = useState('');

    const navi = useNavigate();

    //submin 이벤트
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const url = '/member/login';
        const data = {
            myid: myid,
            mypass: mypass,
        };

        Axios.post(url, data)
            .then((res) => {
                if (res.data.success === 'yes') {
                    // 로그인 성공 시 처리
                    sessionStorage.loginok = 'yes';
                    sessionStorage.myname = res.data.myname;
                    sessionStorage.myid = myid;
                    window.location.reload();
                    navi('/');
                } else {
                    // 로그인 실패 시 처리
                    alert('아이디나 비밀번호가 맞지 않습니다');
                    sessionStorage.loginok = 'no';
                    sessionStorage.myname = '';
                    sessionStorage.myid = '';
                }
            });
    };

    return (
        <div className={'table_form'}>
            <form onSubmit={onSubmitLogin}>
                <table className={'table'} style={{width: '650px', height: '250px'}}>
                    <caption align={'top'}><b>로그인</b></caption>
                    <tbody>
                    <tr>
                        <th style={{width: '100px', backgroundColor: '#f64f59', color: 'white'}}>아이디</th>
                        <td className={'input-group'}>
                            <input type={'text'} className={'form-control'}
                                   placeholder='아이디' required
                                   value={myid} onChange={(e) => {
                                setMyid(e.target.value)}}/>

                        </td>
                    </tr>

                    <tr>
                        <th style={{width: '100px', backgroundColor: '#f64f59', color: 'white'}}>비밀번호</th>
                        <td>
                            <input type={'password'} className={'form-control'}
                                   required
                                   value={mypass} onChange={(e) => setMypass(e.target.value)}/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2} align={'center'}>
                            <button type={'submit'} style={{width: '100px'}}
                                    className={'form_btn'}>로그인
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default LoginForm;