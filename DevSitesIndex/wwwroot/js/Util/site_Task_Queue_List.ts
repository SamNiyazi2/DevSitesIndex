

// 11/23/2019 05:57 am - SSN - Adding Task queue

import { globals_instance } from '../globals';


var site_Task_Queue_List_instance = function () {


    var doSetupp = function (ngApplicationName) {

        var site_Task_Queue_List = globals_instance.getInstance(ngApplicationName, []);

        site_Task_Queue_List.controller('SiteTaskQueueListController', ['$rootScope', '$scope', function ($rootScope, $scope) {

            //    $rootScope.$broadcast('site_Task_Queue_List', result);


            $scope.$on('site_Task_Queue_List', function (event, item) {

                console.log('site_Task_Queue_List was trigger with ...')
                console.log(item);

            });


        }]);

    }


    return {
        doSetup: doSetupp
    }

}();


export { site_Task_Queue_List_instance };



