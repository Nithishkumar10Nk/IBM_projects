angular.module('userAuthApp', [])
    .controller('AuthController', function() {
        var vm = this;

        vm.isLoggedIn = false;
        vm.showSignupForm = false;
        vm.username = '';
        vm.password = '';
        vm.newUsername = '';
        vm.newPassword = '';
        vm.loginError = '';
        vm.signupError = '';

        vm.showSignup = function() {
            vm.showSignupForm = true;
        };

        vm.showLogin = function() {
            vm.showSignupForm = false;
        };

        vm.login = function() {
            // Simplified login logic - You would typically call an API for authentication
            if (vm.username === 'user' && vm.password === 'password') {
                vm.isLoggedIn = true;
                vm.loginError = '';
            } else {
                vm.isLoggedIn = false;
                vm.loginError = 'Invalid username or password';
            }
        };

        vm.signup = function() {
            // Simplified signup logic - You would typically call an API to create a new user
            if (vm.newUsername && vm.newPassword) {
                vm.username = vm.newUsername;
                vm.password = vm.newPassword;
                vm.isLoggedIn = true;
                vm.signupError = '';
                vm.showSignupForm = false;
            } else {
                vm.signupError = 'Username and password are required';
            }
        };

        vm.logout = function() {
            vm.isLoggedIn = false;
            vm.username = '';
            vm.password = '';
        };
    });
