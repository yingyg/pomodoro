import React from 'react';
import Sound from 'react-sound';
 
class Beep extends React.Component {
  render() {
    return (
       
      <Sound
      url="./beep-08b.mp3"
      playStatus={Sound.status.PLAYING}
      
      />

    )
  }
}
export default Beep;