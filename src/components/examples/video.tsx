import React from 'react';
import ReactParlx from 'react-parlx';

export const Video = () => {
  return (
    <section className="split-view">
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
    </section>
  );
};
