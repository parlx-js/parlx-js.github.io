import React from 'react';
import { faBan } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const DisableUserAgents = () => {
  return (
    <Preview
      title="Disable parallax effect on selected user agents"
      icon={faBan}
    >
      <p>
        To disable parallax effect on selected user agents on single element use
        following code in div tag:
      </p>
      <pre className="language-html">
        <code>&#60;div data-exclude="/(iPod|iPhone|iPad|Android)/"></code>
      </pre>

      <br />

      <p>
        To disable parallax effect on selected user agents on all elements place
        in options:
      </p>
      <pre className="language-javascript">
        <code>exclude: /(iPod|iPhone|iPad|Android)/</code>
      </pre>
    </Preview>
  );
};
