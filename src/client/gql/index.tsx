import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimal: Animal;
  updateAnimal: Scalars['Boolean'];
  deleteAnimal: Scalars['Boolean'];
};


export type MutationCreateAnimalArgs = {
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationUpdateAnimalArgs = {
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationDeleteAnimalArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  animal: Animal;
  animals: Array<Animal>;
};


export type QueryAnimalArgs = {
  id: Scalars['ID'];
};

export type CreateAnimalMutationVariables = Exact<{
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type CreateAnimalMutation = (
  { __typename?: 'Mutation' }
  & { createAnimal: (
    { __typename?: 'Animal' }
    & Pick<Animal, 'species' | 'favoriteFood'>
  ) }
);

export type UpdateAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type UpdateAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateAnimal'>
);

export type DeleteAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAnimal'>
);

export type GetAnimalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAnimalQuery = (
  { __typename?: 'Query' }
  & { animal: (
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  ) }
);

export type GetAnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimalsQuery = (
  { __typename?: 'Query' }
  & { animals: Array<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  )> }
);


export const CreateAnimalDocument = gql`
    mutation CreateAnimal($species: String!, $favoriteFood: String!) {
  createAnimal(species: $species, favoriteFood: $favoriteFood) {
    species
    favoriteFood
  }
}
    `;
export type CreateAnimalMutationFn = Apollo.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;

/**
 * __useCreateAnimalMutation__
 *
 * To run a mutation, you first call `useCreateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnimalMutation, { data, loading, error }] = useCreateAnimalMutation({
 *   variables: {
 *      species: // value for 'species'
 *      favoriteFood: // value for 'favoriteFood'
 *   },
 * });
 */
export function useCreateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnimalMutation, CreateAnimalMutationVariables>) {
        return Apollo.useMutation<CreateAnimalMutation, CreateAnimalMutationVariables>(CreateAnimalDocument, baseOptions);
      }
export type CreateAnimalMutationHookResult = ReturnType<typeof useCreateAnimalMutation>;
export type CreateAnimalMutationResult = Apollo.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = Apollo.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const UpdateAnimalDocument = gql`
    mutation UpdateAnimal($id: ID!, $species: String!, $favoriteFood: String!) {
  updateAnimal(id: $id, species: $species, favoriteFood: $favoriteFood)
}
    `;
export type UpdateAnimalMutationFn = Apollo.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>;

/**
 * __useUpdateAnimalMutation__
 *
 * To run a mutation, you first call `useUpdateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnimalMutation, { data, loading, error }] = useUpdateAnimalMutation({
 *   variables: {
 *      id: // value for 'id'
 *      species: // value for 'species'
 *      favoriteFood: // value for 'favoriteFood'
 *   },
 * });
 */
export function useUpdateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>) {
        return Apollo.useMutation<UpdateAnimalMutation, UpdateAnimalMutationVariables>(UpdateAnimalDocument, baseOptions);
      }
export type UpdateAnimalMutationHookResult = ReturnType<typeof useUpdateAnimalMutation>;
export type UpdateAnimalMutationResult = Apollo.MutationResult<UpdateAnimalMutation>;
export type UpdateAnimalMutationOptions = Apollo.BaseMutationOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export const DeleteAnimalDocument = gql`
    mutation DeleteAnimal($id: ID!) {
  deleteAnimal(id: $id)
}
    `;
export type DeleteAnimalMutationFn = Apollo.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>;

/**
 * __useDeleteAnimalMutation__
 *
 * To run a mutation, you first call `useDeleteAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnimalMutation, { data, loading, error }] = useDeleteAnimalMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnimalMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>) {
        return Apollo.useMutation<DeleteAnimalMutation, DeleteAnimalMutationVariables>(DeleteAnimalDocument, baseOptions);
      }
export type DeleteAnimalMutationHookResult = ReturnType<typeof useDeleteAnimalMutation>;
export type DeleteAnimalMutationResult = Apollo.MutationResult<DeleteAnimalMutation>;
export type DeleteAnimalMutationOptions = Apollo.BaseMutationOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export const GetAnimalDocument = gql`
    query GetAnimal($id: ID!) {
  animal(id: $id) {
    id
    species
    favoriteFood
  }
}
    `;

/**
 * __useGetAnimalQuery__
 *
 * To run a query within a React component, call `useGetAnimalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnimalQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimalQuery, GetAnimalQueryVariables>) {
        return Apollo.useQuery<GetAnimalQuery, GetAnimalQueryVariables>(GetAnimalDocument, baseOptions);
      }
export function useGetAnimalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimalQuery, GetAnimalQueryVariables>) {
          return Apollo.useLazyQuery<GetAnimalQuery, GetAnimalQueryVariables>(GetAnimalDocument, baseOptions);
        }
export type GetAnimalQueryHookResult = ReturnType<typeof useGetAnimalQuery>;
export type GetAnimalLazyQueryHookResult = ReturnType<typeof useGetAnimalLazyQuery>;
export type GetAnimalQueryResult = Apollo.QueryResult<GetAnimalQuery, GetAnimalQueryVariables>;
export const GetAnimalsDocument = gql`
    query GetAnimals {
  animals {
    id
    species
    favoriteFood
  }
}
    `;

/**
 * __useGetAnimalsQuery__
 *
 * To run a query within a React component, call `useGetAnimalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnimalsQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimalsQuery, GetAnimalsQueryVariables>) {
        return Apollo.useQuery<GetAnimalsQuery, GetAnimalsQueryVariables>(GetAnimalsDocument, baseOptions);
      }
export function useGetAnimalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimalsQuery, GetAnimalsQueryVariables>) {
          return Apollo.useLazyQuery<GetAnimalsQuery, GetAnimalsQueryVariables>(GetAnimalsDocument, baseOptions);
        }
export type GetAnimalsQueryHookResult = ReturnType<typeof useGetAnimalsQuery>;
export type GetAnimalsLazyQueryHookResult = ReturnType<typeof useGetAnimalsLazyQuery>;
export type GetAnimalsQueryResult = Apollo.QueryResult<GetAnimalsQuery, GetAnimalsQueryVariables>;