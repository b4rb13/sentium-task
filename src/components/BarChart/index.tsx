import { FC } from 'react';
import { Bar } from '@ant-design/plots';
import { ChartProps } from 'types';

const BarChart: FC<ChartProps> = ({ data }) => {
  const config = {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position'
        },
        {
          type: 'interval-hide-overlap'
        },
        {
          type: 'adjust-color'
        }
      ]
    }
  };

  return <Bar {...config} label={{ position: 'top' }} />;
};

export default BarChart;
