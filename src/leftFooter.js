
import React from 'react';

let footerStyle = {bottom: 0, display: "flex", position: "absolute"}
let buttonStyle = { 
  border: "none",
  backgroundColor: "FFFAFA",
  fontSize: "1.5vw",
  marginLeft: "1vw",
  marginRight: "1vw",
  marginBottom: "1.5vh",
  width: "16vw",
  height: "5vh",
  marginTop: "1.5vh"
}

const LeftFooter = () => (
    <div id ="leftBody-footer" style = {footerStyle}>
        <button style = {buttonStyle}>그룹 추가</button>
      </div>
)

export default LeftFooter