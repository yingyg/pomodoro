import React,{Component} from 'react';

class Counter extends Component{
    
    render(){

        const redGreenColor={color:this.props.totalSeconds<60?'red':'green'};
 
        return(
          <div className='top'>
            <div className='title' >{this.props.title}</div>
            <div className='timer' style={redGreenColor} >{this.props.timer}</div>
            
            <span onClick={this.props.startOrPause} className='start-pause' >
               <i className="fas fa-play"></i>
               <i className="fas fa-pause"></i>
            </span>
            
            <i onClick={this.props.refresh} className="fas fa-sync-alt refresh" ></i>
            
          </div>
        )
    }
}

export default Counter;