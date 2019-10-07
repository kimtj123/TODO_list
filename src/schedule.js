import React from 'react';

let scheduleStyle = 
{
    display : 'flex',
    border: "0.1vw groove"
}
let deleteStyle = {
    border: "none", 
    backgroundColor: "white", 
    color: "gray", 
    fontSize: "1.5vw", 
    marginLeft: "1vw", 
    width: "2vw", 
    height: "3.6vh", 
    marginTop: "1.5vh", 
    marginRight: "1vw" 
}

let checkboxStyle = {width : "3vw", height: "3vh",marginTop: "1.75vh"}
let textStyle = {width: "72vw", height: "3vh", border: "0.1vw groove"}

class Schedule extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            value : []
        }

        this.deleteReturn = this.deleteReturn.bind(this);
        // this.deleteValue = this.deleteValue.bind(this);
        
    }
    deleteReturn()
    {
        console.log(this.props.schedule)
        this.setState({
            value : this.state.value.concat(this.props.schedule.text)            
         })        
        let val = this.state.value
        this.props.deleteSchedule(val)   
    }    
    render(){
        console.log("this.state", this.state)
        console.log("this.state.value", this.state.value)

        return ( 
        <div className = "schedule" style = {scheduleStyle}>
            <input className = "completeButton" type = "checkbox" style = {checkboxStyle}></input>
            <p className = "scheduleText" style = {textStyle} >{this.props.schedule.text}</p>
            <button className = "deleteButon" style ={deleteStyle} onClick = {this.deleteReturn}>X</button>
        </div>
    )}
}

export default Schedule