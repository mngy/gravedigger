var Question1 = {
    question : 'Question 1',
    answers: ["Answer 1:1", "Answer 1:2"],
    outcomes: ["outcome 1:1", "Outcome 1:2"]
};

var Question2 = new Object();
Question2 = {
    question : 'Question 2',
answers: ["Answer 2:1", "Answer 2:2"],
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
    this.numberOfClicks = ko.observable(0);
    this.answerButtonView = ko.observable('hidden');
    
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
        this.numberOfClicks(this.numberOfClicks() + 1);
    }
    
    this.registerClick2 = function() {
        this.answer(2);
        this.iterator(this.iterator() + 1);
        this.numberOfClicks(this.numberOfClicks() + 1);
    }
    
    this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
        //document.getElementById('button1').style.display='none'
    };
    
    this.resetClicks = function() {
        this.numberOfClicks(0);
        //document.getElementById('button1').style.display='inline'
    };
    
    this.registerPlay = function() {
        this.registerPlay('hidden')
    };
    
    this.registerPause = function() {
        this.registerPause('hidden')
    };
    
    this.hasClickedTooManyTimes = ko.pureComputed(function() {
                                                  return this.numberOfClicks() >= 1;
                                                  }, this);
};

