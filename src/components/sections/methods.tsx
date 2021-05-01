import React from 'react';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Docs from '../docs';

export const Methods = () => {
  return (
    <Docs title="Methods" icon={faBoxOpen}>
      <p>Destroy method (v2+)</p>
      <pre className="language-javascript">
        <code>elems.parlx.destroy();</code>
      </pre>
    </Docs>
  );
};
