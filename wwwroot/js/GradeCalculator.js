var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
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
    alert(`You scored ${totalGrade.toString()}%, your final grade is a(n): ${letterGrade}.`);
});
