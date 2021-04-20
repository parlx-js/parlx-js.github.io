import React from 'react';

// import HelloWorld from '../../docs/how-to-install.md'
import Preview from '../preview';

export const CustomElements = () => {
  return (
    <Preview
      title={
        <>
          <span role="img" aria-label="party">
            🎉
          </span>{' '}
          Videos, divs and other HTML5 tags since v1.2.0{' '}
          <span role="img" aria-label="party">
            🎉
          </span>
        </>
      }
    >
      <p>
        To assign parallax children add <code>class="parlx-children"</code> to
        element inside of parallax container e.g:
      </p>
      <pre className="language-html">
        <code>&#60;video class="parlx-children" src="sample.mp4"></code>
      </pre>
    </Preview>
  );
};
