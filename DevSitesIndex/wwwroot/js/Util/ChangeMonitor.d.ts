declare var ChangeMonitor_Util: {
    setupMonitor: () => void;
    getBrowserName: () => "edge" | "opera" | "chrome" | "ie" | "firefox" | "safari" | "other";
    haveChanges: boolean;
    monitorChange_SSN: () => void;
    setItemChanged_ssn: (this: HTMLInputElement, ev: Event) => void;
    setItemToResetChangedFlag_ssn: (this: HTMLInputElement, ev: Event) => void;
};
export { ChangeMonitor_Util };