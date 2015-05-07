# Front-end Starter Kit
This starter kit is for projects centered on the browser, with no real dynamic
components, and little-to-no front-end application logic. This is the simplest
of our starter kits.

Feel free to open a pull-request if you have an idea or improvement!

To view an example, check out the `examples` branch!

## Usage
__Note:__ You should use this starter kit with the [starter-kit](https://www.npmjs.com/package/starter-kit) utility.

```
./bin/bootstrap
./bin/dev-start
```

## Build
Build files are the exact same names as dev built files.
```
./bin/build
```

## Features
- HTML5 (obviously)
- Support for IE8+
- Modernizr
- [Bower](http://bower.io)
- Grunt (Development)
  - Connect (local server)
  - Sass watching/compilation
  - [ESLint](http://eslint.org/)
- Grunt (Build)
  - Sass compilation
  - CSS minification
  - Image minification
  - Javascript minification

## Optional Features
:shipit: We try to keep what we need to ship to a minimum. As such, here's a
list of recommended libraries that you may need to install through
[Bower](http://bower.io) or implement through a CDN.

- [Bourbon](http://bourbon.io/) `bower install bourbon`
- [Susy](http://susy.oddbird.net/) `bower install susy`
- [Neat](http://neat.bourbon.io/) `bower install neat`
- [Bootstrap](http://getbootstrap.com/getting-started/) `bower install bootstrap`
- [Foundation](http://foundation.zurb.com/) `bower install foundation`
- [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/) `bower install fontawesome`

### CDN Drop-Ins
**jQuery** (v. 2.1.3) IE >=9
```html
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
```
**jQuery** (v. 1.11.2)
```html
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
```
**Bootstrap CSS** (v. 3.3.4)
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
```
**Bootstrap JS** (v. 3.3.4)
```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
```
**FontAwesome** (v. 4.3.0)
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```
**Foundation CSS** (v. 5.5.1)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.1/css/foundation.min.css">
```
**Foundation JS** (v. 5.5.1)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.1/js/foundation.min.js"></script>
```

## Standards
All standards are meant to enhance clarity and improve code maintainability.
Refer to our [styleguides](https://github.com/sq1agency/guides/tree/master/style) for more.

### Important Styleguides
- [SCSS](https://github.com/sq1agency/guides/blob/master/style/Sass.md)
- [Javascript](https://github.com/sq1agency/guides/blob/master/style/Javascript.md)
