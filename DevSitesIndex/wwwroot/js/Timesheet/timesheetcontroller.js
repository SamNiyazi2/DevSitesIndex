timesheetApp.controller('TimesheetController', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, jobId) {
    $scope.disciplineSelected = { id: 0, title: '' };
    $scope.pageTitle = "Clock-in";
    let timeNow = new Date();
    timeNow.setMilliseconds(0);
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
            promise.then(function (data) {
                var test1 = data;
                $scope.timeLog = angular.copy($scope.editableTimeLog);
            }, function (error) {
                var test2 = error;
            });
        }
        $uibModalInstance.close();
        toastr.info("Clocked-in");
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
            url: '/api/DisciplineAPI'
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
console.log("Bottom of TimesheetController.js");
//# sourceMappingURL=timesheetcontroller.js.map