import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  _allChartsMeta?: Maybe<ListMetadata>;
  allCharts?: Maybe<Array<Maybe<Chart>>>;
  Chart?: Maybe<Chart>;
};


export type Query_AllChartsMetaArgs = {
  filter?: InputMaybe<ChartFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllChartsArgs = {
  filter?: InputMaybe<ChartFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryChartArgs = {
  id: Scalars['ID'];
};

export type ChartFilter = {
  data?: InputMaybe<Scalars['JSON']>;
  data_neq?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  q?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_neq?: InputMaybe<Scalars['String']>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Chart = {
  __typename?: 'Chart';
  data: Scalars['JSON'];
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChart?: Maybe<Chart>;
  createManyChart?: Maybe<Array<Maybe<Chart>>>;
  removeChart?: Maybe<Chart>;
  updateChart?: Maybe<Chart>;
};


export type MutationCreateChartArgs = {
  data: Scalars['JSON'];
  title: Scalars['String'];
  type: Scalars['String'];
};


export type MutationCreateManyChartArgs = {
  data?: InputMaybe<Array<InputMaybe<ChartInput>>>;
};


export type MutationRemoveChartArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateChartArgs = {
  data?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ChartInput = {
  data: Scalars['JSON'];
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ChartFilter: ResolverTypeWrapper<any>;
  JSON: ResolverTypeWrapper<any>;
  ID: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  ListMetadata: ResolverTypeWrapper<any>;
  Chart: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  ChartInput: ResolverTypeWrapper<any>;
  Boolean: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ChartFilter: any;
  JSON: any;
  ID: any;
  String: any;
  Int: any;
  ListMetadata: any;
  Chart: any;
  Mutation: {};
  ChartInput: any;
  Boolean: any;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _allChartsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllChartsMetaArgs>>;
  allCharts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chart']>>>, ParentType, ContextType, Partial<QueryAllChartsArgs>>;
  Chart?: Resolver<Maybe<ResolversTypes['Chart']>, ParentType, ContextType, RequireFields<QueryChartArgs, 'id'>>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chart'] = ResolversParentTypes['Chart']> = {
  data?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChart?: Resolver<Maybe<ResolversTypes['Chart']>, ParentType, ContextType, RequireFields<MutationCreateChartArgs, 'data' | 'title' | 'type'>>;
  createManyChart?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chart']>>>, ParentType, ContextType, Partial<MutationCreateManyChartArgs>>;
  removeChart?: Resolver<Maybe<ResolversTypes['Chart']>, ParentType, ContextType, RequireFields<MutationRemoveChartArgs, 'id'>>;
  updateChart?: Resolver<Maybe<ResolversTypes['Chart']>, ParentType, ContextType, RequireFields<MutationUpdateChartArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Chart?: ChartResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


export type ChartsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChartsQuery = { __typename?: 'Query', allCharts?: Array<{ __typename?: 'Chart', id: string, title: string, type: string, data: any } | null> | null };


export const ChartsDocument = /*#__PURE__*/ gql`
    query charts {
  allCharts {
    id
    title
    type
    data
  }
}
    `;

/**
 * __useChartsQuery__
 *
 * To run a query within a React component, call `useChartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChartsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChartsQuery(baseOptions?: Apollo.QueryHookOptions<ChartsQuery, ChartsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChartsQuery, ChartsQueryVariables>(ChartsDocument, options);
      }
export function useChartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChartsQuery, ChartsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChartsQuery, ChartsQueryVariables>(ChartsDocument, options);
        }
export type ChartsQueryHookResult = ReturnType<typeof useChartsQuery>;
export type ChartsLazyQueryHookResult = ReturnType<typeof useChartsLazyQuery>;
export type ChartsQueryResult = Apollo.QueryResult<ChartsQuery, ChartsQueryVariables>;
export function refetchChartsQuery(variables?: ChartsQueryVariables) {
      return { query: ChartsDocument, variables: variables }
    }