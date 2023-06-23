import React, {useState} from 'react';
import "../App.css";
import {useNavigate} from "react-router-dom";
function LoginForm(props) {
    const [myid, setMyid] = useState('');
    const [mypass, setMypass] = useState('');

    const navi = useNavigate();

    //submin 이벤트
    const onSubmitLogin=(e)=>{
        e.preventDefault();
    }
    return (
        <div className={'table_form'}>
            <form onSubmit={onSubmitLogin}>
                <table className={'table'} style={{width: '650px', height: '250px'}}>
                    <caption align={'top'}><b>회원가입</b></caption>
                    <tbody>
                    <tr>
                        <th style={{width: '100px', backgroundColor: '#f64f59', color: 'white'}}>아이디</th>
                        <td className={'input-group'}>
                            <input type={'text'} className={'form-control'}
                                   placeholder='아이디' required
                                   value={myid} onChange={(e) => {
                                setMyid(e.target.value)}}/>

                            <button type={'button'} className={'form_btn'}>중복확인</button>
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
                                    className={'form_btn'}>가입하기
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