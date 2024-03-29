import React, { useState, useRef } from 'react';
import hiking from "../assets/hiking.png";
import hiking2 from "../assets/hiking2.png";
import boxing from "../assets/boxing.mp4"; // Replace with your actual video file path
import "./Aboutme.css";

function Aboutme() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <h2>About Me</h2>
      <p>Hobbies:</p>
      <img className="hiking" src={hiking} alt="hike" />
      <p>One of the things I love to do are hiking with my wife and dog name Daisy.</p>
      <img className="views" src={hiking2} alt="views" />
      <p>These are some of the hiking places I have taken pictures of in Ohio.</p>


      {/* Video element with play and stop buttons */}
      <video ref={videoRef} width="300" height="200" controls>
        <source src={boxing} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>My main exercise is boxing. I am also a big boxing fan! </p>

    </div>
  );
}

export default Aboutme;