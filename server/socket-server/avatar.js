//http://www.tinygraphs.com/labs/isogrids/hexa16/0bqfcZ/duskfalling&numcolors=2size=220&fmt=svg
//http://tinygraphs.com/isogrids/asdfdgghhhh?theme=frogideas&numcolors=4&size=220&fmt=svg


//Here I am using tinygraphs to generate a random avatar for a new user
//I want to create an object of randomly selected available properties,
//and then import that in index.js, where I will add the user id to the query string

const url = 'http://www.tinygraphs.com/'
const shape = ['squares/', 'isogrids/', 'spaceinvaders/', 'labs/isogrids/hexa/', 'labs/isogrids/hexa16/']
const theme = ['?theme=frogideas&', '?theme=sugarsweets&', '?theme=daisygarden&', '?theme=heatwave&', '?theme=summerwarmth&', '?theme=seascape&', '?theme=bythepool&', '?theme=duskfalling&', '?theme=berrypie&', '?theme=base']
const numcolours = ['numcolors=2', 'numcolors=3', 'numcolors=4' ]
const size = 'size=220&fmt=svg'

//Reusable function that can operate on any array passed to it
var pickRandomProperty = (propertyArray) => {
  var randomValue = Math.floor(Math.random() * propertyArray.length);
   return propertyArray[randomValue];
}

var randomShape = pickRandomProperty(shape);
var randomTheme = pickRandomProperty(theme);
var randomColours = pickRandomProperty(numcolours);

var randomAvatar = {
  url,
  randomShape,
  randomTheme,
  randomColours,
  size
}

module.exports = randomAvatar;
