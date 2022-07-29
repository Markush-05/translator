import React from 'react';
import './audio-play.css';

//const audio = 'C:\Users\MaRuSh\dictionary\src\audio\enables.mp3'

//mport icon from '../../audio/enables.mp3';



import icon from './enables.mp3';


const audioRid = () => {

  new Audio(icon).play();

  //const audio = new Audio(icon).play(); //https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3

}

const AudioPlay = () => {
  return (
    <div className="audio-btn">
       <button type="button" className="btn btn-info audio-btn__ply "
        onClick={audioRid}></button>


    </div>
  );
};

export default AudioPlay;
