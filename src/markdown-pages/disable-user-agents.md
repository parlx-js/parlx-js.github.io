---
title: "Disable parallax effect on selected user agents"
---

To disable parallax effect on selected user agents on single element use following code in div tag:
```html
<div data-exclude="/(iPod|iPhone|iPad|Android)/">
```

To disable parallax effect on selected user agents on all elements place in options:
```js
exclude: /(iPod|iPhone|iPad|Android)/
```