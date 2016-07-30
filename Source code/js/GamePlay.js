var Question1 = {
    question : '1-question.mp4',
    answers: ["Sing a tune", "No thanks!"]
};

var Question2 = new Object();
Question2 = {
    question : 'Question 2',
    answers: ["Yuck! No thanks!", "Go on, have a smoke"]
};

var questions = [Question1, Question2];

var gender = "";
var age = "";

var ClickCounterViewModel = function(questions) {
    
    this.iterator = ko.observable(0);
    this.hideButton = ko.observable(true);
    this.hideContinueButton = ko.observable(true);
    var outcome = true;

    this.answer1 = ko.pureComputed(function () {
                                   return questions[this.iterator()].answers[0];
                                   }, this);
    
    this.answer2 = ko.pureComputed(function() {
                                   return questions[this.iterator()].answers[1]
                                   }, this);
    
    this.registerClick1 = function() {
        this.hideButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'resources/'+this.iterator()+'1-outcome.mp4');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
        if (this.iterator() < questions.length-1) {
            this.iterator(this.iterator() + 1);
        }
    }
    
    this.registerClick2 = function() {
        this.hideButton(true);
        this.iterator(this.iterator() + 1);
        document.getElementById('gameVideo').setAttribute('src', 'resources/'+this.iterator()+'2-outcome.mp4');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
        if (this.iterator() < questions.length-1) {
            this.iterator(this.iterator() + 1);
        }
    }
    
    this.resetClicks = function() {
        this.hideButton(false);
        /*if (outcome) {
            this.hideButton(false);
            outcome = false;
        } else {
            this.hideContinueButton(false);
            outcome = true;
        }*/
    };
    
    /*
    this.registerContinue = function() {
        this.hideContinueButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'resources/'+this.iterator()+'-question.m4v');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    };*/
};


