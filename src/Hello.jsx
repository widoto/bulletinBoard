import React from "react";
import "./Hello.css";
import styled from 'styled-components';

function Hello(){
    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `
    const PracticeStyle={
        marginTop : '10px',
        backgroundColor: 'blue'
    }
    return (
        
        <>
        <div style={PracticeStyle}>Helloooooooooo</div>
        <div class="red">Helloooooooooo</div>
        <div style={{marginTop: '10px', backgroundColor:'red'}}>Hello World!</div>
        <StyledButton>나만의 버튼</StyledButton>
        </>

    );
}

export default Hello;
