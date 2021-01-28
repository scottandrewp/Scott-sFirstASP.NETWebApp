$("#submitButton").click(function () { //Create function to bring in percent  of each grade and calculate the final grade.
    var assignmentWeight = .5; // I set variables with each categories weight.
    var groupWeight = .1;
    var quizWeight = .1;
    var examWeight = .2;
    var INTEXWeight = .1;


    var assignmentGrade = parseFloat($("#assignments").val()) * assignmentWeight; // I pulled the values submitted in the form and muliplied them by the weight
    var groupGrade = (parseFloat($("#group").val()) * groupWeight);
    var quizGrade = (parseFloat($("#quiz").val()) * quizWeight);
    var examGrade = (parseFloat($("#exam").val()) * examWeight);
    var INTEXGrade = (parseFloat($("#INTEX").val()) * INTEXWeight);


    var totalGrade = assignmentGrade + groupGrade + quizGrade + examGrade + INTEXGrade; // I added all of the individual grades together to get the total grade.

    
    var letterGrade = ""; // I determined the letter grade based upon the total grade and the percentage categories using if/elseif statements.
    if (totalGrade >= 94) {
        letterGrade = "A";
    }
    else if (totalGrade < 94 && totalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (totalGrade < 90 && totalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (totalGrade < 87 && totalGrade >= 84) {
        letterGrade = "B";
    }
    else if (totalGrade < 84 && totalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (totalGrade < 80 && totalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (totalGrade < 77 && totalGrade >= 74) {
        letterGrade = "C";
    }
    else if (totalGrade < 74 && totalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (totalGrade < 70 && totalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (totalGrade < 67 && totalGrade >= 64) {
        letterGrade = "D";
    }
    else if (totalGrade < 64 && totalGrade >= 60) {
        letterGrade = "D-";
    }
    else if (totalGrade < 60) {
        letterGrade = "E";
    }
    alert(`You scored ${totalGrade.toString()}%, your final grade is a(n): ${letterGrade}.`); // This is the alert message
});

/*submit.addEventListener("click", function () { //Create function to bring in percent  of each grade and calculate the final grade.
    var totalGrade = parseFloat(document.getElementById("assignments").value) + parseFloat(document.getElementById("quiz").value) + parseFloat(document.getElementById("group").value) + parseFloat(document.getElementById("exam").value) + parseFloat(document.getElementById("INTEX").value);
    var letterGrade = "";
    if (totalGrade >= 94) {
        letterGrade = "A";
    }
    else if (totalGrade < 94 && totalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (totalGrade < 90 && totalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (totalGrade < 87 && totalGrade >= 84) {
        letterGrade = "B";
    }
    else if (totalGrade < 84 && totalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (totalGrade < 80 && totalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (totalGrade < 77 && totalGrade >= 74) {
        letterGrade = "C";
    }
    else if (totalGrade < 74 && totalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (totalGrade < 70 && totalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (totalGrade < 67 && totalGrade >= 64) {
        letterGrade = "D";
    }
    else if (totalGrade < 64 && totalGrade >= 60) {
        letterGrade = "D-";
    }
    else if (totalGrade < 60) {
        letterGrade = "E";
    }
    alert(`You scored ${totalGrade.toString()}%, your final grade is a(n): ${letterGrade}.`); // This is the alert message
});*/
