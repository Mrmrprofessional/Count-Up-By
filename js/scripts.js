var countUpTo = function(countUp, countTo){
    var numbers = [];
    for(var i = countUp; i <= countTo; i += countUp){
        numbers.push(i);
    }
    return numbers;
}


$(document).ready(function(){
    $("form#numbers").submit(function(event) {
        var countUp = parseInt($("input#countUp").val());
        console.log(countUp);
        var countTo = parseInt($("input#countTo").val());
        var result = countUpTo(countUp, countTo);
        console.log(result);
        $(".answer").text(result.join(", "));
        $("#result").show();
        event.preventDefault();
    });
});
