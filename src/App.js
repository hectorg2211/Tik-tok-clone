import React, { useState, useEffect } from "react";
import Video from "./components/video/Video";
import db from "./components/firebase";
import "./app.scss";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [prevSelectedVideo, setPrevSelectedVideo] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      // Getting data from the database
      const snapshot = await db.collection("videos").get();
      setVideos(snapshot.docs.map((doc) => doc.data()));
    };
    getVideos();
  }, []);

  /* Function that executes when a video is clicked, it changes the
  selected video and sets a previously played video */
  const onVideoClick = (videoIndex) => {
    setPrevSelectedVideo(selectedVideo);
    setSelectedVideo(videoIndex);
  };

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            { url, channel, description, song, likes, messages, shares },
            index
          ) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
              onVideoClick={onVideoClick}
              index={index}
              selectedVideo={selectedVideo}
              prevSelectedVideo={prevSelectedVideo}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
