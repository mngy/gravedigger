var questions [{question='1', answer1='This is answer 1:1', answer2='this is answer 1:2'},
                {question='2', answer1='This is answer 2:1', answer2='this is answer 2:2'}];

var ClickCounterViewModel = function() {
    this.numberOfClicks = ko.observable(0);
    
    this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
        //document.getElementById('button1').style.display='none'
    };
    
    this.resetClicks = function() {
        this.numberOfClicks(0);
        //document.getElementById('button1').style.display='inline'
    };
    
    this.registerPlay = function() {
        this.registerPlay('button')
    };
    
    this.registerAnswer1 = 'this is answer 1';
    
    this.registerAnswer1 = 'this is answer 2';
    
    this.hasClickedTooManyTimes = ko.pureComputed(function() {
                                                  return this.numberOfClicks() >= 3;
                                                  }, this);
};

