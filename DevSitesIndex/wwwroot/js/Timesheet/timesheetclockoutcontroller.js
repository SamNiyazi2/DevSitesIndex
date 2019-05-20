timesheetApp.controller('TimesheetClockOutController', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, timelogId) {
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
        .catch(getTimelogCatch);
    $scope.pageTitle = "Clock-out";
    function getTimelogSuccess(data) {
        let data2 = data;
        fnConverDate(data2);
        $scope.timeLog = data2;
        $scope.editableTimeLog = angular.copy($scope.timeLog);
        setTimeout(() => {
            $scope.getDisciplines(data2.discipline.disciplineShort);
            $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
        }, 500);
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
            promise.then(function (data) {
                var test1 = data;
                $scope.timeLog = angular.copy($scope.editableTimeLog);
            }, function (error) {
                var test2 = error;
                alert("System Error! Check console.");
                console.log(error);
            });
        }
        $uibModalInstance.close();
        toastr.info("Clocked-out");
    };
    $scope.cancelForm = function () {
        $uibModalInstance.dismiss();
    };
    $scope.getDisciplines = function (lookupValue) {
        if (lookupValue === null)
            lookupValue = "";
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'api/DisciplineAPI'
        }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
        return deferred.promise;
        function typeaheadDisciplineSuccess(response) {
            var addresses = [];
            angular.forEach(response.data, function (item) {
                if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                    addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                }
            });
            deferred.resolve(addresses);
        }
        function typeaheadDisciplineError(response) {
            deferred.reject(response);
        }
    };
});
console.log("Bottom of TimesheetClockOutController.js");
//# sourceMappingURL=timesheetclockoutcontroller.js.map