// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var myString = musicians[i] + " plays " + instruments[i];
    myArray.push(myString);
  }
  
  return myArray;
}