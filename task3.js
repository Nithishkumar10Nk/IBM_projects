angular.module('weatherApp', [])
    .controller('WeatherController', function ($http) {
        var vm = this;
        vm.city = '';
        vm.weatherData = null;
        vm.error = '';

        vm.getWeather = function () {
            var apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
            var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

            $http.get(apiUrl, {
                params: {
                    q: vm.city,
                    appid: apiKey,
                    units: 'metric' // Use 'imperial' for Fahrenheit
                }
            })
            .then(function (response) {
                vm.weatherData = response.data;
                vm.error = '';
            })
            .catch(function (error) {
                vm.weatherData = null;
                vm.error = 'Error fetching weather data. Please check the city name.';
            });
        };
    });
