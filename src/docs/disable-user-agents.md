---
title: "Disable parallax effect on selected user agents"
order: 8
---

To disable parallax effect on selected user agents on single element use following code in div tag:

```html
<div data-exclude="/(iPod|iPhone|iPad|Android)/"></div>
```

To disable parallax effect on selected user agents on all elements place in options:

```js
exclude: /(iPod|iPhone|iPad|Android)/;
```
