import { useState, FC, createElement } from 'react';
import { Layout, Menu, DatePicker } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import moment, { Moment } from 'moment';
import { RangePickerProps } from 'antd/es/date-picker';

import DraggableGrid from './DragableGrid';
import ChartRenderer from '../components/ChartRenderer';
import { ChartTypes, Filters } from '../types';
import './styles.less';

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [date, setDate] = useState<Filters>({
    start: moment('5/22/20'),
    end: moment('6/22/20')
  });

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = current => {
    // Can not select days before today and today

    return (
      current && (current < moment('5/22/20') || current > moment('5/28/22'))
    );
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={'sider'}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Analytics'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Briefings',
              disabled: true
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Calendar',
              disabled: true
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          })}
          {/*@ts-ignore*/}
          <RangePicker
            allowEmpty={[false, false]}
            disabledDate={disabledDate}
            value={[date.start, date.end]}
            onChange={dates => {
              setDate({
                start: dates?.[0] as Moment,
                end: dates?.[1] as Moment
              });
            }}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '16px 8px',
            padding: 8,
            minHeight: 280,
            overflowY: 'scroll'
          }}
        >
          <DraggableGrid filters={date} />
          <ChartRenderer
            filters={date}
            type={ChartTypes.WordCloudChart}
            data={[]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
