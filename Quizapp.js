'use strict'

var currentQuestion = 0;
var totalQuestions = 0;
var questionsList = null;
var answers = [' ']; 

function accessJSONFile()
{
    //let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    let requestURL = 'http://127.0.0.1:5500/Data/QuizQuestions.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        questionsList = request.response;
        totalQuestions = questionsList.length;
        currentQuestion = 0;
        if (totalQuestions>0) loadQuestion (currentQuestion);
      }
}

function loadQuestion(currPos)
{
    var question = document.getElementById('question');
    var option1 = document.getElementById('optionAL');
    var option2 = document.getElementById('optionBL');
    var option3 = document.getElementById('optionCL');
    var option4 = document.getElementById('optionDL');

    question.innerHTML = questionsList[currPos]['Question'];
    option1.innerHTML = questionsList[currPos]['Option1'];
    option2.innerHTML = questionsList[currPos]['Option2'];
    option3.innerHTML = questionsList[currPos]['Option3'];
    option4.innerHTML = questionsList[currPos]['Option4'];

    document.getElementById('optionA').checked = false;
    document.getElementById('optionB').checked = false;
    document.getElementById('optionC').checked = false;
    document.getElementById('optionD').checked = false;

    if (currentQuestion >= answers.length) 
    {
        answers.push(' ');    
    }
    else if (answers[currentQuestion].trim() != '')
    {   
        document.getElementById('option' + answers[currentQuestion]).checked = true;
    }
}

function finalScore()
{
    var score = 0;
    for(let i = 0; i < 10; i++) {
        if (answers[i].trim() == '')
        {
            alert('Please answer all the questions.');
            return;
        }
        if (questionsList[i].Answer.toUpperCase() == answers[i]) score = score + 1;
    }

    var finalScoreElem = document.getElementById('scoreDisplay');
    var strScore = 'Final score :  ' + score.toString() + '/' + answers.length.toString();
    finalScoreElem.innerHTML = strScore;

    var elemMain = document.getElementById('divMain');
    elemMain.style.display = 'none';
    var elemFinal = document.getElementById('divFinalScore');
    elemFinal.style.display = 'block';
}

function previousBtn_click() 
{
    if (currentQuestion==0)
    {
        alert('There are no questions previous to this.');
    }
    else
    {
        currentQuestion = currentQuestion - 1;
        loadQuestion (currentQuestion);
    }
}

function nextBtn_click()
{
    if (currentQuestion==totalQuestions-1)
    {
        if (confirm('Are you ok to complete the Quiz ?')) 
        {
            finalScore();
        }
    }
    else
    {
        currentQuestion = currentQuestion + 1;
        loadQuestion (currentQuestion);
    }
}

function options_click(clickedValue)
{
    answers[currentQuestion] = clickedValue;
}







/*

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'QuizQuestions.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    const jsonResponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[0].name);
});  


function loadJSONSync() 
{
    var fs = require('fs');

    let rawdata = fs.readFileSync('QuizQuestions.json');
    let student = JSON.parse(rawdata);
    console.log(student[0].Question);
}

*/


