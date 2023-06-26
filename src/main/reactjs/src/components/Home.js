import React from 'react';
import "../App.css";
import sry from "../kane.gif"
function Home(props) {
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'50px'}}>방문해주셔서 감사합니다</h1>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img alt={''} src={sry} style={{width:'700px'}} className={'sorry'}/>
            </div>
        </div>
    );
}

export default Home;