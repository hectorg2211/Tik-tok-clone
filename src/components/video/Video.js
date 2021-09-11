import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import "./video.scss";

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  onVideoClick,
  index,
  selectedVideo,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (index === selectedVideo && !playing) {
      videoRef.current.play();
    } else videoRef.current.pause();
  });

  const doSomething = () => {
    if (index === selectedVideo && playing) {
      setPlaying(false);
    } else if (index === selectedVideo && !playing) {
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={() => {
          onVideoClick(index);
          doSomething();
        }}
        className="video__player"
        loop
        src={url}
      ></video>
      <div
        className="video__play-button"
        onClick={() => {
          doSomething();
          onVideoClick(index);
        }}
      >
        {!(index === selectedVideo && !playing) ? (
          <PlayArrowRoundedIcon fontSize="large" />
        ) : null}
      </div>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
