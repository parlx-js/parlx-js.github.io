import React, { useState, useEffect } from 'react';
import ReactParlx from 'react-parlx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

import mountains from '../../images/mountains.jpg';

export default () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  return (
    <header>
      <ReactParlx
        settings={{
          height,
          speed: '-0.3'
          // base: document.getElementById('root')
        }}
        parlxMove={e => setOpacity(1 - e / 80)}
        overlay
      >
        <img className="parlx-children" src={mountains} alt="view" />

        <div className="header-title" style={{ opacity }}>
          <h1>parlx.js</h1>

          <h2>
            Parallax effect library for:
            <br />
            JS, TS, React and jQuery
          </h2>

          <a href="https://github.com/JB1905/parlx.js">
            <FontAwesomeIcon icon={faGithub} />
            See on GitHub
          </a>
        </div>
      </ReactParlx>
    </header>
  );
};
