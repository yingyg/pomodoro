import React,{Component} from 'react';

class Session extends Component{
       
    render(){
      return(
        <div className='top-right'>
           <h2 style={{textAlign:'center'}} className='session-title'>Session Length</h2>
           <h3 className='length'>{this.props.sessionLength}</h3>
           <i onClick={this.props.plus.bind(this)} className="fas fa-plus-circle plus"></i>
           <i onClick={this.props.minus.bind(this)} className="fas fa-minus-circle minus"></i>
        </div>
      )
    }
}

export default Session;