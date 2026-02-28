import React from 'react';

interface KnotVideoProps {
  knotName: string;
}

const KnotVideo: React.FC<KnotVideoProps> = ({ knotName }) => {
  const videoSrc = {
    Bowline: '/src/assets/videos/bowline.mp4',
    'Figure-Eight': '/src/assets/videos/figure-eight.mp4',
    'Clove Hitch': '/src/assets/videos/clove-hitch.mp4',
  }[knotName];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{knotName} Knot Tutorial</h2>
      <video
        className="w-full max-w-lg"
        controls
        src={videoSrc}
        title={`${knotName} Knot Tutorial`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default KnotVideo;