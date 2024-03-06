angular.module('quizApp', [])
    .controller('QuizController', function () {
        var vm = this;

        vm.quizStarted = false;
        vm.quizFinished = false;
        vm.currentQuestionIndex = 0;
        vm.score = 0;

        vm.questions = [
            {
                text: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin'],
                correctAnswer: 'Paris'
            },
            {
                text: 'What is 2 + 2?',
                options: ['3', '4', '5'],
                correctAnswer: '4'
            },
            // Add more questions here
        ];

        vm.currentQuestion = vm.questions[vm.currentQuestionIndex];

        vm.startQuiz = function () {
            vm.quizStarted = true;
        };

        vm.checkAnswer = function (selectedOption) {
            if (selectedOption === vm.currentQuestion.correctAnswer) {
                vm.score++;
            }
        };

        vm.nextQuestion = function () {
            vm.currentQuestionIndex++;
            if (vm.currentQuestionIndex < vm.questions.length) {
                vm.currentQuestion = vm.questions[vm.currentQuestionIndex];
            } else {
                vm.quizFinished = true;
            }
        };

        vm.restartQuiz = function () {
            vm.quizStarted = false;
            vm.quizFinished = false;
            vm.currentQuestionIndex = 0;
            vm.score = 0;
            vm.currentQuestion = vm.questions[vm.currentQuestionIndex];
        };
    });
