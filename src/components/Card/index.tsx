import { FC } from 'react';
import { Card as AntCard, Skeleton } from 'antd';
import './styles.less';

interface Props {
  title?: string;
}

const Card: FC<Props> = ({ title, children }) => {
  return (
    <AntCard className={'chart-card'} title={title || <Skeleton.Input />}>
      {children}
    </AntCard>
  );
};

export default Card;
