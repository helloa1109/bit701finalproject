import React from 'react';
import "../App.css";
function MemberRowList(props) {
    const {idx,row,onDelete} = props;
    return (
        <tr>
            <td>{idx+1}</td>
            <td>{row.myname}</td>
            <td>{row.myid}</td>
            <td>{row.myaddress}</td>
            <td>{row.gaipday}</td>
            <td>
                <button type={'button'} className={'form_btn'}
                onClick={()=>{
                    const b=window.confirm("삭제하려면 확인 눌러요!");
                    if(b){
                        onDelete(row.num);
                    }
                }}>삭제</button>
            </td>
        </tr>
    );
}

export default MemberRowList;