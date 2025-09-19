import { onCLS, onINP, onLCP } from "web-vitals";

/**
 * @file reportWebVitals.ts
 * @description This file is used to measure performance in a React application.
 * It uses the web-vitals library to report various performance metrics.
 * You can pass a function to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */

const reportWebVitals = (onPerfEntry?: Function) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(console.log);
    onLCP(console.log);
    onINP(console.log);
  }
};

export default reportWebVitals;
