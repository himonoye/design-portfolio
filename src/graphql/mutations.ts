/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createINFOBLOCK = /* GraphQL */ `mutation CreateINFOBLOCK(
  $input: CreateINFOBLOCKInput!
  $condition: ModelINFOBLOCKConditionInput
) {
  createINFOBLOCK(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateINFOBLOCKMutationVariables,
  APITypes.CreateINFOBLOCKMutation
>;
export const updateINFOBLOCK = /* GraphQL */ `mutation UpdateINFOBLOCK(
  $input: UpdateINFOBLOCKInput!
  $condition: ModelINFOBLOCKConditionInput
) {
  updateINFOBLOCK(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateINFOBLOCKMutationVariables,
  APITypes.UpdateINFOBLOCKMutation
>;
export const deleteINFOBLOCK = /* GraphQL */ `mutation DeleteINFOBLOCK(
  $input: DeleteINFOBLOCKInput!
  $condition: ModelINFOBLOCKConditionInput
) {
  deleteINFOBLOCK(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteINFOBLOCKMutationVariables,
  APITypes.DeleteINFOBLOCKMutation
>;
export const createIMAGE = /* GraphQL */ `mutation CreateIMAGE(
  $input: CreateIMAGEInput!
  $condition: ModelIMAGEConditionInput
) {
  createIMAGE(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIMAGEMutationVariables,
  APITypes.CreateIMAGEMutation
>;
export const updateIMAGE = /* GraphQL */ `mutation UpdateIMAGE(
  $input: UpdateIMAGEInput!
  $condition: ModelIMAGEConditionInput
) {
  updateIMAGE(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIMAGEMutationVariables,
  APITypes.UpdateIMAGEMutation
>;
export const deleteIMAGE = /* GraphQL */ `mutation DeleteIMAGE(
  $input: DeleteIMAGEInput!
  $condition: ModelIMAGEConditionInput
) {
  deleteIMAGE(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIMAGEMutationVariables,
  APITypes.DeleteIMAGEMutation
>;
export const createPROJECT = /* GraphQL */ `mutation CreatePROJECT(
  $input: CreatePROJECTInput!
  $condition: ModelPROJECTConditionInput
) {
  createPROJECT(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePROJECTMutationVariables,
  APITypes.CreatePROJECTMutation
>;
export const updatePROJECT = /* GraphQL */ `mutation UpdatePROJECT(
  $input: UpdatePROJECTInput!
  $condition: ModelPROJECTConditionInput
) {
  updatePROJECT(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePROJECTMutationVariables,
  APITypes.UpdatePROJECTMutation
>;
export const deletePROJECT = /* GraphQL */ `mutation DeletePROJECT(
  $input: DeletePROJECTInput!
  $condition: ModelPROJECTConditionInput
) {
  deletePROJECT(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePROJECTMutationVariables,
  APITypes.DeletePROJECTMutation
>;
