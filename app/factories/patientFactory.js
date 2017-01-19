app.factory('PatientFactory', function($http){

  return {
            getPatientList: function(doctor_id){
              return $http.get(`https://west-doctors-patients.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctor_id}"`)
                .then(function(val){
                  console.log("patient factory val", val)
                  return val.data
              })
            }
          }
})
