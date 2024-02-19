/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateINFOBLOCKInput = {
  id?: string | null,
  project_id: string,
  heading?: string | null,
  paragraph?: string | null,
};

export type ModelINFOBLOCKConditionInput = {
  project_id?: ModelIDInput | null,
  heading?: ModelStringInput | null,
  paragraph?: ModelStringInput | null,
  and?: Array< ModelINFOBLOCKConditionInput | null > | null,
  or?: Array< ModelINFOBLOCKConditionInput | null > | null,
  not?: ModelINFOBLOCKConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type INFOBLOCK = {
  __typename: "INFOBLOCK",
  id: string,
  project_id: string,
  IMAGES?: ModelIMAGEConnection | null,
  heading?: string | null,
  paragraph?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIMAGEConnection = {
  __typename: "ModelIMAGEConnection",
  items:  Array<IMAGE | null >,
  nextToken?: string | null,
};

export type IMAGE = {
  __typename: "IMAGE",
  id: string,
  image_caption?: string | null,
  image_URL?: string | null,
  image_altTag?: string | null,
  infoblock_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateINFOBLOCKInput = {
  id: string,
  project_id?: string | null,
  heading?: string | null,
  paragraph?: string | null,
};

export type DeleteINFOBLOCKInput = {
  id: string,
};

export type CreateIMAGEInput = {
  id?: string | null,
  image_caption?: string | null,
  image_URL?: string | null,
  image_altTag?: string | null,
  infoblock_id: string,
};

export type ModelIMAGEConditionInput = {
  image_caption?: ModelStringInput | null,
  image_URL?: ModelStringInput | null,
  image_altTag?: ModelStringInput | null,
  infoblock_id?: ModelIDInput | null,
  and?: Array< ModelIMAGEConditionInput | null > | null,
  or?: Array< ModelIMAGEConditionInput | null > | null,
  not?: ModelIMAGEConditionInput | null,
};

export type UpdateIMAGEInput = {
  id: string,
  image_caption?: string | null,
  image_URL?: string | null,
  image_altTag?: string | null,
  infoblock_id?: string | null,
};

export type DeleteIMAGEInput = {
  id: string,
};

export type CreatePROJECTInput = {
  id?: string | null,
  name?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  team_members?: string | null,
  summary?: PROJECTSUMMARYInput | null,
  content?: PROJECTCONTENTInput | null,
  next_project?: string | null,
};

export type PROJECTSUMMARYInput = {
  objective?: string | null,
  requirement?: string | null,
};

export type PROJECTCONTENTInput = {
  p_1?: string | null,
  p_2?: string | null,
  p_3?: string | null,
  p_4?: string | null,
  p_5?: string | null,
};

export type ModelPROJECTConditionInput = {
  name?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  team_members?: ModelStringInput | null,
  next_project?: ModelIDInput | null,
  and?: Array< ModelPROJECTConditionInput | null > | null,
  or?: Array< ModelPROJECTConditionInput | null > | null,
  not?: ModelPROJECTConditionInput | null,
};

export type PROJECT = {
  __typename: "PROJECT",
  id: string,
  name?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  team_members?: string | null,
  summary?: PROJECTSUMMARY | null,
  content?: PROJECTCONTENT | null,
  next_project?: string | null,
  INFOBLOCKS?: ModelINFOBLOCKConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type PROJECTSUMMARY = {
  __typename: "PROJECTSUMMARY",
  objective?: string | null,
  requirement?: string | null,
};

export type PROJECTCONTENT = {
  __typename: "PROJECTCONTENT",
  p_1?: string | null,
  p_2?: string | null,
  p_3?: string | null,
  p_4?: string | null,
  p_5?: string | null,
};

export type ModelINFOBLOCKConnection = {
  __typename: "ModelINFOBLOCKConnection",
  items:  Array<INFOBLOCK | null >,
  nextToken?: string | null,
};

export type UpdatePROJECTInput = {
  id: string,
  name?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  team_members?: string | null,
  summary?: PROJECTSUMMARYInput | null,
  content?: PROJECTCONTENTInput | null,
  next_project?: string | null,
};

export type DeletePROJECTInput = {
  id: string,
};

export type ModelINFOBLOCKFilterInput = {
  id?: ModelIDInput | null,
  project_id?: ModelIDInput | null,
  heading?: ModelStringInput | null,
  paragraph?: ModelStringInput | null,
  and?: Array< ModelINFOBLOCKFilterInput | null > | null,
  or?: Array< ModelINFOBLOCKFilterInput | null > | null,
  not?: ModelINFOBLOCKFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIMAGEFilterInput = {
  id?: ModelIDInput | null,
  image_caption?: ModelStringInput | null,
  image_URL?: ModelStringInput | null,
  image_altTag?: ModelStringInput | null,
  infoblock_id?: ModelIDInput | null,
  and?: Array< ModelIMAGEFilterInput | null > | null,
  or?: Array< ModelIMAGEFilterInput | null > | null,
  not?: ModelIMAGEFilterInput | null,
};

export type ModelPROJECTFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  team_members?: ModelStringInput | null,
  next_project?: ModelIDInput | null,
  and?: Array< ModelPROJECTFilterInput | null > | null,
  or?: Array< ModelPROJECTFilterInput | null > | null,
  not?: ModelPROJECTFilterInput | null,
};

export type ModelPROJECTConnection = {
  __typename: "ModelPROJECTConnection",
  items:  Array<PROJECT | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionINFOBLOCKFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  project_id?: ModelSubscriptionIDInput | null,
  heading?: ModelSubscriptionStringInput | null,
  paragraph?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionINFOBLOCKFilterInput | null > | null,
  or?: Array< ModelSubscriptionINFOBLOCKFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIMAGEFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image_caption?: ModelSubscriptionStringInput | null,
  image_URL?: ModelSubscriptionStringInput | null,
  image_altTag?: ModelSubscriptionStringInput | null,
  infoblock_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionIMAGEFilterInput | null > | null,
  or?: Array< ModelSubscriptionIMAGEFilterInput | null > | null,
};

export type ModelSubscriptionPROJECTFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  team_members?: ModelSubscriptionStringInput | null,
  next_project?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPROJECTFilterInput | null > | null,
  or?: Array< ModelSubscriptionPROJECTFilterInput | null > | null,
};

export type CreateINFOBLOCKMutationVariables = {
  input: CreateINFOBLOCKInput,
  condition?: ModelINFOBLOCKConditionInput | null,
};

export type CreateINFOBLOCKMutation = {
  createINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateINFOBLOCKMutationVariables = {
  input: UpdateINFOBLOCKInput,
  condition?: ModelINFOBLOCKConditionInput | null,
};

export type UpdateINFOBLOCKMutation = {
  updateINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteINFOBLOCKMutationVariables = {
  input: DeleteINFOBLOCKInput,
  condition?: ModelINFOBLOCKConditionInput | null,
};

export type DeleteINFOBLOCKMutation = {
  deleteINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIMAGEMutationVariables = {
  input: CreateIMAGEInput,
  condition?: ModelIMAGEConditionInput | null,
};

export type CreateIMAGEMutation = {
  createIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIMAGEMutationVariables = {
  input: UpdateIMAGEInput,
  condition?: ModelIMAGEConditionInput | null,
};

export type UpdateIMAGEMutation = {
  updateIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIMAGEMutationVariables = {
  input: DeleteIMAGEInput,
  condition?: ModelIMAGEConditionInput | null,
};

export type DeleteIMAGEMutation = {
  deleteIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePROJECTMutationVariables = {
  input: CreatePROJECTInput,
  condition?: ModelPROJECTConditionInput | null,
};

export type CreatePROJECTMutation = {
  createPROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePROJECTMutationVariables = {
  input: UpdatePROJECTInput,
  condition?: ModelPROJECTConditionInput | null,
};

export type UpdatePROJECTMutation = {
  updatePROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePROJECTMutationVariables = {
  input: DeletePROJECTInput,
  condition?: ModelPROJECTConditionInput | null,
};

export type DeletePROJECTMutation = {
  deletePROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetINFOBLOCKQueryVariables = {
  id: string,
};

export type GetINFOBLOCKQuery = {
  getINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListINFOBLOCKSQueryVariables = {
  filter?: ModelINFOBLOCKFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListINFOBLOCKSQuery = {
  listINFOBLOCKS?:  {
    __typename: "ModelINFOBLOCKConnection",
    items:  Array< {
      __typename: "INFOBLOCK",
      id: string,
      project_id: string,
      IMAGES?:  {
        __typename: "ModelIMAGEConnection",
        items:  Array< {
          __typename: "IMAGE",
          id: string,
          image_caption?: string | null,
          image_URL?: string | null,
          image_altTag?: string | null,
          infoblock_id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      heading?: string | null,
      paragraph?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type INFOBLOCKSByProject_idQueryVariables = {
  project_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelINFOBLOCKFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type INFOBLOCKSByProject_idQuery = {
  iNFOBLOCKSByProject_id?:  {
    __typename: "ModelINFOBLOCKConnection",
    items:  Array< {
      __typename: "INFOBLOCK",
      id: string,
      project_id: string,
      IMAGES?:  {
        __typename: "ModelIMAGEConnection",
        items:  Array< {
          __typename: "IMAGE",
          id: string,
          image_caption?: string | null,
          image_URL?: string | null,
          image_altTag?: string | null,
          infoblock_id: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      heading?: string | null,
      paragraph?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIMAGEQueryVariables = {
  id: string,
};

export type GetIMAGEQuery = {
  getIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIMAGESQueryVariables = {
  filter?: ModelIMAGEFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIMAGESQuery = {
  listIMAGES?:  {
    __typename: "ModelIMAGEConnection",
    items:  Array< {
      __typename: "IMAGE",
      id: string,
      image_caption?: string | null,
      image_URL?: string | null,
      image_altTag?: string | null,
      infoblock_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IMAGESByInfoblock_idQueryVariables = {
  infoblock_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIMAGEFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IMAGESByInfoblock_idQuery = {
  iMAGESByInfoblock_id?:  {
    __typename: "ModelIMAGEConnection",
    items:  Array< {
      __typename: "IMAGE",
      id: string,
      image_caption?: string | null,
      image_URL?: string | null,
      image_altTag?: string | null,
      infoblock_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPROJECTQueryVariables = {
  id: string,
};

export type GetPROJECTQuery = {
  getPROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPROJECTSQueryVariables = {
  filter?: ModelPROJECTFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPROJECTSQuery = {
  listPROJECTS?:  {
    __typename: "ModelPROJECTConnection",
    items:  Array< {
      __typename: "PROJECT",
      id: string,
      name?: string | null,
      start_date?: string | null,
      end_date?: string | null,
      team_members?: string | null,
      summary?:  {
        __typename: "PROJECTSUMMARY",
        objective?: string | null,
        requirement?: string | null,
      } | null,
      content?:  {
        __typename: "PROJECTCONTENT",
        p_1?: string | null,
        p_2?: string | null,
        p_3?: string | null,
        p_4?: string | null,
        p_5?: string | null,
      } | null,
      next_project?: string | null,
      INFOBLOCKS?:  {
        __typename: "ModelINFOBLOCKConnection",
        items:  Array< {
          __typename: "INFOBLOCK",
          id: string,
          project_id: string,
          heading?: string | null,
          paragraph?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateINFOBLOCKSubscriptionVariables = {
  filter?: ModelSubscriptionINFOBLOCKFilterInput | null,
};

export type OnCreateINFOBLOCKSubscription = {
  onCreateINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateINFOBLOCKSubscriptionVariables = {
  filter?: ModelSubscriptionINFOBLOCKFilterInput | null,
};

export type OnUpdateINFOBLOCKSubscription = {
  onUpdateINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteINFOBLOCKSubscriptionVariables = {
  filter?: ModelSubscriptionINFOBLOCKFilterInput | null,
};

export type OnDeleteINFOBLOCKSubscription = {
  onDeleteINFOBLOCK?:  {
    __typename: "INFOBLOCK",
    id: string,
    project_id: string,
    IMAGES?:  {
      __typename: "ModelIMAGEConnection",
      items:  Array< {
        __typename: "IMAGE",
        id: string,
        image_caption?: string | null,
        image_URL?: string | null,
        image_altTag?: string | null,
        infoblock_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    heading?: string | null,
    paragraph?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIMAGESubscriptionVariables = {
  filter?: ModelSubscriptionIMAGEFilterInput | null,
};

export type OnCreateIMAGESubscription = {
  onCreateIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIMAGESubscriptionVariables = {
  filter?: ModelSubscriptionIMAGEFilterInput | null,
};

export type OnUpdateIMAGESubscription = {
  onUpdateIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIMAGESubscriptionVariables = {
  filter?: ModelSubscriptionIMAGEFilterInput | null,
};

export type OnDeleteIMAGESubscription = {
  onDeleteIMAGE?:  {
    __typename: "IMAGE",
    id: string,
    image_caption?: string | null,
    image_URL?: string | null,
    image_altTag?: string | null,
    infoblock_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePROJECTSubscriptionVariables = {
  filter?: ModelSubscriptionPROJECTFilterInput | null,
};

export type OnCreatePROJECTSubscription = {
  onCreatePROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePROJECTSubscriptionVariables = {
  filter?: ModelSubscriptionPROJECTFilterInput | null,
};

export type OnUpdatePROJECTSubscription = {
  onUpdatePROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePROJECTSubscriptionVariables = {
  filter?: ModelSubscriptionPROJECTFilterInput | null,
};

export type OnDeletePROJECTSubscription = {
  onDeletePROJECT?:  {
    __typename: "PROJECT",
    id: string,
    name?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    team_members?: string | null,
    summary?:  {
      __typename: "PROJECTSUMMARY",
      objective?: string | null,
      requirement?: string | null,
    } | null,
    content?:  {
      __typename: "PROJECTCONTENT",
      p_1?: string | null,
      p_2?: string | null,
      p_3?: string | null,
      p_4?: string | null,
      p_5?: string | null,
    } | null,
    next_project?: string | null,
    INFOBLOCKS?:  {
      __typename: "ModelINFOBLOCKConnection",
      items:  Array< {
        __typename: "INFOBLOCK",
        id: string,
        project_id: string,
        IMAGES?:  {
          __typename: "ModelIMAGEConnection",
          nextToken?: string | null,
        } | null,
        heading?: string | null,
        paragraph?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
