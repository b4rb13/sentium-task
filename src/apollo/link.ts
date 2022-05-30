import { ApolloLink, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { message as antMessage } from 'antd';

const { REACT_APP_SERVER_URL } = process.env;

const links = {
  namedLink: () =>
    new ApolloLink((operation, forward) => {
      if (process.env.NODE_ENV === 'development') {
        operation.setContext(() => ({
          uri: `${REACT_APP_SERVER_URL}?${operation.operationName}`
        }));
      }

      return forward ? forward(operation) : null;
    }),

  retry: () =>
    new RetryLink({
      delay: {
        initial: 2000,
        max: Infinity,
        jitter: true
      },
      attempts: {
        max: 10,
        retryIf: error => !!error
      }
    }),

  error: () =>
    onError(({ graphQLErrors, networkError, operation }) => {
      if (graphQLErrors) {
        for (const { message, locations, path } of graphQLErrors) {
          // eslint-disable-next-line no-console
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        }

        antMessage.error('Something went wrong!');
      }

      if (networkError) {
        // eslint-disable-next-line no-console
        console.error(`[Network error]: ${networkError}`);

        if (typeof window !== 'undefined' && !window.navigator.onLine) {
          antMessage.error('Sorry, your browser is offline.');
        } else {
          antMessage.error('Some other network error occurred.');
        }
      }
    }),

  server: () =>
    new HttpLink({
      uri: REACT_APP_SERVER_URL
    })
};

export const link = from([
  links.namedLink(),
  links.error(),
  links.retry(),
  links.server()
]);
