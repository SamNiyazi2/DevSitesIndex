// 11/22/2019 09:41 pm - SSN - Created to restore page on hitting the back button or recalling the page.
import { globals_instance } from "../globals";
var RestorePreviousPageState_instance = function () {
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx Top - setup???');
    var doSetup = function (ngDefaultApplication) {
        console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx - Setup - ngDefaultApplication [', ngDefaultApplication, ']');
        console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx - Setup - directive???');
        var angular_module = globals_instance.getInstance_v002('RestorePreviousPageState', ngDefaultApplication);
        angular_module.controller('restorePreviousPageAndTaskQueueController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {
            }]);
        angular_module.directive('restorePreviousPageStateAndTaskQueue', function () {
            //    $rootScope.$broadcast('site_Task_Queue_List', result);
            console.log('RestorePreviousPageState -  directive  ***********************');
            var alreadyPosted = false;
            var controller = function ($http, $q, $scope) {
            };
            $(function () {
                window.addEventListener('click', function (e) { saveUrl(e); });
                window.addEventListener('beforeunload', function (e) { saveUrl(e); });
                setTimeout(restorePos, 300);
            });
            function getRelativePath() {
                // Source: https://stackoverflow.com/questions/4504686/get-relative-path-of-the-page-url-using-javascript
                return document.location.href.replace(/(.+\w\/)(.+)/, "/$2");
            }
            function saveUrl(e) {
                if (alreadyPosted)
                    return;
                alreadyPosted = true;
                var URL_Track_Ref = get_URL_Track_Record(true);
                var elemInfo = {};
                if (e.screenX) {
                    elemInfo = {
                        clientX: e.clientX,
                        clientY: e.clientY,
                    };
                }
                var posX = window.scrollX;
                var posY = window.scrollY;
                if (URL_Track_Ref.currentRecord == undefined) {
                    URL_Track_Ref.currentRecord = { url: getRelativePath(), posX: posX, posY: posY, element: elemInfo };
                    URL_Track_Ref.URL_Track.urls.push(URL_Track_Ref.currentRecord);
                }
                else {
                    URL_Track_Ref.currentRecord.posX = posX;
                    URL_Track_Ref.currentRecord.posY = posY;
                    URL_Track_Ref.currentRecord.element = elemInfo;
                    URL_Track_Ref.URL_Track.urls[URL_Track_Ref.currentIndex] = URL_Track_Ref.currentRecord;
                }
                window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
            }
            function get_URL_Track_Record(createIfNotFound) {
                if (createIfNotFound === void 0) { createIfNotFound = false; }
                var URL_Track_temp = window.localStorage.getItem('URL_Track');
                if (URL_Track_temp == undefined) {
                    if (!createIfNotFound)
                        return null;
                    URL_Track_temp = '{"urls":[]}';
                }
                var URL_Track = JSON.parse(URL_Track_temp);
                var url = getRelativePath();
                var currentRecord = undefined;
                var currentIndex = -1;
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
                console.log('RestorePreviousPageState -  restorePos  ***********************  101 ');
                var URL_Track_Ref = get_URL_Track_Record();
                console.log('RestorePreviousPageState -  restorePos  ***********************  102 ');
                console.log('URL_Track_Ref');
                console.log(URL_Track_Ref);
                if (!URL_Track_Ref)
                    return;
                console.log('RestorePreviousPageState -  restorePos  ***********************  103 ');
                if (!URL_Track_Ref.currentRecord)
                    return;
                console.log('RestorePreviousPageState -  restorePos  ***********************  104 ');
                var currentRecord = URL_Track_Ref.currentRecord;
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
                console.log('RestorePreviousPageState -  highlightClickSource  ***********************');
                var URL_Track_Ref = get_URL_Track_Record();
                if (!URL_Track_Ref)
                    return;
                if (!URL_Track_Ref.currentRecord)
                    return;
                var currentRecord = URL_Track_Ref.currentRecord;
                console.log("xxxxxxxxxxxxx-00000");
                if (currentRecord) {
                    console.log("xxxxxxxxxxxxx-001");
                    if (currentRecord.element) {
                        console.log("xxxxxxxxxxxxx-002");
                        if (currentRecord.element.clientX) {
                            console.log("xxxxxxxxxxxxx-003");
                            var x = currentRecord.element.clientX;
                            var y = currentRecord.element.clientY;
                            console.log("xxxxxxxxxxxxx-004 [", x, "] [", y, "]");
                            var selectedElement = document.elementFromPoint(x, y);
                            console.log("selectedElement: *********************************");
                            console.log("selectedElement: *********************************");
                            console.log("selectedElement: *********************************");
                            console.log("selectedElement: *********************************");
                            console.log(selectedElement);
                            if (selectedElement && selectedElement.attributes) {
                                var bypass = true;
                                if ("A ".toUpperCase().indexOf(selectedElement.nodeName.toUpperCase()) > -1) {
                                    bypass = false;
                                }
                                console.log("Node Name", selectedElement.nodeName);
                                console.log("Node type", selectedElement.nodeType);
                                console.log(selectedElement.attributes);
                                for (var x_1 = 0; x_1 < selectedElement.attributes.length; x_1++) {
                                    if (selectedElement.attributes[x_1].name === "ng-click") {
                                        console.log('have ng-click ****************************');
                                        console.log('have ng-click ****************************');
                                        console.log('have ng-click ****************************');
                                        console.log('have ng-click ****************************');
                                    }
                                    if (selectedElement.attributes[x_1].name === "href") {
                                        console.log('have href ****************************');
                                        console.log('have href ****************************');
                                        console.log('have href ****************************');
                                        console.log('have href ****************************');
                                    }
                                }
                                if (!bypass) {
                                    var spanTemp_1 = $('<span></span>').prependTo(selectedElement);
                                    $(spanTemp_1).text($(selectedElement).text());
                                    $(spanTemp_1).addClass('cssHilight101');
                                    setTimeout(function () { removeAddedClass(spanTemp_1); }, 2000);
                                }
                            }
                        }
                    }
                    setTimeout(function () {
                        console.log('RestorePreviousPageState - Removing current reocrd... 101');
                        console.log('************ Count 2');
                        console.log('************ Count');
                        console.log(URL_Track_Ref.URL_Track.urls.length);
                        setTimeout(function () {
                            URL_Track_Ref.URL_Track.urls.splice(URL_Track_Ref.currentIndex);
                            window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
                            console.log('************ Count 222');
                            console.log('************ Count');
                            console.log(URL_Track_Ref.URL_Track.urls.length);
                        }, 2000);
                    }, 2000);
                }
            }
            function removeAddedClass(objRef) {
                $(objRef).remove();
            }
            return {
                restrict: "E",
                templateUrl: "/js/util/RestorePreviousPageState.html",
                link: function (scope, el, attrs) {
                }
            };
        });
    };
    return {
        doSetup: doSetup
    };
}();
export { RestorePreviousPageState_instance };
//# sourceMappingURL=RestorePreviousPageState.js.map