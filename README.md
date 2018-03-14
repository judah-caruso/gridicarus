# Gridicarus

Gridicarus is a structural approach to [CSS Grids](https://www.w3.org/TR/css-grid-1/). 

[![npm version](https://badge.fury.io/js/gridicarus.svg)](https://badge.fury.io/js/gridicarus)



## Installation

Install with npm:  

```sh
npm install gridicarus
```
or use the [CDN Link](https://unpkg.com/gridicarus@0.1.2/dist/gridicarus.min.css):

```sh
<link rel="stylesheet" href="https://unpkg.com/gridicarus@0.1.2/dist/gridicarus.min.css">
```

## Usage

The documentation for Gridicarus is currently being written. However, to get started, simply create a div with the ```grid-parent``` class and add the ```grid-child``` class to any divs inside. Gridicarus will take care of the rest! 

If you want more control, use the ```h-span(1-10)```, ```h-fill(1-10)```, ```v-fill(1-10)```, ```h-gap-size(1-9)```, and ```v-gap-size(1-9)``` classes. To change the order of children in the grid, use ```#1-10``` in the class name. For example, ```grid-child #1``` will make sure this child is placed in the first cell of the grid.

To block out a grid design, use the included ```box-?``` classes:

|Class                   | Hex Color            |
|------------------------|----------------|
|box-navy				 | #001f3f        |
|box-blue				 | #0074D9        |
|box-aqua				 | #7FDBFF        |
|box-teal				 | #39CCCC        |
|box-olive				 | #3D9970        |
|box-green				 | #2ECC40        |
|box-lime				 | #01FF70        |
|box-yellow				 | #FFDC00        |
|box-orange				 | #FF851B        |
|box-red				 | #FF4136        |
|box-maroon				 | #85144b        |
|box-fuchsia			 | #F012BE        |
|box-purple 			 | #B10DC9        |
|box-black  			 | #111111        |
|box-grey   			 | #AAAAAA        |
|box-gray   			 | #AAAAAA        |
|box-silver   			 | #DDDDDD        |
|box-white   			 | #FFFFFF        |

\* colors from [clrs.cc](http://clrs.cc/).

## Development

Gridicarus' main code is in the ```src/``` directory. 

Use ```npm run watch``` to edit and compile the scss to css, and ```npm run build:git``` to build ```.css``` and ```.min.css``` versions of Gridicarus.

## License

[MIT](LICENSE)