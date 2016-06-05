/*
 ** Dependencies
 */
var angular = require('angular');
var uirouter = require('angular-ui-router');
var Firebase = require('firebase');
var angularfire = require('angularfire');
var angularanimate = require('angular-animate');
require('angular-moment');

/*
 ** App
 */
var app = angular.module('app', ['ui.router', 'firebase', 'ngAnimate', 'angularMoment']);

/*
 ** Run & Config
 */
require('./src/app/app.run.js')(app);
require('./src/app/app.config.js')(app);

/*
 ** Services
 */
require('./src/services/FirebaseService')(app);
require('./src/services/AppFilters')(app);
require('./src/services/AppDirectives')(app);
require('./src/services/AppServices')(app);

/*
 ** Controllers
 */
require('./src/app/Home/HomeController')(app);
require('./src/app/Products/ProductsController')(app);

/*
 ** Styles
 */
require("./src/styles/animations.css");
require("./src/styles/global.less");
require("./src/styles/home.less");
require("./src/styles/lightbox.less");