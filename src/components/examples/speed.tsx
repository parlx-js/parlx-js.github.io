import React from 'react';
import ReactParlx from 'react-parlx';

import { Preview } from '../preview';

export const Speed = () => {
  return (
    <Preview>
      <ReactParlx className="parallax" overlay>
        <img
          className="parlx-children"
          // src={sanFrancisco}
          alt="san-francisco"
        />
        <h3 className="parallax-marker">0.3</h3>
      </ReactParlx>

      <ReactParlx className="parallax" settings={{ speed: '-0.3' }} overlay>
        <img
          className="parlx-children"
          // src={italy}
          alt="italy"
        />
        <h3 className="parallax-marker">-0.3</h3>
      </ReactParlx>
    </Preview>
  );
};
