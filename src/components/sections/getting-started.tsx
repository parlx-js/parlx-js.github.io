import React from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// import HelloWorld from '../../docs/how-to-install.md'
import Docs from '../docs';

export const GettingStarted = () => {
  return (
    <Docs title="Getting Started" icon={faPlayCircle}>
      <p>ES6+:</p>
      <pre className="language-javascript">
        <code>import Parlx from 'parlx.js';</code>
      </pre>

      <p>CommonJS:</p>
      <pre className="language-javascript">
        <code>const Parlx = require('parlx.js');</code>
      </pre>

      <br />

      <p>JavaScript / TypeScript:</p>
      <pre className="language-javascript">
        <code>const elems = document.querySelectorAll('.parallax');</code>
        <br />
        <br />
        <code>{'//'} v2+</code>
        <br />
        <code>const parlx = Parlx.init(&#123;</code>
        <br />
        <code>{'  '}elements: elems,</code>
        <br />
        <code>{'  '}settings: &#123;</code>
        <br />
        <code>{'    //'} options...</code>
        <br />
        <code>{'  '}&#125;,</code>
        <br />
        <code>{'  '}callbacks: &#123;</code>
        <br />
        <code>{'    //'} callbacks...</code>
        <br />
        <code>{'  '}&#125;</code>
        <br />
        <code>&#125;);</code>

        <br />
        <br />

        <code>{'//'} v1+</code>
        <br />
        <code>const parlx = new Parlx(elems, &#123;</code>
        <br />
        <code>{'  //'} options...</code>
        <br />
        <code>&#125;);</code>
      </pre>

      <p>jQuery:</p>
      <pre className="language-html">
        <code>
          &#60;script
          src="https://code.jquery.com/jquery-3.6.0.min.js"&#62;&#60;/script&#62;
        </code>
      </pre>

      <pre className="language-javascript">
        <code>$ npm install jquery</code>
        <br />
        <code>$ yarn add jquery</code>
        <br />
        <code>$ bower install jquery</code>
      </pre>

      <pre className="language-javascript">
        <code>const jQuery = require('jquery');</code>
      </pre>

      <pre className="language-javascript">
        <code>{'//'} v2</code>
        <br />
        <code>$('.parallax').parlx(&#123;</code>
        <br />
        <code>{'  '}settings: &#123;</code>
        <br />
        <code>{'    //'} options...</code>
        <br />
        <code>{'  '}&#125;,</code>
        <br />
        <code>{'  '}callbacks: &#123;</code>
        <br />
        <code>{'    //'} callbacks...</code>
        <br />
        <code>{'  '}&#125;</code>
        <br />
        <code>&#125;);</code>

        <br />
        <br />

        <code>{'//'} v1</code>
        <br />
        <code>$('.parallax').parlx(&#123;</code>
        <br />
        <code>{'  //'} options...</code>
        <br />
        <code>&#125;);</code>
      </pre>
    </Docs>
  );
};
