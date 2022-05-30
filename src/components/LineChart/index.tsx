import { FC } from 'react';
import { Line } from '@ant-design/charts';
import { ChartProps } from 'types';

const LineChart: FC<ChartProps> = ({ data }) => {
  const config = {
    data,
    height: 400,
    xField: 'users',
    yField: 'income',
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

export default LineChart;
