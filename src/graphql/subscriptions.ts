/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateINFOBLOCK = /* GraphQL */ `subscription OnCreateINFOBLOCK($filter: ModelSubscriptionINFOBLOCKFilterInput) {
  onCreateINFOBLOCK(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateINFOBLOCKSubscriptionVariables,
  APITypes.OnCreateINFOBLOCKSubscription
>;
export const onUpdateINFOBLOCK = /* GraphQL */ `subscription OnUpdateINFOBLOCK($filter: ModelSubscriptionINFOBLOCKFilterInput) {
  onUpdateINFOBLOCK(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateINFOBLOCKSubscriptionVariables,
  APITypes.OnUpdateINFOBLOCKSubscription
>;
export const onDeleteINFOBLOCK = /* GraphQL */ `subscription OnDeleteINFOBLOCK($filter: ModelSubscriptionINFOBLOCKFilterInput) {
  onDeleteINFOBLOCK(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteINFOBLOCKSubscriptionVariables,
  APITypes.OnDeleteINFOBLOCKSubscription
>;
export const onCreateIMAGE = /* GraphQL */ `subscription OnCreateIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
  onCreateIMAGE(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIMAGESubscriptionVariables,
  APITypes.OnCreateIMAGESubscription
>;
export const onUpdateIMAGE = /* GraphQL */ `subscription OnUpdateIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
  onUpdateIMAGE(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIMAGESubscriptionVariables,
  APITypes.OnUpdateIMAGESubscription
>;
export const onDeleteIMAGE = /* GraphQL */ `subscription OnDeleteIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
  onDeleteIMAGE(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIMAGESubscriptionVariables,
  APITypes.OnDeleteIMAGESubscription
>;
export const onCreatePROJECT = /* GraphQL */ `subscription OnCreatePROJECT($filter: ModelSubscriptionPROJECTFilterInput) {
  onCreatePROJECT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePROJECTSubscriptionVariables,
  APITypes.OnCreatePROJECTSubscription
>;
export const onUpdatePROJECT = /* GraphQL */ `subscription OnUpdatePROJECT($filter: ModelSubscriptionPROJECTFilterInput) {
  onUpdatePROJECT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePROJECTSubscriptionVariables,
  APITypes.OnUpdatePROJECTSubscription
>;
export const onDeletePROJECT = /* GraphQL */ `subscription OnDeletePROJECT($filter: ModelSubscriptionPROJECTFilterInput) {
  onDeletePROJECT(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePROJECTSubscriptionVariables,
  APITypes.OnDeletePROJECTSubscription
>;
