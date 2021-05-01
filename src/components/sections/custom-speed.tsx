import React from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Docs from '../docs';

export const CustomSpeed = () => {
  return (
    <Docs title="Custom speed" icon={faTachometerAlt}>
      <p>
        To set custom speed to single element use following code in div tag:
      </p>
      <pre className="language-html">
        <code>&#60;div data-speed="0.1"&#62;</code>
      </pre>

      <br />

      <p>To set custom speed to all elements place in options:</p>
      <pre className="language-javascript">
        <code>speed: 0.1</code>
      </pre>
    </Docs>
  );
};
