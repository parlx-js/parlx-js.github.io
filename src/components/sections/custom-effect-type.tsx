import React from 'react';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Docs from '../docs';

export const CustomEffectType = () => {
  return (
    <Docs title="Parallax effect type" icon={faMapSigns}>
      <p>To set type of parallax effect use following code in div tag:</p>
      <pre className="language-html">
        <code>&#60;div data-type="foreground"></code>
      </pre>

      <br />

      <p>To set type of parallax effect on all elements place in options:</p>
      <pre className="language-javascript">
        <code>type: 'foreground'</code>
      </pre>
    </Docs>
  );
};
