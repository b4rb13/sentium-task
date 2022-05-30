import { FC } from 'react';
import { Column } from '@ant-design/plots';
import { ChartProps, KeyValuePair } from 'types';

import { brandColor, paletteSemanticRed } from '../ChartRenderer/constants';

const ColumnChart: FC<ChartProps> = ({ data }) => {
  const config = {
    data: data.map(c => ({ ...c, users: Number(c.users) })),
    xField: 'country',
    yField: 'users',
    yAxis: { max: 600000 },
    label: {
      content: (originData: KeyValuePair<string>) => {
        const val = parseFloat(originData.users);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }

        return '';
      },
      offset: 10
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  };

  return <Column {...config} />;
};

export default ColumnChart;
