// src/components/VideoNarrative.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';

const videoUrls = {
  BOLD: 'https://example.com/video-bold.mp4',
  VETS: 'https://example.com/video-vets.mp4',
  WOTM: 'https://example.com/video-wotm.mp4',
  PRIDE: 'https://example.com/video-pride.mp4',
};

function VideoNarrative() {
  const { field } = useParams();
  const videoUrl = videoUrls[field];

  return (
    <div>
      <h2>{field} Narrative</h2>
      <video controls src={videoUrl} width="600" />
      <Link to={`/game/${field}`}><button>Start Game</button></Link>
    </div>
  );
}

export default VideoNarrative;
