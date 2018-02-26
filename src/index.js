/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var loveTriangle = 0;

  for (var i = 0; i < preferences.length; i++) {
    
    var index = i+1;
    var indexF = index;
    var number = preferences[i];
    
    index = preferences[number - 1];
    index = preferences[index - 1];
  
    if (indexF == index){
      loveTriangle++;
    }
  }
  return Math.floor (loveTriangle/3);
};
