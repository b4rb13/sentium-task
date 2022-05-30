import { FC, useEffect, useState } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from 'react-grid-dnd';
import { Filters, ChartTypes } from 'types';
import { Chart, useChartsQuery } from 'generatedHooks';
import { Spin } from 'antd';

import ChartRenderer from 'components/ChartRenderer';
import Card from 'components/Card';

import './styles.less';

interface Props {
  filters?: Filters;
}

const DraggableGrid: FC<Props> = ({ filters }) => {
  const [items, setItems] = useState<Chart[]>([]);

  const { data, loading } = useChartsQuery();

  useEffect(() => {
    if (data && data.allCharts) {
      setItems(data.allCharts as Chart[]);
    } else {
      setItems([]);
    }
  }, [data]);

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ): void {
    const result = swap(items, sourceIndex, targetIndex);

    setItems(result);
  }

  return (
    <>
      <Spin spinning={loading}>
        <GridContextProvider onChange={onChange}>
          <GridDropZone
            className="dropzone left"
            id="left"
            boxesPerRow={3}
            rowHeight={300}
          >
            {items.map(item => (
              <GridItem key={item?.id} className={'item-wrapper'}>
                <Card title={item?.title}>
                  <div className="grid-item-content">
                    <ChartRenderer
                      filters={filters as Filters}
                      type={item?.type as ChartTypes}
                      data={item?.data}
                    />
                  </div>
                </Card>
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </Spin>
    </>
  );
};

export default DraggableGrid;
