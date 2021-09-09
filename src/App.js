import React, { useState, useEffect } from "react";
import Video from "./components/video/Video";
import db from "./components/firebase";
import "./app.scss";

function App() {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      // Getting data from the database
      const snapshot = await db.collection("videos").get();
      setVideos(snapshot.docs.map((doc) => doc.data()));
    };

    getVideos();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
