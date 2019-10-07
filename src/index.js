import React from 'react';
import ReactDOM from 'react-dom';
import LeftBody from './leftBody'
import RightBody from './rightBody'
import './index.css'

const tempStyle={display:"flex",}

class Index extends React.Component
{   
    constructor(props)
    {
        super(props)   
        this.state = {                      
            schedule : [],
            search : [],
            renderBool : true,
            group : null,                        
        }

        this.getSchedule = this.getSchedule.bind(this)
        this.deleteSchedule = this.deleteSchedule.bind(this)
        this.findList = this.findList.bind(this)
    }
    getSchedule(textValue) 
    {        
        if(textValue !== '')
        {
            this.setState({
                schedule : [...this.state.schedule, {text : textValue}],             
                search : [...this.state.schedule, {text : textValue}],             
            }) 
        }      
    }
    deleteSchedule(textValue) // 어떻게 찾아서 삭제할까
    {       
        console.log('textValue',textValue)
        console.log("schedule-before", this.state.schedule)

        this.setState({            // text로 시도할 경우 안되는 경우가 많으므로 ID로 시도를 하자
            schedule : this.state.schedule.filter(val => val.text === textValue),    
        })
        console.log("schedule-after", this.state.schedule)
    }           
    findList(event) // 검색한 내용을 배열로 모으는데 성공, 근데 어떻게 화면에 뿌리냐
    {                
        //let bool = this.state.renderBool === true ? false : true
        console.log(event)   // 모은 배열
        this.setState({
            search : this.state.search.filter(val => val.text === event),
            renderBool : !this.state.renderBool
        })
        console.log("부울값을 내놓아라", this.state.renderBool)
        console.log("검색 후 리스트", this.state.search)
    }
    render()
    {
        console.log("state.Schedule",this.state.schedule)
        console.log("state.search",this.state.search)

        return (
            <div id = "total" style={tempStyle}>
                <LeftBody findList = {this.findList}/>
                <RightBody 
                    renderBool = {this.state.renderBool} 
                    BsearchList = {this.state.search} 
                    schedule = {this.state.schedule} 
                    getSchedule = {this.getSchedule.bind(this)} 
                    deleteSchedule = {this.deleteSchedule.bind(this)} 
                />
            </div>
        )
    }
}

  ReactDOM.render(<Index />, document.getElementById("root"));