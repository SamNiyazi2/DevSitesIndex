// 11/09/2019 11:03 am - SSN - Created
var ChangeMonitor_Util = function () {
    var haveChanges = false;
    var itemChange_ssn = function (ev) {
        console.log('site - itemChange_ssn');
        ChangeMonitor_Util.haveChanges = true;
    };
    // 11/09/2019 08:08 am - SSN - Added monitorChange_SSN
    var monitorChange_SSN = function () {
        console.log('site - monitorChange - 20191109-0810 - 5');
        console.log('site - monitorChange');
        console.log('site - monitorChange');
        console.log(document);
        var inputs = document.querySelectorAll('input');
        console.log(inputs);
        inputs.forEach(function (x, y, z) {
            console.log(y);
            console.log(y);
            if (!bypassObject(z[y])) {
                z[y].addEventListener('change', ChangeMonitor_Util.itemChange_ssn);
            }
        });
        var selects = document.querySelectorAll('select');
        console.log(selects);
        selects.forEach(function (x, y, z) {
            console.log(y);
            console.log("Before check");
            if (!bypassObject(z[y])) {
                console.log("Passed check");
                z[y].addEventListener('change', ChangeMonitor_Util.itemChange_ssn);
            }
        });
    };
    var bypassObject = function (obj1) {
        console.log('bypassObject');
        console.log("obj1.name ", obj1.name);
        console.log("obj1.id ", obj1.id);
        if (obj1.type) {
            if (obj1.type.toLowerCase() === 'hidden') {
                console.log('HIDDEN');
                console.log('HIDDEN');
                console.log('HIDDEN');
                console.log('HIDDEN');
                return true;
            }
        }
        if (!obj1.id && !obj1.name)
            return true;
        console.log("test 1");
        if (obj1.id.toLowerCase().indexOf('search') > -1)
            return true;
        console.log("test 2");
        if (obj1.name.toLowerCase().indexOf('search') > -1)
            return true;
        console.log("test 3");
        return false;
    };
    var setupMonitor = function () {
        console.log('ChangeMonitor - setupMonitor');
        var isChrome = getBrowserName() === 'chrome';
        if (true) {
            console.log('site - beforeUnload on');
            if (isChrome) {
                window.addEventListener("beforeunload", function (e) {
                    if (!ChangeMonitor_Util.haveChanges)
                        return;
                    var confirmationMessage = "\o/";
                    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                    return "You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
                });
            }
            // Cannot use with Chrome
            if (!isChrome) {
                window.onbeforeunload = function (e) {
                    if (!ChangeMonitor_Util.haveChanges)
                        return;
                    var confirmationMessage = "\o/";
                    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                    return "(2) You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
                };
            }
        }
    };
    // 11/05/20191 04:53 am - SSN 
    // Need to prevent users from navigating away from Angular based pages with pending changes.
    // https://stackoverflow.com/questions/48182912/how-to-detect-browser-with-angular
    var getBrowserName = function () {
        var agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    };
    return {
        setupMonitor: setupMonitor,
        getBrowserName: getBrowserName,
        haveChanges: haveChanges,
        monitorChange_SSN: monitorChange_SSN,
        itemChange_ssn: itemChange_ssn
    };
}();
$(function () {
    setTimeout(ChangeMonitor_Util.monitorChange_SSN, 2000);
    ChangeMonitor_Util.setupMonitor();
});
console.log('ChangeMonitor - 20191109-1114-F');
export { ChangeMonitor_Util };
//# sourceMappingURL=ChangeMonitor.js.map