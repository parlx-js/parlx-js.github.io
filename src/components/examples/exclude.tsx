import React from 'react';
import ReactParlx from 'react-parlx';

import { Preview } from '../preview';

export const Exclude = () => {
  return (
    <Preview>
      <ReactParlx
        className="parallax"
        settings={{ exclude: /(Firefox|iPad)/ }}
        overlay
      >
        <img
          className="parlx-children"
          // src={architecture}
          alt="architecture"
        />
        <h3 className="parallax-marker">Exclude Firefox & iPad</h3>
      </ReactParlx>
    </Preview>
  );
};
