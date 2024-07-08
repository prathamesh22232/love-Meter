var name1 = document.getElementById("nameOne").Value;
var name2 = document.getElementById("nameTwo").value;

function love(){
    var name1 = document.getElementById("nameOne").value;
    var name2 = document.getElementById("nameTwo").value;
    if(name1.length<=2){
        alert("Enter at least 3 character");
    }
    if(name2.length<=2){
        alert("Enter at least 3 character");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById("nature").innerHTML = name1 + " and " + name2  + " = " +random +  " % " + "of love";
    }
    if(random<=25){
        document.getElementById("statement").innerHTML = "Possesive and anger issues";
    }
    else if(random<=50){
        document.getElementById("statement").innerHTML = "rizz only";
    }
    else if(random<=75){
        document.getElementById("statement").innerHTML = "Lovely Relationship";
    }
    else if(random<=100){
        document.getElementById("statement").innerHTML = "Loyal Relationship";
    }
}