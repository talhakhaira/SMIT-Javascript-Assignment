
function uppercase(str)
{
  var arr1 = str.split(' ');
  var newarr1 = [];
    
  for(var i = 0; i < arr1.length; i++){
      newarr1.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1));
  }
  return newarr1.join(' ');
}

var val = prompt("Enter a phrase: ");

alert(String(uppercase(val)));