# Helsinki SVG icons

City of Helsinki brand identity icon set.

## Installation

```
npm install hel-svg-icons
```
you only need hel-icons.svg file.

## How to use

Insert icon in inline content.
```
<svg aria-hidden="true" class="icon"><use xlink:href="path-to/dist/symbol/svg/hel-icons.svg#book"></use></svg>
```

To make sure icons appear correct size depending on context include this default to styles 
```
<style>
  .icon {
    width:1em;
    height:1em
  }
</style>
```

## Accessibility

### Decorative icon
When icon is used for decoration or emphasis it should be hidden from screen readers with `aria-hidden=true`

### Interactive icon without text
When the icon is used without explanatory text as purely visual cue in UI you should provide a screen reader -friendly aria-label. In interactive elements this should be included in the wrapping `<a>` or `<button>` element.
```
<a href="/news/" aria-label="Latest News">
  <svg aria-hidden="true">
    <use xlink:href="path-to/dist/symbol/svg/hel-icons.svg#book"></use>
  </svg>
</a>
```
### Informative icon without text
When icon is not wrapped in interactive element, svg title can be used.
```
<svg>
  <title>Book</title>
  <use xlink:href="path-to/dist/symbol/svg/hel-icons.svg#book"></use>
</svg>
```


## Browser support

This spritemap displays fine in Chrome, Safari 7.1+, Firefox, and Opera.

For extended browser support (Safari 6, IE 6+, and Edge 12) you should use [svg4everybody](https://github.com/jonathantneal/svg4everybody).

## Contribution

Clone the repository.

Install dependencies.

```
npm install
```

Add new svg files in `src/svg/`. For icon naming try to follow [Font Awesome](http://fontawesome.io) naming practices.

Compile svg sprite file. 
```
grunt dev
```
View the test page on your browser in http://localhost:9090



## Further reading
- [Florens Verschelde: How to work with SVG icons](https://fvsch.com/code/svg-icons/how-to/)