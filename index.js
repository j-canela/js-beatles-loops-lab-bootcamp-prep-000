function theBeatlesPlay(artist,instrument){
  var emptyArr ={};
  for(var i=0; i< artist.length; i++){
    emptyArr[i]=artist[i] +" palys "+ instrument[i]
  }
  
  return emptyArr
}

function johnLennonFacts(array){
  var i=0;
  while(i<array.length){
    array[i]= array[i]+"!!!"
    i++
  }
  
  return array;
}

function iLoveTheBeatles(n){
  var emptyArr ={};
  
  do{
    emptyArr[n]="Ilove the Beatles!"
    n++
  } while(n<15)
  
  return emptyArr
}