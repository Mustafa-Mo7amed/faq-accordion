let answer1 = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";

let answer2 = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

let answer3 = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";

let answer4 = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";


function showAnswer(questionNumber) {
    let ans = document.getElementById("ans" + questionNumber);
    let icon = document.getElementsByClassName("plus-minus-icon")[questionNumber - 1];
        if (ans.textContent === "") {
        ans.textContent = answer1;
        icon.src = "assets/images/icon-minus.svg";
    }
    else {
        ans.textContent = "";
        icon.src = "assets/images/icon-plus.svg";
    }
}
const q1 = document.getElementById("Q1");
const q2 = document.getElementById("Q2");
const q3 = document.getElementById("Q3");
const q4 = document.getElementById("Q4");
q1.onclick = () => showAnswer(1);
q2.onclick = () => showAnswer(2);
q3.onclick = () => showAnswer(3);
q4.onclick = () => showAnswer(4);

