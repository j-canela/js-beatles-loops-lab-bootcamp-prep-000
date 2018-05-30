function theBeatlesPlay(array1,array2){
  var emptyArr ={};
  for(var i=0; i< array1.length; i++){
    emptyArr[1]=array1[i] +" palys "+ array2[i]
  }
  
  return emptyArr
}

function johnLennonFacts(array){
  var i=0;
  while(i<array.length){
    array[i]= "${array[i]}!!!"
    i++
  }
  
  return array;
}

function iLoveTheBeatles(n){
  var emptyArr ={};
  
  do{
    emptyArr.push("Ilove the Beatles!")
    n++
  } while(n<15)
}