// Whole-script strict mode syntax
// 'use strict';

const pics = [
  'airplane1.jpg',
  'airplane2.jpg',
  'balloons1.jpg',
  'balloons2.jpg',
  'car1.jpg',
  'car2.jpg',
  'doors1.jpg',
  'doors2.png',
  'eggs1.jpg',
  'eggs2.jpg',
  'fish1.jpg',
  'fish2.jpg',
  'gate1.jpg',
  'gate2.jpg',
  'house1.jpg',
  'house2.jpg',
  'icecream1.jpg',
  'icecream2.jpg',
  'jug1.jpg',
  'jug2.jpg',
  'kite1.jpg',
  'kite2.jpg',
  'lollipop1.jpg',
  'lollipop2.jpg',
  'milk1.jpg',
  'milk2.jpg',
  'noodles1.jpg',
  'noodles2.jpg',
  'orange1.jpg',
  'orange2.jpg',
  'plate1.jpg',
  'plate2.jpg',
  'question1.jpg',
  'question2.jpg',
  'rabbit1.jpg',
  'rabbit2.jpg',
  'sun1.jpg',
  'sun2.jpg',
  'table1.jpg',
  'table2.jpg',
  'umbrella1.jpg',
  'umbrella2.jpg',
  'van1.jpg',
  'van2.jpg',
  'water1.jpg',
  'water2.jpg',
  'xylophone1.jpg',
  'xylophone2.jpg',
  'yoyo1.png',
  'yoyo2.jpg',
  'zebra1.jpg',
  'zebra2.jpg'
]

const caption = [
'A for Airplane',
'A for Airplane',
'B for Balloons',
'B for Balloons',
'C for Car',
'C for Car',
'D for Door',
'D for Door',
'E for Eggs',
'E for Eggs',
'F for Fish',
'F for Fish',
'G for Gate',
'G for Gate',
'H for House',		
'H for House',		
'I for Icecream',
'I for Icecream',
'J for Jug',
'J for Jug',
'K for Kite',
'K for Kite',
'L for Lollipop',
'L for Lollipop',
'M for Milk',
'M for Milk',
'N for Noodles',
'N for Noodles',
'O for Orange',
'O for Orange',
'P for Plate',
'P for Plate',
'Q for Question',
'Q for Question',
'R for Rabbit',
'R for Rabbit',
'S for Sun',
'S for Sun',
'T for Table',
'T for Table',
'U for Umbrella',
'U for Umbrella',
'V for Van',
'V for Van',
'W for Water',
'W for Water',
'X for Xylophone',
'X for Xylophone',
'Y for Yoyo',
'Y for Yoyo',
'Z for Zebra',
'Z for Zebra'
]
document.getElementById('txt').innerHTML = caption[0];
document.getElementById('slide').src = 'img/' + pics[0];

let bttn = document.querySelector('button');
let img = document.querySelector('img')
let captxt = document.querySelector('p')
let counter = 1;
bttn.addEventListener('click', function () {
  img.src = 'img/' + pics[counter]
  captxt.innerHTML = caption[counter]
  counter++;
  if (counter === pics.length) {
    counter = 0;
  }

})