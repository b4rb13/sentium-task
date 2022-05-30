import { gql } from '@apollo/client';

export const charts = gql`
  query charts {
    allCharts {
      id
      title
      type
      data
    }
  }
`;
