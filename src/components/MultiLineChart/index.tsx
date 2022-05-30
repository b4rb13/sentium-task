import { FC } from 'react';
import { Line } from '@ant-design/charts';
import { ChartProps } from 'types';

const MultiLineChart: FC<ChartProps> = ({ data }) => {
  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'count',
    seriesField: 'name',
    yAxis: {
      tickCount: 3
    },
    point: {
      size: 5,
      shape: 'diamond'
    }
  };

  return <Line {...config} />;
};

export default MultiLineChart;
