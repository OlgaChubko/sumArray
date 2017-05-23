//array = [1, 2, [3, 4, [5, 6], 7], 8, [9, 10]];

var array = [1, 2, [3, 4],5, 6, 7, 8, [9, 10]];
var concat = array.reduce(function(result, current) {
    return result.concat(current);
}, []);

function arraySum(concat){
    var sum = 0;
    for(var i = 0; i < concat.length; i++){
        sum += concat[i];
    }
    console.log(sum);
}
arraySum(concat);
//console.log(concat);



