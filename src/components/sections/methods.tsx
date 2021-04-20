import React from 'react';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const Methods = () => {
  return (
    <Preview title="Methods" icon={faBoxOpen}>
      <p>Destroy method (v2+)</p>
      <pre className="language-javascript">
        <code>elems.parlx.destroy();</code>
      </pre>
    </Preview>
  );
};
