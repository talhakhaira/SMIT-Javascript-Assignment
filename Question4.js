
function alphabet_order(str)
{
return str.split('').sort().join('');
}

var val = prompt("Enter a word: ");

alert(String(alphabet_order(val)));