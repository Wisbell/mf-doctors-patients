app.factory('PatientFactory', function($http){

  return {
            getPatientList: function(doctor_id){
              return $http.get(`https://west-doctors-patients.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctor_id}"`)
                .then(function(val){
                  console.log("patient factory val", val)
                  return val.data
              })
            },

            getDoctorInfo: function(doctor_id){
              return $http.get(`https://west-doctors-patients.firebaseio.com/doctor/${doctor_id}`)
                .then(function(val){
                  console.log("patient's doctor's info go get name", val)
                  return val.data
                })
            }
          }
})
