import React,{Component} from 'react';

class Counter extends Component{
    
    render(){

        const redColor={color:this.props.totalSeconds<60?'#8b3a3a':'black'};
 
        return(
          <div className='bottom'>
            <div className='title' style={redColor}>{this.props.title}</div>
            <div className='timer' style={redColor}>{this.props.timer}</div>
            
            <span onClick={this.props.startOrPause} className='start-pause'>
               <i className="fas fa-play"></i>
               <i className="fas fa-pause"></i>
            </span>
            
            <i onClick={this.props.refresh} className="fas fa-sync-alt refresh"></i>
            
          </div>
        )
    }
}

export default Counter;