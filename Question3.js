
function stringCombinations(str) {
    var strLength = str.length;
    var result = [];
    var currentIndex = 0;
    while (currentIndex < strLength) {
      var char = str.charAt(currentIndex);
      var x;
      var arrTemp = [char];
      for (x in result) {
        arrTemp.push("" + result[x] + char);
      }
      result = result.concat(arrTemp);
      currentIndex++;
    }
    return result;
  };