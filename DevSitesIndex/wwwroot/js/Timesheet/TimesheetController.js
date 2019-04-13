// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp


timesheetApp.controller('TimesheetController',

    function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, jobId) {



        //        $scope.timeLog = dataService.getEmployee($routeParams.id);


        $scope.disciplineSelected = { id: 0, title: '' };


        let timeNow = new Date();
        timeNow.setMilliseconds(0);
        timeNow.setSeconds(0);

        $scope.timeLog = {
            timeLogId: 0,
            id: 0,
            startTime: timeNow,
            workDetail: "",
            disciplineId: '2',
            jobId: jobId
        };



        $scope.editableTimeLog = angular.copy($scope.timeLog);

 


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
                    });
            }


            // $uibModalInstance.close();
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

console.log("Bottom of TimesheetController.js");
