/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getINFOBLOCK = /* GraphQL */ `query GetINFOBLOCK($id: ID!) {
  getINFOBLOCK(id: $id) {
    id
    project_id
    IMAGES {
      items {
        id
        image_caption
        image_URL
        image_altTag
        infoblock_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    heading
    paragraph
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetINFOBLOCKQueryVariables,
  APITypes.GetINFOBLOCKQuery
>;
export const listINFOBLOCKS = /* GraphQL */ `query ListINFOBLOCKS(
  $filter: ModelINFOBLOCKFilterInput
  $limit: Int
  $nextToken: String
) {
  listINFOBLOCKS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      project_id
      IMAGES {
        items {
          id
          image_caption
          image_URL
          image_altTag
          infoblock_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      heading
      paragraph
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListINFOBLOCKSQueryVariables,
  APITypes.ListINFOBLOCKSQuery
>;
export const iNFOBLOCKSByProject_id = /* GraphQL */ `query INFOBLOCKSByProject_id(
  $project_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelINFOBLOCKFilterInput
  $limit: Int
  $nextToken: String
) {
  iNFOBLOCKSByProject_id(
    project_id: $project_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      project_id
      IMAGES {
        items {
          id
          image_caption
          image_URL
          image_altTag
          infoblock_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      heading
      paragraph
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.INFOBLOCKSByProject_idQueryVariables,
  APITypes.INFOBLOCKSByProject_idQuery
>;
export const getIMAGE = /* GraphQL */ `query GetIMAGE($id: ID!) {
  getIMAGE(id: $id) {
    id
    image_caption
    image_URL
    image_altTag
    infoblock_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIMAGEQueryVariables, APITypes.GetIMAGEQuery>;
export const listIMAGES = /* GraphQL */ `query ListIMAGES(
  $filter: ModelIMAGEFilterInput
  $limit: Int
  $nextToken: String
) {
  listIMAGES(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image_caption
      image_URL
      image_altTag
      infoblock_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIMAGESQueryVariables,
  APITypes.ListIMAGESQuery
>;
export const iMAGESByInfoblock_id = /* GraphQL */ `query IMAGESByInfoblock_id(
  $infoblock_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIMAGEFilterInput
  $limit: Int
  $nextToken: String
) {
  iMAGESByInfoblock_id(
    infoblock_id: $infoblock_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      image_caption
      image_URL
      image_altTag
      infoblock_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IMAGESByInfoblock_idQueryVariables,
  APITypes.IMAGESByInfoblock_idQuery
>;
export const getPROJECT = /* GraphQL */ `query GetPROJECT($id: ID!) {
  getPROJECT(id: $id) {
    id
    name
    start_date
    end_date
    team_members
    summary {
      objective
      requirement
      __typename
    }
    content {
      p_1
      p_2
      p_3
      p_4
      p_5
      __typename
    }
    next_project
    INFOBLOCKS {
      items {
        id
        project_id
        IMAGES {
          nextToken
          __typename
        }
        heading
        paragraph
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPROJECTQueryVariables,
  APITypes.GetPROJECTQuery
>;
export const listPROJECTS = /* GraphQL */ `query ListPROJECTS(
  $filter: ModelPROJECTFilterInput
  $limit: Int
  $nextToken: String
) {
  listPROJECTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      start_date
      end_date
      team_members
      summary {
        objective
        requirement
        __typename
      }
      content {
        p_1
        p_2
        p_3
        p_4
        p_5
        __typename
      }
      next_project
      INFOBLOCKS {
        items {
          id
          project_id
          heading
          paragraph
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPROJECTSQueryVariables,
  APITypes.ListPROJECTSQuery
>;
