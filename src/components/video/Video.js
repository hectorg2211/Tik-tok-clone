import React, { useRef, useState } from "react";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";
import "./video.scss";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoClick = () => {
    if (!playing) videoRef.current.play();
    else videoRef.current.pause();
    setPlaying(!playing);
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoClick}
        className="video__player"
        loop
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
