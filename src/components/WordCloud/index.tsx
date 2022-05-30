import { FC, useEffect, useState } from 'react';
import { WordCloud } from '@ant-design/plots';
import { ChartProps } from 'types';
import { sentiumImageMask } from 'utils';

const WordCloudChart: FC<ChartProps> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json'
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask: sentiumImageMask
  };

  return (
    <WordCloud
      {...config}
      wordStyle={{
        fontSize: [8, 32],
        fontFamily: 'Verdana'
      }}
    />
  );
};

export default WordCloudChart;
