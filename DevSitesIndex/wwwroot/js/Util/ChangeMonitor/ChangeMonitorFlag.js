// 11/18/2019 03:18 pm - SSN - Moved from ChangeMonitor.ts
var ChangeMonitorFlag_class = /** @class */ (function () {
    function ChangeMonitorFlag_class() {
    }
    Object.defineProperty(ChangeMonitorFlag_class.prototype, "haveChanges", {
        get: function () {
            console.log('ChangeMonitorFlag.ts - getter - 20200815-0759--005');
            var _haveChanges = window["haveChanges_GLOBAL"];
            console.log('ChangeMonitorFlag.ts - getter - 20200815-0759--005    haveChanges_GLOBAL     GET   _haveChanges [', _haveChanges, ']');
            console.log("typeof (_haveChanges) ", typeof (_haveChanges));
            if (typeof (_haveChanges) === 'undefined') {
                console.log("ChangeMonitorFlag - Setting default value ");
                console.log("ChangeMonitorFlag - Setting default value ");
                console.log("ChangeMonitorFlag - Setting default value ");
                console.log("ChangeMonitorFlag - Setting default value ");
                console.log("ChangeMonitorFlag - Setting default value ");
                _haveChanges = false;
            }
            console.log('_haveChanges : [', _haveChanges, ']');
            return _haveChanges;
        },
        set: function (_haveChanges) {
            console.log('ChangeMonitorService.ts - haveChanges - []haveChanges_GLOBAL]   SET  20200815-0758-004 [', _haveChanges, ']');
            window["haveChanges_GLOBAL"] = _haveChanges;
            console.log('ChangeMonitorFlag.ts - setter ', _haveChanges);
        },
        enumerable: true,
        configurable: true
    });
    return ChangeMonitorFlag_class;
}());
var ChangeMonitorFlag = new ChangeMonitorFlag_class();
export { ChangeMonitorFlag };
//# sourceMappingURL=ChangeMonitorFlag.js.map