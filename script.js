function simpleinterest()
{
    var p = document.getElementById("principal");
    var r = document.getElementById("myRange");
    var t= document.getElementById("years");
    var interest=((r.value)*(p.value)*(t.value))/100;
    // Next line makes the output to 2 decimal places, since it's money
    interest = interest.toFixed(2);

    // Remove this; bad cybersecurity allowing someone to enter something not wanted; input validation
    if (p.value<=0){
        alert("Please enter a positive number!");
        p.focus();
        //return false;
    }
    else{
        var out1=document.getElementById("outer1");
        out1.innerHTML="If you deposit $"+"<span class='highlight'>"+p.value+ "</span>"+","+"<br>"+"at an interest rate of "+"<span class='highlight'>"+r.value+"%"+ "</span>"+"."+"<br>"+"You will receive an interest amount of $"+"<span class='highlight'>"+interest+ "</span>"+","+"<br>"+"in the year "+"<span class='highlight'>"+(parseInt(new Date().getFullYear())+parseInt(t.value))+ "</span>";
    }
    
    
    
}
function rangeslider(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value+"%";

    slider.oninput = function() {
        output.innerHTML = this.value+"%";
    }
    
}
 