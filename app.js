var clicks = 0;
var clicks2 = 0;
var clicks3 = 0;
var clicks4 = 0;
var clicks5 = 0;
var clicks6 = 0;
var clicks7 = 0;
var clicks8 = 0;
var clicks9 = 0;
var clicks10 = 0;
var clicks11 = 0;
var clicks12 = 0;

function action() {
    var questions = document.getElementById("monthans").value;
    if(questions == 1){
    clicks += 1;
    var ans = clicks
    var counter = ++ans
    document.getElementById("innertxt").innerHTML = "Including you, there are " + counter + " people born in the month janurary"
    }else if(questions == 2){
        var click2 = clicks2 += 1;
        var ans2 = click2
        var counter2 = ++ans2
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter2 + " people born in the month feburary"
    }else if(questions == 3){
        var click3 = clicks3 += 1;
        var ans3 = click3
        var counter3 = ++ans3        
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter3 + " people born in the month march"
    }else if(questions == 4){
        var click4 = clicks4 += 1;
        var ans4 = click4
        var counter4 = ++ans4        
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter4 + " people born in the month april"
    }else if(questions == 5){
        var click5 = clicks5 += 1;
        var ans5 = click5
        var counter5 = ++ans5        
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter5 + " people born in the month may"
    }else if(questions == 6){
        var click6 = clicks6 += 1;
        var ans6 = click6
        var counter6 = ++ans6             
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter6 + " people born in the month june"
    }else if(questions == 7){
        var click7 = clicks7 += 1;
        var ans7 = click7
        var counter7 = ++ans7             
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter7 + " people born in the month july"
    }else if(questions == 8){
        var click8 = clicks8 += 1;
        var ans8 = click8
        var counter8 = ++ans8             
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter8 + " people born in the month augest"
    }else if(questions == 9){
        var click9 = clicks9 += 1;
        var ans9 = click9
        var counter9 = ++ans9          
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter9 + " people born in the month october"
    }else if(questions == 10){
        var click10 = clicks10 += 1;
        var ans10 = click10
        var counter10 = ++ans10       
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter10 + " people born in the month september"
    }else if(questions == 11){
        var click11 = clicks11 += 1;
        var ans11 = click11
        var counter11 = ++ans11       
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter11 + " people born in the month november"
    }else if(questions == 12){
        var click12 = clicks12 += 1;
        var ans12 = click12
        var counter12 = ++ans12       
        document.getElementById("innertxt").innerHTML = "Including you, there are " + counter12 + " people born in the month december"
    }else{
        alert("ERROR: Cannot read user input.")
    }
}