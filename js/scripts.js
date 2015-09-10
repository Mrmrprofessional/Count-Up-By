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
        var countTo = parseInt($("input#countTo").val());
        var result = countUpTo(countUp, countTo);
        $(".answer").text(result.join(", "));
        $("#result").show();
        event.preventDefault();
    });
});
