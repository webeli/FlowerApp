module.exports = function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home/',
                template: require('./Home/home.html'),
                controller: 'HomeController'
            });

        $urlRouterProvider.otherwise('/home/');
    }]);
}