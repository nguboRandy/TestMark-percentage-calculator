
calculatePercentage()

function calculatePercentage(){
    let test1 = document.getElementById("test1Inp").value;
    let test2 = document.getElementById("test2Inp").value;
    let test3 = document.getElementById("test3Inp").value;
    let test4 = document.getElementById("test4Inp").value;


   // validating input and calculating percentage
    if(isNaN(test1) || isNaN(test2) || isNaN(test3 || isNaN(test4))){
        alert("Invalid input,Enter a number!");
        return false;

    }else if(
        test1 <=0 || test1 >50 ||test1 == " " || test1 == null &&
        test2 <=0 || test2 >60 ||test2 == " " || test2 == null &&
        test3 <=0 || test3 >60 ||test3 == " " || test3 == null &&
        test4 <=0 || test4 >50 ||test4 == " " || test4 == null ){
            alert("Enter a number greater than 0 and less or equal to total mark,in number format with no characters");
            return false;

        };

    let percentage1 =Math.round((test1 /50 )* 100);
    let percentage2 =Math.round((test2/60) * 100);
    let percentage3 =Math.round((test3/60) * 100);
    let percentage4 =Math.round((test4/50) * 100);

    if(percentage1 >=50 ){
        document.getElementById("test1-display").innerHTML = `${percentage1}%`;
        document.getElementById("test1-display").style.color = "Green";

    }else{
        document.getElementById("test1-display").innerHTML = `${percentage1}%`;
        document.getElementById("test1-display").style.color = "Red";

    };
    if (percentage2 >=50 ){
        document.getElementById("test2-display").textContent = `${percentage2}%`;
        document.getElementById("test2-display").style.color = "Green";

    }else{
        document.getElementById("test2-display").innerHTML = `${percentage2}%`;
        document.getElementById("test2-display").style.color = "Red";

    };
    if(percentage3 >=50 ){
        document.getElementById("test3-display").innerHTML = `${percentage3}%`;
        document.getElementById("test3-display").style.color = "Green";

    }else{
        document.getElementById("test3-display").innerHTML = `${percentage3}%`;
        document.getElementById("test3-display").style.color = "Red";

    };
    if(percentage4 >=50 ){
        document.getElementById("test4-display").innerHTML = `${percentage4}%`;
        document.getElementById("test4-display").style.color = "Green";

    }else{
        document.getElementById("test4-display").innerHTML = `${percentage4}%`;
        document.getElementById("test4-display").style.color = "Red";

    };        
    
}

function clearMarks(){
    document.getElementById("test1Inp").value ='';
    document.getElementById("test2Inp").value = '';
    document.getElementById("test3Inp").value ='';
    document.getElementById("test4Inp").value = '';

}
clearMarks()

function MiniMaximum(){
    let minMax = `Minimum test score: ${Math.min(percentage1, percentage2, percentage3, percentage4)} | Maximum test score: ${Math.max(percentage1,percentage2,percentage3, percentage4)}`;
document.getElementById("min-max").innerHTML = minMax;

}
MiniMaximum()
