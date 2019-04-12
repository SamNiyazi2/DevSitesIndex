// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp


timesheetApp.controller('TimesheetController',
    function efController($scope, $window, $routeParams, $modalInstance) {


        if ($routeParams.id) {
            $scope.employee = DataService.getEmployee($routeParams.id);
        }
        else {
            $scope.employee = { id: 0 };
        }



        //$scope.editableEmployee = angular.copy($scope.employee);



        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];



        $scope.submitForm = function () {

        
            if ($scope.editableEmployee.id == 0) {
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);

            $modalInstance.close();
        };



        $scope.cancelForm = function () {


            $modalInstance.dismiss(); //same as cancel???

        };

    })