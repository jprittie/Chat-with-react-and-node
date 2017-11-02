//Here I am using tinygraphs.com to generate a random avatar for a new user
//I want to create an object of randomly selected available properties,
//and then import that in index.js, where I will add the user id to the query string

const url = 'http://www.tinygraphs.com/'
const shape = ['squares/', 'isogrids/', 'labs/isogrids/hexa/', 'labs/isogrids/hexa16/']
const theme = ['?theme=frogideas&', '?theme=sugarsweets&', '?theme=daisygarden&', '?theme=heatwave&', '?theme=summerwarmth&', '?theme=seascape&', '?theme=bythepool&', '?theme=duskfalling&', '?theme=berrypie&', '?theme=base']
const numcolours = ['numcolors=2', 'numcolors=3', 'numcolors=4' ]
const size = 'size=220&fmt=svg'

//Reusable function that can operate on any array passed to it
function makeNewAvatar() {
  const pickRandomProperty = (propertyArray) => {
    let randomValue;
    randomValue = Math.floor(Math.random() * propertyArray.length);
     return propertyArray[randomValue];
  }

  let randomShape = pickRandomProperty(shape);
  let randomTheme = pickRandomProperty(theme);
  let randomColours = pickRandomProperty(numcolours);

  let randomAvatar = {
    url,
    randomShape,
    randomTheme,
    randomColours,
    size
  }
  return randomAvatar
}

module.exports = makeNewAvatar;
