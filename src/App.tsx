import client from 'apollo/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { Suspense } from 'react';
import { Spin } from 'antd';

import MainLayout from './layout';
import './App.less';

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <ApolloProvider client={client}>
        <MainLayout />
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
