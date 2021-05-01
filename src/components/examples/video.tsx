import React from 'react';
import ReactParlx from 'react-parlx';

import { Preview } from '../preview';

export const Video = () => {
  return (
    <Preview>
      <ReactParlx className="parallax" overlay>
        <video
          className="parlx-children"
          // src={night}
          autoPlay
          playsInline
          loop
          muted
        />
        <h3 className="parallax-marker">Not only images!</h3>
      </ReactParlx>
    </Preview>
  );
};
