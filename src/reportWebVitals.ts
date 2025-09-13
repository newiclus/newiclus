const reportWebVitals = (onPerfEntry?: Function) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }: Record<string, any>) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      },
    );
  }
};

export default reportWebVitals;
