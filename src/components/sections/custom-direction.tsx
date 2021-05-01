import React from 'react';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Docs from '../docs';

export const CustomDirection = () => {
  return (
    <Docs title="Parallax effect direction" icon={faDirections}>
      <p>
        To disable parallax effect on mobile on single element use following
        code in div tag:
      </p>
      <pre className="language-html">
        <code>data-direction="vertical"</code>
      </pre>

      <br />

      <p>To disable parallax effect on all elements place in options:</p>
      <pre className="language-javascript">
        <code>direction: 'vertical'</code>
      </pre>
    </Docs>
  );
};
