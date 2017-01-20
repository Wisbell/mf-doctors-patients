app.controller('PatientCtrl', function($scope, $routeParams, PatientFactory){
    console.log('patient list controller')

    // $scope.doctorFirstName =
    // $scope.doctorLastName

    $scope.thisDoctorsPatients = $routeParams.patients

    PatientFactory.getPatientList($scope.thisDoctorsPatients)
      .then(function(val){
        console.log("patient list?", val)

        $scope.patientList = val
      })

    // PatientFactory.getDoctorInfo($scope.thisDoctorsPatients)
    //   .then(function(val){
    //     console.log("patient doctor info?", val)
    //   })
})
