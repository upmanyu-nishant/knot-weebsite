import React from 'react';
import KnotVideo from './KnotVideo';

const knots = [
  {
    name: 'Bowline',
    videoSrc: '/src/assets/videos/bowline.mp4',
    description: 'The Bowline knot creates a fixed loop at the end of a rope.'
  },
  {
    name: 'Figure-Eight',
    videoSrc: '/src/assets/videos/figure-eight.mp4',
    description: 'The Figure-Eight knot is used to create a stopper knot.'
  },
  {
    name: 'Clove Hitch',
    videoSrc: '/src/assets/videos/clove-hitch.mp4',
    description: 'The Clove Hitch is used to secure a rope to a post or tree.'
  }
];

const KnotGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {knots.map((knot) => (
        <div key={knot.name} className="bg-gray-800 text-white rounded-lg p-4">
          <h2 className="text-xl font-bold">{knot.name}</h2>
          <KnotVideo videoSrc={knot.videoSrc} />
          <p className="mt-2">{knot.description}</p>
        </div>
      ))}
    </div>
  );
};

export default KnotGallery;