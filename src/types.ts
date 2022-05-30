import { Moment } from 'moment';

export enum ChartTypes {
  LineChart = 'LineChart',
  AreaChart = 'AreaChart',
  PieChart = 'PieChart',
  DrillDown = 'DrillDown',
  ColumnChart = 'ColumnChart',
  BarChart = 'BarChart',
  WordCloudChart = 'WordCloudChart',
  RoseChart = 'RoseChart',
  MultiLineChart = 'MultiLineChart'
}

export type KeyValuePair<V> = { [key: string]: V };

export type ChartData = Array<KeyValuePair<string | number>>;

export type Filters = {
  start: Moment | null;
  end: Moment | null;
};

export interface ChartProps {
  data: ChartData;
}
