function dataType(val)
{
var types = [Function, RegExp, Number, String, Boolean, Object], len;
    
if (typeof val === "object" || typeof val === "function") 
    {
     for (var x = 0, len = types.length; x < len; x++) 
     {
            if (val instanceof types[x])
            {
                return types[x];
            }
      }
    }
    
    return typeof val;
}

alert(dataType('49'));
alert(dataType(100));
alert(dataType(true));