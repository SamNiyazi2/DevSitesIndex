declare var AppInsights_Util: {
    doSetup: () => void;
    doTest: () => void;
    logPageView: (name?: string, url?: string, properties?: any, measurements?: any, duration?: number) => void;
    logEvent: (name: string, properties?: any, measurements?: any) => void;
    logException: (exception: Error, props?: any, handledAt?: string) => void;
};
export { AppInsights_Util };
