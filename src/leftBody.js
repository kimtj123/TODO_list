/**
 * 1. (검색, 그룹명) 으로 구성된 큰 단락과 (제목, 리스트)로 구성될 큰 단락을 여기서 만들어준다.
 */
import React from 'react';
import Group from './group';
import LeftFooter from './leftFooter';
import search_icon from './search_icon.png';
let leftBodystyle = {border: "0.1vw groove",   borderRadius: "4px",borderWidth: "0.3vw", position : 'relative', marginLeft: '1vw', textAlign: 'center',}
let searchBoxStyle = {
  border: "2px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "white",
  backgroundImage: `url(${search_icon})`,
  backgroundPosition: "10px 10px",
  backgroundRepeat: "no-repeat",
  boxSizing: "border-box",

  fontSize: "2.4vw",
  marginTop: "2vh",
  padding:"0.2vh", 
  paddingLeft: "3vw",
  transition: "width 0.4s ease-in-out",
  webkiTransition: "width 0.4s ease-in-out",
  WebkitBorderRadius: "5px", 
  width: "17vw", 
}
    
let groupsStyle = {marginTop: "2vh", height: "72.2vh"  }


const LeftBody = (props) => 
{
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('검색타깃밸류',e.target.value)
      props.findList(e.target.value)
    }
  }

  console.log(props.findList)
  return (
    <div id="leftBody" style ={leftBodystyle}>
      <input id="searchBox" type="text" style = {searchBoxStyle} onKeyDown = {handleKeyDown}  ></input>
      <div id="groups" style = {groupsStyle}>
        <Group/>
      </div>
        <LeftFooter />
    </div>
  )
}



export default LeftBody