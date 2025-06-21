# email-domain

  [![NPM](https://img.shields.io/npm/v/email-domain.svg)](https://www.npmjs.com/package/email-domain)
  [![Downloads](https://img.shields.io/npm/dm/email-domain.svg)](http://npm-stat.com/charts.html?package=email-domain)
  
Create email address from incomplete email address and given domain

## Usage


```js
import email from 'email-domain'

email('hello@', 'gmail.com')
// => hello@gmail.com

email('hello@gma', 'gmail.com')
// => hello@gmail.com

email('hello@go', 'gmail.com')
// undefined 

```


## Installation

```sh
npm install email-domain 
```
