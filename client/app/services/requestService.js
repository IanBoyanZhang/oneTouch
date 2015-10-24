'use strict';
angular.module('myApp.home', ['ngRoute'])
.factory("RequestFactory", [function() {
  var RequestFactory = {};
  //This endpoint should give me an array of ALL possible preferences
  RequestFactory.getAllPossiblePreferences = function(){
    return $http({
      method: 'GET',
      url: '/api/items',
    }).then(function(res){
      console.log('got allPreferences data!');
      return res.data;
    },function(error) {
      console.log("problem getting allPref data: ",error);
      return;
    });
  };
  //this endpoint should give me an object with username, user prof, and an array
  //of all the users selected preferences.
  RequestFactory.getUserData = function(username){
    return $http({
      method: 'GET',
      url: '/api/user/'+ username +'/items',
    }).then(function(res){
      console.log('got user data!');
      return res.data;
    },function(error) {
      console.log("problem getting user data: ",error);
      return;
    });
  };

  return RequestFactory;
}]);