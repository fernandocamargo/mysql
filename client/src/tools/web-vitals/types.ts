export type { ReportHandler as Reporter } from 'web-vitals';

export type Default = false | Promise<void>;

export type Metric = Function;

export type Metrics = {
  getCLS: Metric;
  getFID: Metric;
  getFCP: Metric;
  getLCP: Metric;
  getTTFB: Metric;
};
