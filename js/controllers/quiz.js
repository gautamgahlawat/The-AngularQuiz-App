
(function(){


    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);


    QuizController.$inject = ['quizMetrics', 'DataService'];

  
    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.setActiveQuestion = setActiveQuestion; 
        vm.activeQuestion = 0;
        vm.questionAnswered = questionAnswered;
        vm.selectAnswer = selectAnswer;
        var numQuestionsAnswered = 0;

        function setActiveQuestion (index) {
            if (index ===undefined){
                var breakOut =false;
            var quizLength = DataService.quizQuestions.length -1;

                while(!breakOut){
                vm.activeQuestion = vm.activeQuestion <quizLength?++vm.activeQuestion:0;
                
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut= true;

                    }   
            
                }                
            }else{
                vm.activeQuestion = index;
            }
        }

        function questionAnswered(){

            var quizLength = DataService.quizQuestions.length;;

            if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                numQuestionsAnswered++;

                if(numQuestionsAnswered >= quizLength){
                    //finalise quiz

                }
            }
            vm.setActiveQuestion();
        }

        function selectAnswer(index){
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

    }

})();