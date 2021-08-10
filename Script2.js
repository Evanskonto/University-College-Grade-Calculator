// JavaScript source code
var Change = new change()
var percentage;
function btnReset_Click() {
    document.getElementById("txtNumber1").value = '';
    document.getElementById("txtNumber2").value = '';
    document.getElementById("txtNumber3").value = '';
    document.getElementById("txtNumber4").value = '';
    document.getElementById("txtNumber5").value = '';
    document.getElementById("txtNumber6").value = '';
    location.reload();

}
function btnAdd_Click() {
    var overallScore;

    var module1 = parseInt(document.getElementById("txtNumber1").value);
    var module2 = parseInt(document.getElementById("txtNumber2").value);
    var module3 = parseInt(document.getElementById("txtNumber3").value);
    var module4 = parseInt(document.getElementById("txtNumber4").value);
    var module5 = parseInt(document.getElementById("txtNumber5").value);
    var module6 = parseInt(document.getElementById("txtNumber6").value);

    if (module1 > 100 || module2 > 100 || module3 > 100 || module4 > 100 || module5 > 100 || module6 > 100) {
        alert("Please enter mark in range of 100") // show an alert everytime the user enter marks over to 100
    } else {
        overallScore = module1 + module2 + module3 + module4 + module5 + module6;//prints the overall score
        Result.innerText = "Your overall score is : " + overallScore;






        if (percentage = (overallScore / 600) * 100) {
            // prints out the percentage
            answer.innerText = "Your percentage is : " + percentage;


        }
        //alert(percentage);
        if (percentage <= 100 && percentage >= 80) {
            answer2.innerText = "Congratulations!!! You Pass.";
            answer3.innerText = "Your Grade is 1-1.";
        }
        if (percentage <= 79 && percentage >= 60) {
            answer2.innerText = "Congratulations!!! You Pass.";
            answer3.innerText = "Your Grade is 2-1.";
        }
        if (percentage <= 69 && percentage >= 40) {
            answer2.innerText = "Congratulations!!! You Pass.";
            answer3.innerText = "Your Grade is 2-2.";
        }
        if (percentage <= 39 && percentage >= 20) {
            answer2.innerText = "You Fail.";
            answer3.innerText = "Your Grade is 3.";
        }
        if (percentage <= 19 && percentage >= 0) {
            answer2.innerText = "You Fail.";
            answer3.innerText = "Your Grade is 4.";
        }


    }
}




    

