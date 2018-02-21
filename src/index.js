/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var loveTriangle = 0;

  for (var i = 0; i < preferences.length; i++) {
    var n = preferences[i];
    if ((n + 1) == preferences[i + 1]){
      if ((n -1) == preferences[i + 2]){
        loveTriangle++;
      }
    }
  }
  return loveTriangle;
};
