import React from "react";

const Video = () => {
  return (
    <video
      src='pexels-alena-darmel-6950902.mp4'
      loop
      autoPlay
      muted
      className='w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 '
    ></video>
  );
};

export default Video;
