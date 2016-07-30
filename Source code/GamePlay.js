var Question1 = {
    question : 'Question 1',
    answers: ["Go on, have a smoke", "Gross! No thanks!"],
    outcomes: ["outcome 1:1", "Outcome 1:2"]
};

var Question2 = new Object();
Question2 = {
    question : 'Question 2',
answers: ["Salad, please", "Yum, burger"],
outcomes: ["outcome 2:1", "Outcome 2:2"]
};

var Question3 = new Object();
Question3 = {
    question : 'Question 3',
answers: ["Answer 3:1", "Answer 3:2"],
outcomes: ["outcome 3:1", "Outcome 3:2"]
};

var questions = [Question1, Question2, Question3];



                                                    
var ClickCounterViewModel = function(questions) {
    
    this.iterator = ko.observable(0);
    this.answer = ko.observable(0);
    this.hideButton = ko.observable(true);
    this.hideContinueButton = ko.observable(true);
    var outcome = true;
    
    this.outcome = ko.pureComputed(function() {
                                   return this.iterator() + ':' + this.answer();
                                   }, this);

    this.answer1 = ko.pureComputed(function () {
                                   return questions[this.iterator()].answers[0];
                                   }, this);
    
    this.answer2 = ko.pureComputed(function() {
                                   return questions[this.iterator()].answers[1]
                                   }, this);
    
    this.registerClick1 = function() {
        this.answer(1);
        this.iterator(this.iterator() + 1);
        this.hideButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'videos/'+this.iterator()+this.answer()+'.m4v');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    }
    
    this.registerClick2 = function() {
        this.answer(2);
        this.iterator(this.iterator() + 1);
        this.hideButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'videos/'+this.iterator()+this.answer()+'.m4v');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    }
    
    this.resetClicks = function() {
        if (outcome) {
            this.hideButton(false);
            outcome = false;
        } else {
            this.hideContinueButton(false);
            outcome = true;
        }
    };
    
    this.registerContinue = function() {
        this.hideContinueButton(true);
        document.getElementById('gameVideo').setAttribute('src', 'videos/'+this.iterator()+this.answer()+'.m4v');
        document.getElementById('gameVideo').load();
        document.getElementById('gameVideo').play();
    };
};


