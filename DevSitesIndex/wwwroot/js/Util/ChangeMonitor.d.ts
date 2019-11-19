declare var ChangeMonitor_Util: {
    setupMonitor_v01: () => void;
    getBrowserName: () => "edge" | "opera" | "chrome" | "ie" | "firefox" | "safari" | "other";
    monitorChange_SSN: () => void;
    setItemChanged_ssn: (this: HTMLInputElement, ev: Event) => void;
    setItemToResetChangedFlag_ssn: (this: HTMLInputElement, ev: Event) => void;
    setupMonitor_FullProcess: () => void;
};
export { ChangeMonitor_Util };
