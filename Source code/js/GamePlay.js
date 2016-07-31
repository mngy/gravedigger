var Question1 = {
    question : '1-question.mp4',
    answers: ["Sing a tune", "No thanks!"]
};

var Question2 = {
    question : 'Question 2',
    answers: ["Yuck! No thanks!", "Go on, have a smoke"]
};

var questions = [Question1,Question2];

var gender = "";
var age = "";

var ClickCounterViewModel = function(questions) {
    //document.getElementById("gameVideo").defaultPlaybackRate = 2.0;
    
    this.iterator = ko.observable(0);
    this.hideButton = ko.observable(true);
    this.hideContinueButton = ko.observable(true);
    this.hideFinishButton = ko.observable(true);
    this.hideGenderButton = ko.observable(true);
    this.hideAgeButton = ko.observable(false);
    var outcome = true;
    var end = false;

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
        if (this.iterator() < (questions.length-1)) {
            this.iterator(this.iterator() + 1);
        } else {
            end = true;
        }
    }
    
    this.registerClick2 = function() {
        this.hideButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'resources/'+this.iterator()+'2-outcome.mp4');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
        if (this.iterator() < (questions.length-1)) {
            this.iterator(this.iterator() + 1);
        } else {
            end = true;
        }
    }
    
    this.resetClicks = function() {
        if (end == true) {
            document.getElementById('gameVideo').setAttribute('src', '');
            this.hideFinishButton(false);
            
        } else {
            this.hideButton(false);
        }
    };
    
    this.registerFemale = function() {
        gender = "FEMALE";
        this.hideGenderButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'resources/start-question.mp4');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    };
    
    this.registerMale = function() {
        gender = "MALE";
        this.hideGenderButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'resources/start-question.mp4');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    };
    
    
    this.registerAge1 = function() {
        age = "0-34";
        this.hideAgeButton(true);
        this.hideGenderButton(false);
        
    };
    
    this.registerAge2 = function() {
        age = "35-44";
        this.hideAgeButton(true);
        this.hideGenderButton(false);
    };
    
    
    this.registerAge3 = function() {
        age = "45-54";
        this.hideAgeButton(true);
        this.hideGenderButton(false);
    };
    
    this.registerAge4 = function() {
        age = "55+";
        this.hideAgeButton(true);
        this.hideGenderButton(false);
    };
    
    this.registerContinue = function() {
        window.location = "dashboard.html";
    };
};


