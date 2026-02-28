import React from 'react';
import { useParams } from 'react-router-dom';
import KnotVideo from '../components/KnotVideo';

const KnotDetail = () => {
    const { knotName } = useParams();

    const knotVideos = {
        bowline: 'bowline.mp4',
        figureEight: 'figure-eight.mp4',
        cloveHitch: 'clove-hitch.mp4',
    };

    const videoSrc = knotVideos[knotName] || '';

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{knotName.replace('-', ' ')}</h1>
            <KnotVideo videoSrc={videoSrc} />
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">How to Tie the {knotName.replace('-', ' ')}</h2>
                <p className="mt-2">Step-by-step instructions will be provided here.</p>
            </div>
        </div>
    );
};

export default KnotDetail;