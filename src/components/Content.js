import React, { useEffect } from 'react';
import ReactParlx from 'react-parlx';
import {
  faArrowCircleDown,
  faPlayCircle,
  faRunning,
  faBoxOpen,
  faTachometerAlt,
  faRulerVertical,
  faBan,
  faDirections,
  faMapSigns
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Prism from 'prismjs';

import sanFrancisco from '../images/san-francisco.jpg';
import italy from '../images/italy.jpg';
import architecture from '../images/architecture.jpg';
import einkorn from '../images/einkorn.jpg';
import india from '../images/india.jpg';
import satellite from '../images/satellite.jpg';
import night from '../video/night.mp4';

export default () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main>
      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowCircleDown} />
          How to Install
        </h3>

        <p>npm / Yarn:</p>
        <pre className="language-javascript">
          <code>$ npm install parlx.js</code>
          <br />
          <code>$ yarn add parlx.js</code>
        </pre>

        <p>HTML script tag:</p>
        <pre className="language-html">
          <code>&#60;script src="/path/to/parlx.js"&#62;&#60;/script&#62;</code>
        </pre>

        {/* <p>CDNs:</p>
      <p>
        bundle.run: <code>https://bundle.run/parlx.js</code>
        <br />
        jsDelivr: <code>https://cdn.jsdelivr.net/npm/parlx.js/</code>
        <br />
        unpkg: <code>https://unpkg.com/parlx.js/</code>
      </p> */}
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faPlayCircle} />
          Getting Started
        </h3>

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
            src="https://code.jquery.com/jquery-3.4.1.min.js"&#62;&#60;/script&#62;
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
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faRunning} />
          Autoinit
        </h3>

        <p>
          To use it, add <code>data-parlx</code> to html element e.g:
        </p>
        <pre className="language-html">
          <code>&#60;div data-parlx&#62;&#60;/div&#62;</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faBoxOpen} />
          Methods
        </h3>

        <p>Destroy method (v2+)</p>
        <pre className="language-javascript">
          <code>elems.parlx.destroy();</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faTachometerAlt} />
          Custom speed
        </h3>

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
      </section>

      {/* -------------------------------------- */}

      <section className="split-view">
        <ReactParlx className="parallax" overlay>
          <img
            className="parlx-children"
            src={sanFrancisco}
            alt="san-francisco"
          />
          <h3 className="parallax-marker">0.3</h3>
        </ReactParlx>

        <ReactParlx className="parallax" settings={{ speed: '-0.3' }} overlay>
          <img className="parlx-children" src={italy} alt="italy" />
          <h3 className="parallax-marker">-0.3</h3>
        </ReactParlx>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faRulerVertical} />
          Custom height
        </h3>

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
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faBan} />
          Disable parallax effect on selected user agents
        </h3>

        <p>
          To disable parallax effect on selected user agents on single element
          use following code in div tag:
        </p>
        <pre className="language-html">
          <code>&#60;div data-exclude="/(iPod|iPhone|iPad|Android)/"></code>
        </pre>

        <br />

        <p>
          To disable parallax effect on selected user agents on all elements
          place in options:
        </p>
        <pre className="language-javascript">
          <code>exclude: /(iPod|iPhone|iPad|Android)/</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="split-view">
        <ReactParlx
          className="parallax"
          settings={{ exclude: /(Firefox|iPad)/ }}
          overlay
        >
          <img
            className="parlx-children"
            src={architecture}
            alt="architecture"
          />
          <h3 className="parallax-marker">Exclude Firefox & iPad</h3>
        </ReactParlx>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faDirections} />
          Parallax effect direction
        </h3>

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
      </section>

      {/* -------------------------------------- */}

      <section className="split-view">
        <ReactParlx className="parallax" overlay>
          <img className="parlx-children" src={einkorn} alt="einkorn" />
          <h3 className="parallax-marker">vertical</h3>
        </ReactParlx>

        <ReactParlx
          className="parallax"
          settings={{ direction: 'horizontal' }}
          overlay
        >
          <img className="parlx-children" src={india} alt="india" />
          <h3 className="parallax-marker">horizontal</h3>
        </ReactParlx>
      </section>

      {/* -------------------------------------- */}

      <section className="split-view">
        <ReactParlx
          className="parallax"
          settings={{ direction: 'diagonal' }}
          overlay
        >
          <img className="parlx-children" src={satellite} alt="satellite" />
          <h3 className="parallax-marker">diagonal</h3>
        </ReactParlx>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <FontAwesomeIcon icon={faMapSigns} />
          Parallax effect type
        </h3>

        <p>To set type of parallax effect use following code in div tag:</p>
        <pre className="language-html">
          <code>&#60;div data-type="foreground"></code>
        </pre>

        <br />

        <p>To set type of parallax effect on all elements place in options:</p>
        <pre className="language-javascript">
          <code>type: 'foreground'</code>
        </pre>
      </section>

      {/* -------------------------------------- */}

      <section className="split-view">
        <ReactParlx className="parallax" overlay>
          <video
            className="parlx-children"
            src={night}
            autoPlay
            playsInline
            loop
            muted
          />
          <h3 className="parallax-marker">Not only images!</h3>
        </ReactParlx>
      </section>

      {/* -------------------------------------- */}

      <section className="content">
        <h3>
          <span role="img" aria-label="party">
            🎉
          </span>{' '}
          Videos, divs and other HTML5 tags since v1.2.0{' '}
          <span role="img" aria-label="party">
            🎉
          </span>
        </h3>

        <p>
          To assign parallax children add <code>class="parlx-children"</code> to
          element inside of parallax container e.g:
        </p>
        <pre className="language-html">
          <code>&#60;video class="parlx-children" src="sample.mp4"></code>
        </pre>
      </section>
    </main>
  );
};
