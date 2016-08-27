var exchangeApp = angular.module("exchangeApp", ["ngRoute"]);

exchangeApp.controller("exchangeCtrl", function($scope,$location) {
/*    $scope.customer = {};

     $scope.customer.name="Satoshi Nakamoto";
*/


$scope.nav = {};
    $scope.nav.isActive = function(path) {
        if (path === $location.path()) {
            return true;
        }
        
        return false;
    }


});





//
exchangeApp.config(function($routeProvider){

$routeProvider
    /*.when("/", {
        templateUrl : "partials/Polling_Form.html"
    })*/
    .when("/openTrades", {
        templateUrl : "partials/openTrades.html",
        controller  :  "exchangeCtrl"
    })
    .when("/tradeHistory", {
        templateUrl : "partials/tradeHistory.html",
        controller  :  "exchangeCtrl"
    })
    .when("/securityDetails", {
        templateUrl : "partials/securityDetails.html",
        controller  :  "exchangeCtrl"
    })
    .otherwise({
       redirectTo: "/openTrades"
    }); 


});




