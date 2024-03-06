angular.module('eventCalendarApp', [])
    .controller('EventCalendarController', function($scope, $filter) {
        var vm = this;

        vm.daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        vm.currentMonth = new Date();
        vm.events = [5, 10, 15, 20, 25, 30]; 
        $scope.$watch('calendarCtrl.currentMonth', function () {
            vm.generateCalendar();
        });

        vm.generateCalendar = function () {
            var firstDay = new Date(vm.currentMonth.getFullYear(), vm.currentMonth.getMonth(), 1);
            var lastDay = new Date(vm.currentMonth.getFullYear(), vm.currentMonth.getMonth() + 1, 0);

            vm.weeks = [];
            var currentWeek = [];
            for (var i = 0; i < firstDay.getDay(); i++) {
                currentWeek.push(null);
            }

            for (var day = 1; day <= lastDay.getDate(); day++) {
                currentWeek.push(new Date(vm.currentMonth.getFullYear(), vm.currentMonth.getMonth(), day));

                if (currentWeek.length === 7) {
                    vm.weeks.push(currentWeek);
                    currentWeek = [];
                }
            }

            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }

            vm.weeks.push(currentWeek);
        };

        vm.prevMonth = function () {
            vm.currentMonth.setMonth(vm.currentMonth.getMonth() - 1);
        };

        vm.nextMonth = function () {
            vm.currentMonth.setMonth(vm.currentMonth.getMonth() + 1);
        };

        vm.isEventDay = function (day) {
            return vm.events.includes(day.getDate());
        };

        vm.generateCalendar();
    });
