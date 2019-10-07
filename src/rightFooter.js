import React from 'react'; 

const rightFooterStyle = {bottom: 0, display: "flex", position: "absolute"}
const inputStyle = {width : "68vw"}
const submitStyle = {width : "7.8vw", height: "4vh"}

class RightFooter extends React.Component
{
   constructor(props)
   {
      super(props)
      this.state = {value : ''}

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});      
   }

   handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);      
      this.props.getSchedule(this.state.value)
      this.setState({
         value : ''
      })
      event.preventDefault();
   }
   render(){
      // map 함수를 이용해서 여러개를 뿌려야 한다.
      return (
         <form id = "rightFooter" style = {rightFooterStyle}>
            <input id = "inputText" type = "text" value={this.state.value} onChange = {this.handleChange} style = {inputStyle}></input>
            <input id = "messageSubmit" type = "submit" style = {submitStyle} value = "submit" onClick = {this.handleSubmit}></input>
         </form>
      )
   }
}
export default RightFooter