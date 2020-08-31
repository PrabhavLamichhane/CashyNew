var firebaseConfig = {
    apiKey: "AIzaSyAAWQtC0_YmZaJG1p_6TcoS8g4qgx1fWuU",
    authDomain: "cashy-5b27f.firebaseapp.com",
    databaseURL: "https://cashy-5b27f.firebaseio.com",
    projectId: "cashy-5b27f",
    storageBucket: "cashy-5b27f.appspot.com",
    messagingSenderId: "672766346090",
    appId: "1:672766346090:web:612e3091cddee3b2af1b13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);


var database = firebase.database();
var ref = database.ref("Questions");


$("#update").click(function () {
    var questionNo = $("#questionnumber").val();
    var question = $("#question").val();
    var option1 = $("#option1").val();
    var option2 = $("#option2").val();
    var option3 = $("#option3").val();
    var option4 = $("#option4").val();
    var correctAnswer = $("#answer").val();

    if (typeof (questionNo) !== "number") {
        alert("Question No must be number");
        return;
    }

    if (!questionNo || !question || !option1 || !option2 || !option3 || !option4 || !correctAnswer) {
        // alert("This cannot be empty")
    } else {


        var data = {
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: correctAnswer
        }

        ref.child(questionNo.toString()).update(data);

        alert("Quiz updated")

    }
});


$("#add").click(function () {
    var questionNo = $("#questionnumber").val();
    var question = $("#question").val();
    var option1 = $("#option1").val();
    var option2 = $("#option2").val();
    var option3 = $("#option3").val();
    var option4 = $("#option4").val();
    var correctAnswer = $("#answer").val();

    console.log(questionNo);

    // type of question no should be number
    if (typeof (questionNo) !== "number") {
        alert("Question No must be number");
        return;
    }


    if (!questionNo || !question || !option1 || !option2 || !option3 || !option4 || !correctAnswer) {
        alert("This cannot be empty")

    } else {
        console.log("clicked");


        var data = {
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: correctAnswer
        }

        ref.child(questionNo.toString()).set(data);
        console.log("Saved");
        alert("Quiz Saved");


    }

});