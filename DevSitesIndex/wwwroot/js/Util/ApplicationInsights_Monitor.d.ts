declare var AppInsights_Util: {
    doSetup: (callSource: string) => void;
    doTest: () => void;
    logPageView: (name?: string, url?: string, properties?: any, measurements?: any, duration?: number) => void;
    logEvent: (name: string, properties?: any, measurements?: any) => void;
    logException: (exception: any, props?: any, handledAt?: string) => void;
};
export { AppInsights_Util };
