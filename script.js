// Accessing the articles
const questions = document.querySelectorAll(".question");

// Looping through the questions
questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", ()=>{
        // add show-text class to each question
        question.classList.toggle("show-text")
    })
})