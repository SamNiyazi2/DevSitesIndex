﻿import { globals_instance } from "../globals";

// 11/22/2019 09:41 pm - SSN - Created to restore page on hitting the back button or recalling the page.


var RestorePreviousPageState_instance = function () {


    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');


    var doSetup = function (ngDefaultApplication) {



        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
        console.log('ngDefaultApplication [', ngDefaultApplication,']')

        var angular_module = globals_instance.getInstance(ngDefaultApplication);





        angular_module.controller('utilityControllerQueue', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {


        }]);



        angular_module.directive('siteTaskQueueList', function () {

            //    $rootScope.$broadcast('site_Task_Queue_List', result);


            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            console.log('RestorePreviousPageState ***********************');
            let alreadyPosted = false;


            var controller = function ($http, $q, $scope) {
            };


            //var RestorePreviousPageState = function ()
            //{

            //  var doSetup = function () {

            $(function () {


                window.addEventListener('click', function (e) { saveUrl(e); });
                window.addEventListener('beforeunload', function (e) { saveUrl(e); });

                setTimeout(restorePos, 300);

            });

            //}

            //    return {
            //        doSetup: doSetup
            //    };

            //     }();
            //}



            function saveUrl(e) {

                if (alreadyPosted) return;

                alreadyPosted = true;




                //let URL_Track_temp: any = window.localStorage.getItem('URL_Track');



                //if (URL_Track_temp == undefined) {
                //    URL_Track_temp = '{"urls":[]}';
                //}

                //let URL_Track = JSON.parse(URL_Track_temp);


                //let url = document.location.href;

                //let currentRecord = undefined;
                //let currentIndex = -1;

                //for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
                //    if (URL_Track.urls[currentIndex].url == url) {
                //        currentRecord = URL_Track.urls[currentIndex];
                //        break;
                //    }
                //}



                let URL_Track_Ref = get_URL_Track_Record();




                let elemInfo = {};

                if (e.screenX) {


                    elemInfo = {

                        clientX: e.clientX,
                        clientY: e.clientY,

                    };
                }





                let posX = window.scrollX;
                let posY = window.scrollY;

                if (URL_Track_Ref.currentRecord == undefined) {

                    URL_Track_Ref.currentRecord = { url: document.location.href, posX: posX, posY: posY, element: elemInfo };

                    URL_Track_Ref.URL_Track.urls.push(URL_Track_Ref.currentRecord);

                } else {

                    URL_Track_Ref.currentRecord.posX = posX;
                    URL_Track_Ref.currentRecord.posY = posY;


                    URL_Track_Ref.currentRecord.element = elemInfo;

                    URL_Track_Ref.URL_Track.urls[URL_Track_Ref.currentIndex] = URL_Track_Ref.currentRecord;
                }


                window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));

            }


            function get_URL_Track_Record() {

                let URL_Track_temp: any = window.localStorage.getItem('URL_Track');

                if (URL_Track_temp == undefined) return;

                let URL_Track = JSON.parse(URL_Track_temp);


                let url = document.location.href;
                let currentRecord = undefined;

                let currentIndex = -1

                for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
                    if (URL_Track.urls[currentIndex].url == url) {
                        currentRecord = URL_Track.urls[currentIndex];
                        break;
                    }
                }

                return {
                    currentRecord: currentRecord, URL_Track: URL_Track, currentIndex: currentIndex
                };

            }


            function restorePos() {

                let currentRecord = get_URL_Track_Record().currentRecord;

                if (currentRecord) {

                    window.scrollTo({
                        top: currentRecord.posY, left: currentRecord.posX, behavior: 'smooth'
                    });


                    setTimeout(function () { highlightClickSource(); }, 1000);




                    //  URL_Track.urls.splice(currentIndex);


                    //   window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track));

                }



            }


            function highlightClickSource() {

                ////////////let URL_Track_temp: any = window.localStorage.getItem('URL_Track');


                ////////////if (URL_Track_temp == undefined) return;

                ////////////let URL_Track = JSON.parse(URL_Track_temp);


                ////////////let url = document.location.href;
                ////////////let currentRecord = undefined;

                ////////////let currentIndex = -1

                ////////////for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
                ////////////    if (URL_Track.urls[currentIndex].url == url) {
                ////////////        currentRecord = URL_Track.urls[currentIndex];
                ////////////        break;
                ////////////    }
                ////////////}


                let currentRecord = get_URL_Track_Record().currentRecord;

                console.log("xxxxxxxxxxxxx-00000");

                if (currentRecord) {


                    console.log("xxxxxxxxxxxxx-001");

                    if (currentRecord.element) {

                        console.log("xxxxxxxxxxxxx-002");

                        if (currentRecord.element.clientX) {

                            console.log("xxxxxxxxxxxxx-003");


                            let x = currentRecord.element.clientX;
                            let y = currentRecord.element.clientY;


                            let selectedElement = document.elementFromPoint(x, y);

                            console.log(selectedElement);

                            if (selectedElement) {

                                let spanTemp = $('<span></span>').prependTo(selectedElement);

                                $(spanTemp).text($(selectedElement).text());
                                $(spanTemp).addClass('cssHilight101');


                                setTimeout(function () { removeAddedClass(spanTemp); }, 2000);
                            }

                        }


                    }

                    //console.log('************ Count');
                    //console.log('************ Count');
                    //console.log(URL_Track.urls.length);

                    //  setTimeout(() => { URL_Track.urls.splice(currentIndex) }, 2000);

                    //console.log(URL_Track.urls.length);
                    //console.log('************ Count');
                    //console.log('************ Count');



                    // window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track));

                }

            }


            function removeAddedClass(objRef) {


                $(objRef).remove();


            }




            return {

                restrict: "E",

                //template: "<h1>siteTaskQueueList</h1>",

                templateUrl: "/js/util/RestorePreviousPageState.html",

                //controllerAs: 'vm101',
                //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                //controller: controller,

                //controller: ['$http', '$q', '$scope', '$timeout', controller],
                //controllerAs: 'vm101',
                //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                //scope: {

                //    keyColumn: "@key",
                //    formName: "=", // Needed for posting form (Replacing url)


                //    angularControlId: "=?aci"

                //},

                link: function (scope, el, attrs) {







                }

            }






        });

    }

    return {
        doSetup: doSetup
    }

}();


export { RestorePreviousPageState_instance };

