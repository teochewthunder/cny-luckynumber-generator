# CNY Lucky Number Generator

This is a JavaScript widget, in the form of a library, used to render a pig and a randomly generated  4D number on the bottom right corner of your screen.

## HTML
An example HTML page is used. Inside it, there should be a script link to the JavaScript file, and a call to the *cny2019()* function. The *charset* property in the script tag should be set to *UTF-8* because this script contains Chinese characters.

## JavaScript
We first define *cny2019()* as an encompassing function. Within it will be the functions:

 - *createOverlay()*, used to create a placehlder for the pig and numbers.
 - *createCaption()*, used to create a placeholder for the numbers.
  - *getNumbers()*, used to generate 4 random numbers and display them in the caption.
  - *generateRandomNo(min, max)*, used to generate a number netween *min* and *max*.
 - *createPig()*, used to create a pig.
  - *createLeg()*, used to create a pig's leg.
 
### The Pig
Within *createPig()*, a torso is created. A tail, eyes, snout and a placeholder for legs are created, CSS properties rendered and appended to the torso. *createLeg()* is run 4 times to create the legs, which are then appended to the placeholder for legs.

The entire pig is then appended to the main placeholder.

### The Caption
These are basically divs that have Chinese characters and randomly-generated numbers in them, and are appended to the placeholder for numbers.

### Clickability
The caption is invisible initially; a click event is added to the pig to toggle visibility. Each time the caption is visible, *getNumbers()* is run to generate the numbers.

### Animation
The eyes and tail of the pig are animated with a *setInterval()* method (with a *setTimeout()* method nested), *after* the pig is rendered.
