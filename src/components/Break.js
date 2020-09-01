import React,{Component} from 'react';

class Break extends Component{
        
    render(){
       return(
          <div className='top-left'>
              <h2 className='break-title' style={{textAlign:'center'}}>Break Length</h2>

              <h3 className='length'>{this.props.breakLength}</h3>
                
              <i onClick={this.props.plus} className="fas fa-plus-circle plus"></i>

              <i onClick={this.props.minus} className="fas fa-minus-circle minus"></i>
          </div>
       )
   }
}

export default Break;