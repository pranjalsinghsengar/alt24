import React from "react";

const Video = ({ videoRef }) => {
  return (
    <video
      ref={videoRef}
      src='pexels-alena-darmel-6950902.mp4'
      loop
      autoPlay
      muted
      className='w-full h-full -z-20 object-cover fixed '
    ></video>
  );
};

export default Video;
