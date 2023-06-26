import React, {useState} from 'react';
import "../App.css";
import {useNavigate} from "react-router-dom";
import {Photo} from "@mui/icons-material";
import Axios from "axios";
function BoardForm(props) {

    const [subject,setSubject]=useState('');
    const [photo,setPhoto]=useState('');
    const [content,setContent]=useState('');

    const navi=useNavigate();

    //이미지 경로
    const photoUrl=process.env.REACT_APP_BOARDURL;

    //세션 스토리지에 저장된 아이디와 이름 가져오기
    const myid=sessionStorage.myid;
    const myname=sessionStorage.myname;

    const onSubmitEvent=(e)=>{
        e.preventDefault();
    }

    // 파일 업로드
    const onUploadEvent=(e)=>{
        const uploadFile=new FormData();
        uploadFile.append("upload",e.target.files[0]);
        Axios({
            method:'post',
            url:'/board/upload',
            data:uploadFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);
        })

    }
    return (
        <div>
            <form onSubmit={onSubmitEvent}>
                <table className={'table table-bordered'} style={{width:'auto',marginTop:'50px',marginLeft:'35px'}}>
                    <tbody>

                        <tr>
                            <th style={{backgroundColor:'#F7E600',width:'100px',color:'white'}}>제목</th>
                            <td>
                                <input type={'text'} required onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                            </td>
                        </tr>

                        <tr>
                            <th style={{backgroundColor:'#F7E600',width:'100px',color:'white'}}>사진</th>
                            <td>
                                <label htmlFor="file-upload" className="custom-file-upload" onChange={onUploadEvent}>
                                    파일선택
                                </label>
                                <input id="file-upload" type="file" onChange={onUploadEvent} style={{display:'none'}}/>
                            </td>
                        </tr>

                        <tr>
                            <th style={{backgroundColor:'#F7E600',width:'100px',color:'white'}}>내용</th>
                            <td>
                                <textarea required onChange={(e)=>setContent(e.target.value)} value={content}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align={'center'}>
                                <button type={'submit'} className={'form_btn'}>
                                    글저장
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <img alt={''} src={`${photoUrl}${photo}`}
                 style={{width:'200px',position:'absolute',left:'500px',top:'150px'}}/>
        </div>
    );
}

export default BoardForm;