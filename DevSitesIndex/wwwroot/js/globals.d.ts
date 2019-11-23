import * as angular from "angular";
declare var globals_instance: {
    getInstance: (applicationName: string, args?: string[]) => angular.IModule;
};
declare var test_103: {
    doIt: () => void;
};
declare enum Timelog_ServingPage {
    Timelog = "Timelog",
    Job_Timelog = "Job_Timelog",
    Projects_Search = "Projects_Search"
}
declare function Timelog_ServingPage_checkvalue(value: Timelog_ServingPage, compareTo: Timelog_ServingPage): boolean;
export { globals_instance, test_103, Timelog_ServingPage, Timelog_ServingPage_checkvalue };
