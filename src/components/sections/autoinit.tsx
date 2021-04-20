import React from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const AutoInit = () => {
  return (
    <Preview title="Autoinit" icon={faRunning}>
      <p>
        To use it, add <code>data-parlx</code> to html element e.g:
      </p>
      <pre className="language-html">
        <code>&#60;div data-parlx&#62;&#60;/div&#62;</code>
      </pre>
    </Preview>
  );
};
