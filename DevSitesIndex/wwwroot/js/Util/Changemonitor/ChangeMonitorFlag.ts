
// 11/18/2019 03:18 pm - SSN - Moved from ChangeMonitor.ts


class ChangeMonitorFlag_class {



    get haveChanges(): boolean {


        let _haveChanges = window["haveChanges_GLOBAL"];


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
    }


    set haveChanges(_haveChanges: boolean) {

        window["haveChanges_GLOBAL"] = _haveChanges;

        console.log('ChangeMonitorFlag.ts - setter ', _haveChanges);

    }



}


let ChangeMonitorFlag = new ChangeMonitorFlag_class();

export { ChangeMonitorFlag };

