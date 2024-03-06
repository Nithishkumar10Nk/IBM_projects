angular.module('taskListApp', [])
    .controller('TaskListController', function() {
        var vm = this;

        vm.tasks = [];
        vm.newTask = '';

        vm.addTask = function() {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push({ name: vm.newTask });
                vm.newTask = '';
            }
        };

        vm.editTask = function(task) {
            var updatedTask = prompt('Edit task:', task.name);
            if (updatedTask !== null) {
                task.name = updatedTask;
            }
        };

        vm.deleteTask = function(task) {
            var confirmDelete = confirm('Are you sure you want to delete this task?');
            if (confirmDelete) {
                var index = vm.tasks.indexOf(task);
                vm.tasks.splice(index, 1);
            }
        };
    });
