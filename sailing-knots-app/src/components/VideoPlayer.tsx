import React from 'react';

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="flex justify-center">
      <video
        className="w-full max-w-lg rounded-lg shadow-lg"
        controls
        src={videoSrc}
        title="Knot Tutorial Video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;