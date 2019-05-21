
// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.

timesheetApp.controller('TimesheetContinueController',

    function ($scope, $uibModalInstance, $http, $q, dataService, timelogId) {




        dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
            .catch(getTimelogCatch);



        $scope.pageTitle = "Continue";


        function getTimelogSuccess(data) {

            let data2 = data;
            fnConverDate(data2);


            let timeNow = new Date();
            timeNow.setMilliseconds(0);


            $scope.timeLog = data2;

            // 05/19/2019 02:41 pm - SSN - [20190519-1412] - [003] - Continue work on adding continue option for timesheet record
            // set TimeLogId = 0
            $scope.timeLog.timeLogId = 0;
            $scope.timeLog.startTime = timeNow;

            // 05/21/2019 07:31 am - SSN - Forgotten
            $scope.timeLog.totalSeconds = null;

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

            if ($scope.editableTimeLog.timeLogId === 0) {
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
            toastr.info("Record added.");
        };



        $scope.cancelForm = function () {


            $uibModalInstance.dismiss(); //same as cancel???

        };




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

console.log("Bottom of TimesheetContinueController.js");
