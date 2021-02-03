[![NPM version](https://img.shields.io/npm/v/image-url-validator.svg)](https://www.npmjs.com/package/image-url-validator)
[![Build Status](https://travis-ci.com/BhanukaUOM/Image-Url-Validator.svg?branch=master)](https://travis-ci.com/BhanukaUOM/Image-Url-Validator)
[![Downloads](https://img.shields.io/npm/dm/image-url-validator.svg)](https://npmcharts.com/compare/image-url-validator?minimal=true)
![NPM](https://img.shields.io/npm/l/image-url-validator)

# image-url-validator

Check if a url is an image

Checks asynchronously whether an image URL is valid or not with using HTTP HEAD.


## Install

```
$ npm install --save image-url-validator
```


## Usage

### JavaScript
```js
const isImageURL = require('image-url-validator');

await isImageURL('https://via.placeholder.com/300/09f/fff.png');
//=> true

await isImageURL('https://github.com/BhanukaUOM/Image-Url-Validator');
//=> false
```

### ES5
```js
import isImageURL = require('image-url-validator');

await isImageURL('https://via.placeholder.com/300/09f/fff.png');
//=> true

await isImageURL('https://github.com/BhanukaUOM/Image-Url-Validator');
//=> false
```

## Release Notes

> #### v0.2.0
> 
> -  Added ES5 Support
>
>
> #### v0.0.1
> 
> -  Initial Release
>


## License

Licensed under The MIT License (MIT)