import { FC, useMemo } from 'react';
import { Area } from '@ant-design/plots';
import { ChartProps, Filters } from 'types';

interface Props extends ChartProps {
  filters: Filters;
}

const AreaChart: FC<Props> = ({ data, filters }) => {
  console.log(
    filters.end?.format('M/DD/YY'),
    "data.findIndex(i => i.date === filters.start?.format('M/DD/YY'))"
  );
  const chartData = useMemo(() => {
    return data.slice(
      data.findIndex(i => i.date === filters.start?.format('M/DD/YY')),
      data.findIndex(i => i.date === filters.end?.format('M/DD/YY'))
    );
  }, [filters]);

  const config = {
    data: chartData,
    xField: 'date',
    yField: 'count',
    xAxis: {
      range: [0, 1]
    },
    yAxis: {
      tickCount: 3
    }
  };

  return <Area {...config} />;
};

export default AreaChart;
