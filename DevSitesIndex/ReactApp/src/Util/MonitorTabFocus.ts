
// 05/16/2022 04:12 pm - SSN 
// Limit tabbing to current context (div, form, etc)


export class MonitorTabFocus {


    static monitorFocus(_thisModalID) {

        //const console__log = (input: string, format?: string) => console.log(input, format);
        //const console__dir = (input) => console.dir(input);

        const console__log = (input: string, format?: string) => { };
        const console__dir = (input) => { };


        const checkChildren = (obj1, e_target) => {

            let isChild = false;

            $(obj1).children().each((ndx, elem) => {

                console__dir(elem);

         

                if ((elem instanceof HTMLElement) && elem.isEqualNode(e_target as unknown as HTMLElement)) {
                    console__log('%c ' + 'Is child ', 'font-size:24pt;color:yellow');
                    isChild = true;
                } else {
                    console__log('%c ' + 'Is NOT A child ', 'font-size:24pt;color:yellow');
                }

                if (!isChild) {

                    isChild = checkChildren(elem, e_target);
                }

            });

            return isChild;

        }


        $('*').off('focus');

        $('*').on('focus', function (e) {

            console__log('%c ' + 'got focus-20220516-1452-HHHHH', 'font-size:16pt;color:green');
            console__log('%c ' + _thisModalID, 'font-size:16pt;color:green');
            console__dir(e);
         

            const isChild_local = checkChildren('#' + _thisModalID, e.target);

            if (!isChild_local) {
                console__log('%c ' + 'reset focus  - 20220516-1601', 'color:red;font-size:48pt;');
                $('#' + _thisModalID + ' form :input:visible:enabled:first').focus();
            }

            console__log('--------');
        })


    }
}
