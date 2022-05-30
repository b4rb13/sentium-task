import { FC } from 'react';
import { Pie } from '@ant-design/plots';
import { ChartProps } from 'types';
import { Datum } from '@ant-design/charts';
import { addPercent } from 'utils';

const PieChart: FC<ChartProps> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data: addPercent(data),
    angleField: 'percent',
    colorField: 'device_type',
    radius: 0.9,
    tooltip: {
      formatter: (datum: Datum) => {
        return {
          name: datum.device_type,
          value: datum.percent.toFixed(2) + '%'
        };
      }
    },
    label: {
      type: 'inner',
      offset: '-30%',
      content: () => {
        return ``;
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };

  return <Pie {...config} />;
};

export default PieChart;
