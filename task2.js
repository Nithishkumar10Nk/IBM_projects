angular.module('imageGalleryApp', [])
    .controller('ImageGalleryController', function() {
        var vm = this;

        vm.images = [
            {
                title: 'Beautiful Sunset',
                url: 'https://assets.hongkiat.com/uploads/ww-sunset-wallpapers/preview/sunset-desktop-wallpaper-1.jpg',
                description: 'A breathtaking view of the sunset over the mountains.'
            },
            {
                title: 'City Lights',
                url: 'https://w0.peakpx.com/wallpaper/888/856/HD-wallpaper-beautiful-city-colorful-colour-landscape-light-night-water.jpg',
                description: 'The vibrant lights of a cityscape during the night.'
            },
            {
                title: 'Rainfall',
                url: 'https://qph.cf2.quoracdn.net/main-qimg-62808bf5c553e18e5cc8b4a13ec9e4ad',
                description: 'A guarantee of rain always comes with a promise of sun, in weather and in life.'
            },
            // Add more images as needed
        ];

        vm.selectedImage = null;

        vm.showDetails = function(image) {
            vm.selectedImage = image;
        };

        vm.closeDetails = function() {
            vm.selectedImage = null;
        };
    });
