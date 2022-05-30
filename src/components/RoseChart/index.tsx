import { FC } from 'react';
import { Rose } from '@ant-design/plots';
import { ChartProps } from 'types';

const RoseChart: FC<ChartProps> = ({ data }) => {
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15
    }
  };

  return <Rose {...config} />;
};

export default RoseChart;
