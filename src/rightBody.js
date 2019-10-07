/**
 * 1. (검색, 그룹명) 으로 구성된 큰 단락과 (제목, 리스트)로 구성될 큰 단락을 여기서 만들어준다.
 */
import React from 'react';
import Schedule from './schedule'
import RightFooter from './rightFooter'

let style = { 
  position: 'relative',
  marginRight: '1vw',
  textAlign: 'center',
  border: "groove", 
  borderWidth: "0.1vw"
}

const RightBody = (props) => {

  console.log('오른쪽 props', props)
  let selectResult = null;

  if(props.renderBool === true)
  {
    selectResult = props.schedule
  }
  else
  {
    selectResult = props.searchList
  }
  
  return (
    <div id="rightBody" style = {style}>
      <div id="title">        
        <h1> 스케쥴 </h1>
          { 
              selectResult.map((val,i) => <Schedule key = {i} schedule = {val} deleteSchedule = {props.deleteSchedule}/>)
          }
        <RightFooter getSchedule = {props.getSchedule}/>  
      </div>
    </div>
  )
}



export default RightBody