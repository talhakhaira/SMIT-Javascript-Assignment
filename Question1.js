
function reverse_a_number(n)
{
	return n.toString().split("").reverse().join("");
}
var num = prompt("Type a number to reverse it");

alert(Number(reverse_a_number(num)));
