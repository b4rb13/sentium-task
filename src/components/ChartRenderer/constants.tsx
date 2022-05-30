import { ChartData, ChartTypes, Filters } from 'types';
import { ReactElement } from 'react';

import LineChart from 'components/LineChart';
import WordCloudChart from 'components/WordCloud';
import AreaChart from 'components/AreaChart';
import PieChart from 'components/PieChart';
import ColumnChart from 'components/ColumnChart';
import BarChart from 'components/BarChart';
import RoseChart from 'components/RoseChart';
import MultiLineChart from 'components/MultiLineChart';

export const paletteSemanticRed = '#F4664A';
export const brandColor = '#5B8FF9';

export const charts: {
  [key in ChartTypes]?: (data: ChartData, filters: Filters) => ReactElement;
} = {
  [ChartTypes.LineChart]: data => <LineChart data={data} />,
  [ChartTypes.WordCloudChart]: data => <WordCloudChart data={data} />,
  [ChartTypes.AreaChart]: (data, filters) => (
    <AreaChart data={data} filters={filters} />
  ),
  [ChartTypes.PieChart]: data => <PieChart data={data} />,
  [ChartTypes.ColumnChart]: data => <ColumnChart data={data} />,
  [ChartTypes.BarChart]: data => <BarChart data={data} />,
  [ChartTypes.RoseChart]: data => <RoseChart data={data} />,
  [ChartTypes.MultiLineChart]: data => <MultiLineChart data={data} />
};
