import React from 'react';
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const CustomHeight = () => {
  return (
    <Preview title="Custom height" icon={faRulerVertical}>
      <p>
        To set custom height to single element use following code in div tag:
      </p>
      <pre className="language-html">
        <code>&#60;div data-height="700px"></code>
      </pre>

      <br />

      <p>To set custom height to all elements place in options:</p>
      <pre className="language-javascript">
        <code>height: '700px'</code>
      </pre>
    </Preview>
  );
};
