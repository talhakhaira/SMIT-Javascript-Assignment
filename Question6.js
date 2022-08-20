
function find_longest_word(str)
{
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var x = 1 ; x < array.length ; x++)
  {
    if(result.length < array[x].length)
    {
    result = array[x];
    } 
  }
  return result;
}

var val = prompt("Enter a phrase: ");

alert(String(find_longest_word(val)));