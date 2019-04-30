// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp


timesheetApp.controller('TimesheetClockOutController',

    function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, timelogId) {



        // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
        // $scope.timeLog = dataService.getTimelog($routeParams.id);
        // $scope.timeLog = dataService.getTimelog(timelogId);
        dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
            .catch(getTimelogCatch);

        function getTimelogSuccess(data) {

         
            //$scope.disciplineSelected = { id: 0, title: '' };


            //let timeNow = new Date();
            //timeNow.setMilliseconds(0);
            // timeNow.setSeconds(0);

            //$scope.timeLog = {
            //    timeLogId: 0,
            //    id: 0,
            //    startTime: timeNow,
            //    workDetail: "",
            //    disciplineId: '2',
            //    jobId: jobId
            //};
            let data2 = data;
            fnConverDate(data2);
            $scope.timeLog = data2;

            // $scope.disciplineSelected = data2.discipline.disciplineShort; // { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort};
  
            $scope.editableTimeLog = angular.copy($scope.timeLog);

            setTimeout(() => {
                $scope.getDisciplines(data2.discipline.disciplineShort);
                $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
}
                , 500);


        }

        function getTimelogError(data) {
            var temp = data;

        }

        function getTimelogCatch(data) {
            var temp = data;

        }










        $scope.submitForm = function () {


            var test = $scope.editableTimeLog;

            var promise = null;

            $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

            if ($scope.editableTimeLog.id === 0) {
                promise = dataService.insertTimeLog($scope.editableTimeLog);
            }
            else {
                promise = dataService.updateTimeLog($scope.editableTimeLog);
            }

            if (promise) {

                promise.then(
                    function (data) {

                        var test1 = data;

                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                    },
                    function (error) {

                        var test2 = error;
                        alert("System Error! Check console.");
                        console.log(error);

                    });
            }


            $uibModalInstance.close();
            toastr.info("Clocked-out");
        };



        $scope.cancelForm = function () {


            $uibModalInstance.dismiss(); //same as cancel???

        };



        // 04/13/2019 11:00 am - SSN - [20190413-1037] - Add discipline lookup

        $scope.getDisciplines = function (lookupValue) {

            if (lookupValue === null) lookupValue = "";

            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/DisciplineAPI'

            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);

            return deferred.promise;

            function typeaheadDisciplineSuccess(response) {

                var addresses = [];

                angular.forEach(response.data,
                    function (item) {

                        if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                            addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                        }
                    }
                );

                deferred.resolve(addresses);

            }

            function typeaheadDisciplineError(response) {

                deferred.reject(response);
            }

        };





    });

console.log("Bottom of TimesheetClockOutController.js");
