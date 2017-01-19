console.log("app.js loaded")

var app = angular.module('doctorsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/doctors/', {
      controller: 'DoctorCtrl',
      templateUrl: 'partials/doctorsView.html'
    })
    .when('/doctors/:patients', {
      controller: 'PatientCtrl',
      templateUrl: 'partials/patientsView.html'
    })
    .otherwise({
      redirectTo: 'partials/doctorsView.html'
    })
})
