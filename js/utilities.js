// fonction getRandomColor va retourner une string avec des valeurs rgba
function getRandomColor(){
    return (`rgba(${getRandomInteger(256)},${getRandomInteger(256)},${getRandomInteger(256)},${getRandomInteger(11)/10})`)
}

// fonction getRandomInteger

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
  }
  

