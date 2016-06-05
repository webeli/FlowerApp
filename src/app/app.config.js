module.exports = function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home/',
                template: require('./Home/home.html'),
                controller: 'HomeController'
            })
            .state('products', {
                url: '/products/',
                template: require('./Products/products.html'),
                controller: 'ProductsController'
            });

        $urlRouterProvider.otherwise('/home/');
    }]);
}