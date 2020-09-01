import React from 'react';
import Break from './components/Break';
import Session from './components/Session';
import Counter from './components/Counter';
import Beep from './components/Beep';
import './App.css';

var interval;

class App extends React.Component {
  constructor(){
    super();
    this.state={
      breakInSeconds:5*60,
      breakInMinutes:5,
      sessionInSeconds:25*60,
      sessionInMinutes:25,
      isSession:true,
      shouldStart:true
    }
    this.countDown=this.countDown.bind(this)
  }
  
  handleBreakPlus(){
    if(this.state.breakInMinutes<60&&this.state.shouldStart){
      this.setState({
      breakInSeconds:this.state.breakInMinutes*60+60,
      breakInMinutes:this.state.breakInMinutes+1
    })
    }
  }
  handleSessionPlus(){
    if(this.state.sessionInMinutes<60&&this.state.shouldStart){
      this.setState({
      sessionInSeconds:this.state.sessionInMinutes*60+60,
      sessionInMinutes:this.state.sessionInMinutes+1
      })
    }
  }
  handleBreakMinus(){
    if(this.state.breakInMinutes>1&&this.state.shouldStart){
      this.setState({
      breakInSeconds:this.state.breakInMinutes*60-60,
      breakInMinutes:this.state.breakInMinutes-1
      })
    }
    
  }
  handleSessionMinus(){
    if(this.state.sessionInMinutes>1&&this.state.shouldStart){
      this.setState({
      sessionInSeconds:this.state.sessionInMinutes*60-60,
      sessionInMinutes:this.state.sessionInMinutes-1
      })
    }
  }

  countDown(){  
    if(this.state.isSession){
      if(this.state.sessionInSeconds===0){
        this.setState({
          sessionInSeconds:this.state.sessionInMinutes*60,
          isSession:!this.state.isSession});
        
      }else {
        this.setState({
          sessionInSeconds:this.state.sessionInSeconds-1
        })
      }
    }else{
      if(this.state.breakInSeconds===0){  
        this.setState({
          breakInSeconds:this.state.breakInMinutes*60,
          isSession:!this.state.isSession});
        
      }else {
        this.setState({
          breakInSeconds:this.state.breakInSeconds-1
        })
      }
    }      
  }

  startOrPause(){
    
    if(this.state.shouldStart){
      interval=setInterval(this.countDown, 1000);
    }else{
      clearInterval(interval);
    }
    this.setState({
      shouldStart:!this.state.shouldStart
    })
    
  }
  
  refresh(){
    this.setState({
      breakInSeconds:5*60,
      breakInMinutes:5,
      sessionInSeconds:25*60,
      sessionInMinutes:25,
      isSession:true,
      shouldStart:true
    })
    this.startOrPause();
  }

  render(){
    const title=this.state.isSession?<h2>Session </h2>:<h2>Break</h2>;
    const totalSeconds=this.state.isSession?this.state.sessionInSeconds:this.state.breakInSeconds;
    const secs=totalSeconds%60;
    const mins=(totalSeconds-secs)/60;
    const timer=<h2>{mins<10? '0'+mins:mins}:{secs<10? '0'+secs:secs}</h2>;
   
    return (
      <div className="App">
        <div className='container'>
          <h1>Pomodoro Clock</h1>
          <div className='top'>
            <Break plus={this.handleBreakPlus.bind(this)} minus={this.handleBreakMinus.bind(this)} breakLength={this.state.breakInMinutes}/>

            <Session plus={this.handleSessionPlus.bind(this)} minus={this.handleSessionMinus.bind(this)} sessionLength={this.state.sessionInMinutes}/>
          </div>

          {totalSeconds===0 && <Beep />}

          <Counter title={title} timer={timer} startOrPause={this.startOrPause.bind(this)}  refresh={this.refresh.bind(this)} totalSeconds={this.state.isSession?this.state.sessionInSeconds:this.state.breakInSeconds}/>
        </div>
      </div>
    );
  }
}

export default App;
