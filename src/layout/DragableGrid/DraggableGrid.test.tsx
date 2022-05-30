//@ts-nocheck
import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { charts } from 'GraphQL/query';
import { act } from 'react-dom/test-utils';
import wait from 'waait';

import DraggableGrid from './index';
import { mockedResponse } from './utils';

const mockChartsData = {
  request: {
    query: charts
  },
  response: mockedResponse
};

it('renders charts data', async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={[mockChartsData]}>
        <DraggableGrid />
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper?.update();
  expect(wrapper).toBeTruthy();
  expect(wrapper.find('.ant-card-head-title')).toHaveText('Audience overview');
});
