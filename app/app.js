console.log("app.js loaded")


// // Initialize Firebase

// var config = {
//   apiKey: "AIzaSyCgPcl_OJmb0zkDAH_bOM7eKlkrDTGMoQU",
//   authDomain: "west-doctors-patients.firebaseapp.com",
//   databaseURL: "https://west-doctors-patients.firebaseio.com",
//   storageBucket: "west-doctors-patients.appspot.com",
//   messagingSenderId: "112885923149"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var db = firebase.database();

// // Add local JSON to firebase
// firebase.db.ref().set('/data/hospital.json')

// Initalize Angular

var app = angular.module('doctorsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/doctors', {
      controller: 'DoctorCtrl',
      templateUrl: 'partials/doctorsView.html'
    })
    .when('/doctors/:patients', {
      controller: 'PatientCtrl',
      templateUrl: 'partials/patientsView.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
