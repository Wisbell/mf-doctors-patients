app.controller('PatientCtrl', function($scope, $routeParams, PatientFactory){
    console.log('patient list controller')

    $scope.doctorFirstName
    $scope.doctorLastName

    $scope.thisDoctorsPatients = $routeParams.patients

    PatientFactory.getPatientList($scope.thisDoctorsPatients)
      .then(function(val){
        console.log("patient list?", val)
      })
})
