import { FC, memo } from 'react';
import { ChartProps, ChartTypes, Filters } from 'types';

import { charts } from './constants';

interface Props extends ChartProps {
  type?: ChartTypes;
  filters: Filters;
}

const ChartRenderer: FC<Props> = ({ type, data, filters }) => {
  return <>{type && charts[type]?.(data, filters)}</>;
};

export default memo(ChartRenderer);
