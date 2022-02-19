import React from "react";
const Video = ({ id, ...props }) => (
  <div {...props}>
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  </div>
);
export default Video;
