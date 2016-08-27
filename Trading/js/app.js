var buySellApp = angular.module("buySellApp", ["ngRoute"]);

buySellApp.controller("buySellCtrl", function($scope,$location) {
    $scope.customer = {};

     $scope.customer.name="Satoshi Nakamoto";



$scope.nav = {};
    $scope.nav.isActive = function(path) {
        if (path === $location.path()) {
            return true;
        }
        
        return false;
    }


});



//controller for trade.html

buySellApp.controller("tradeCtrl", function($scope,$location,$http) {

//Buy form details
$scope.buyFormOptions={};

$scope.buyFormOptions.quantity=0;
$scope.buyFormOptions.price=0;
//$scope.buyFormOptions.total=($scope.buyFormOptions.quantity*$scope.buyFormOptions.price);
$scope.buyFormOptions.total=0;

$scope.tradingData={};


$scope.buySubmit=function(){

 $http({
        method : "POST",
        url :   "put api here", 
        data    : $scope.buyFormOptions

    }).then(function mySucces(response) {
        $scope.buyTradingData = response.data;
    }, function myError(response) {
        //$scope.tradingData = response.statusText;
        console.log("Error");
    });


}




//Sell form details
$scope.sellFormOptions={};

$scope.sellFormOptions.quantity=0;
$scope.sellFormOptions.price=0;
//$scope.buyFormOptions.total=($scope.buyFormOptions.quantity*$scope.buyFormOptions.price);
$scope.sellFormOptions.total=0;

$scope.tradingData={};


$scope.buySubmit=function(){

 $http({
        method : "POST",
        url :   "put api here", 
        data    : $scope.sellFormOptions

    }).then(function mySucces(response) {
        $scope.sellTradingData = response.data;
    }, function myError(response) {
        //$scope.tradingData = response.statusText;
        console.log("Error");
    });


}

});





//
buySellApp.config(function($routeProvider){

$routeProvider
    .when("/", {
        templateUrl : "partials/myAssets.html",
        controller  :  "buySellCtrl"
    })
    .when("/myAssets", {
        templateUrl : "partials/myAssets.html",
        controller  :  "buySellCtrl"
    })
    .when("/trade", {
        templateUrl : "partials/trade.html",
        controller  :  "tradeCtrl"
    })
    .when("/tradeHistory", {
        templateUrl : "partials/tradeHistory.html",
        controller  :  "buySellCtrl"
    })
    .otherwise({
       redirectTo: "/openTrades"
    }); 


});




