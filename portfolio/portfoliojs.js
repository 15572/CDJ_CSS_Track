function largestElement(x){
  var max = x[0];
  for(var i=0; i<x.length; i++) {
    if(x[i] > max){
    	max= x[i];
    }
  }
  return max;
}
console.log( largestElement( [1,30,5,7] ) ); // should log 30
