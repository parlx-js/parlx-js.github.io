import React from 'react';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const HowToInstall = () => {
  return (
    <Preview title="How to install" icon={faArrowCircleDown}>
      {/* <HelloWorld /> */}
      <p>npm / Yarn:</p>
      <pre className="language-javascript">
        <code>$ npm install parlx.js</code>
        <br />
        <code>$ yarn add parlx.js</code>
      </pre>

      <p>HTML script tag:</p>
      <pre className="language-html">
        <code>&#60;script src="/path/to/parlx.js"&#62;&#60;/script&#62;</code>
      </pre>

      {/* <p>CDNs:</p>
      <p>
        bundle.run: <code>https://bundle.run/parlx.js</code>
        <br />
        jsDelivr: <code>https://cdn.jsdelivr.net/npm/parlx.js/</code>
        <br />
        unpkg: <code>https://unpkg.com/parlx.js/</code>
      </p> */}
    </Preview>
  );
};
