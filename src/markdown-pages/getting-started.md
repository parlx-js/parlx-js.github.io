---
title: "Getting Started"
---

ES6+:

```js
import Parlx from "parlx.js";
```

CommonJS:

```js
const Parlx = require("parlx.js");
```

JavaScript / TypeScript:

```js
const elems = document.querySelectorAll(".parallax");

// v2+
const parlx = Parlx.init({
  elements: elems,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});

// v1
const parlx = new Parlx(elems, {
  // options...
});
```

jQuery:

```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

```bash
$ npm install jquery
$ yarn add jquery
```

```js
const jQuery = require("jquery");
```

```js
// v2+
$(".parallax").parlx({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});

// v1
$(".parallax").parlx({
  // options...
});
```
