/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />
declare namespace site_instance_NS {
    class site_Class {
        static loadCounter: number;
        setDefaults(): void;
        showCollapsedDivs(): void;
        prefixPreWithShowHideAnchor(caller: any): void;
        iso8601RegEx: RegExp;
        fnConverDate(input: any): any;
    }
}
declare let site_instance: site_instance_NS.site_Class;
export { site_instance };
