/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />
/// <reference path="../../node_modules_hack/SSN_console_model.d.ts" />
/// <reference types="jquery" />
declare namespace site_instance_NS {
    class site_Class {
        static loadCounter: number;
        disableEmptyCollapsableDivs(): void;
        setDefaults(): void;
        showCollapsedDivs(): void;
        prefixPreWithShowHideAnchor(caller: any): void;
        iso8601RegEx: RegExp;
        fnConverDate(input: any): any;
    }
}
declare let site_instance: site_instance_NS.site_Class;
export { site_instance };
