import React from 'react';
import ReactParlx from 'react-parlx';
// import { StaticImage } from "gatsby-plugin-image"

import { Preview } from '../preview';

export const Direction = () => {
  return (
    <>
      <Preview>
        <ReactParlx className="parallax" overlay>
          <img
            className="parlx-children"
            // src="../../assets/images/einkorn.jpg"
            alt="einkorn"
          />

          <h3 className="parallax-marker">vertical</h3>
        </ReactParlx>

        <ReactParlx
          className="parallax"
          settings={{ direction: 'horizontal' }}
          overlay
        >
          <img
            className="parlx-children"
            // src={india}
            alt="india"
          />
          <h3 className="parallax-marker">horizontal</h3>
        </ReactParlx>
      </Preview>

      <Preview>
        <ReactParlx
          className="parallax"
          settings={{ direction: 'diagonal' }}
          overlay
        >
          <img
            className="parlx-children"
            //  src={satellite}
            alt="satellite"
          />
          <h3 className="parallax-marker">diagonal</h3>
        </ReactParlx>
      </Preview>
    </>
  );
};
