/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPROJECT } from "../graphql/queries";
import { updatePROJECT } from "../graphql/mutations";
const client = generateClient();
export default function PROJECTUpdateForm(props) {
  const {
    id: idProp,
    pROJECT: pROJECTModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    start_date: "",
    end_date: "",
    team_members: "",
    next_project: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [start_date, setStart_date] = React.useState(initialValues.start_date);
  const [end_date, setEnd_date] = React.useState(initialValues.end_date);
  const [team_members, setTeam_members] = React.useState(
    initialValues.team_members
  );
  const [next_project, setNext_project] = React.useState(
    initialValues.next_project
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pROJECTRecord
      ? { ...initialValues, ...pROJECTRecord }
      : initialValues;
    setName(cleanValues.name);
    setStart_date(cleanValues.start_date);
    setEnd_date(cleanValues.end_date);
    setTeam_members(
      typeof cleanValues.team_members === "string" ||
        cleanValues.team_members === null
        ? cleanValues.team_members
        : JSON.stringify(cleanValues.team_members)
    );
    setNext_project(cleanValues.next_project);
    setErrors({});
  };
  const [pROJECTRecord, setPROJECTRecord] = React.useState(pROJECTModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPROJECT.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPROJECT
        : pROJECTModelProp;
      setPROJECTRecord(record);
    };
    queryData();
  }, [idProp, pROJECTModelProp]);
  React.useEffect(resetStateValues, [pROJECTRecord]);
  const validations = {
    name: [],
    start_date: [],
    end_date: [],
    team_members: [{ type: "JSON" }],
    next_project: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          start_date: start_date ?? null,
          end_date: end_date ?? null,
          team_members: team_members ?? null,
          next_project: next_project ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePROJECT.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pROJECTRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PROJECTUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              start_date,
              end_date,
              team_members,
              next_project,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              start_date: value,
              end_date,
              team_members,
              next_project,
            };
            const result = onChange(modelFields);
            value = result?.start_date ?? value;
          }
          if (errors.start_date?.hasError) {
            runValidationTasks("start_date", value);
          }
          setStart_date(value);
        }}
        onBlur={() => runValidationTasks("start_date", start_date)}
        errorMessage={errors.start_date?.errorMessage}
        hasError={errors.start_date?.hasError}
        {...getOverrideProps(overrides, "start_date")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        value={end_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              start_date,
              end_date: value,
              team_members,
              next_project,
            };
            const result = onChange(modelFields);
            value = result?.end_date ?? value;
          }
          if (errors.end_date?.hasError) {
            runValidationTasks("end_date", value);
          }
          setEnd_date(value);
        }}
        onBlur={() => runValidationTasks("end_date", end_date)}
        errorMessage={errors.end_date?.errorMessage}
        hasError={errors.end_date?.hasError}
        {...getOverrideProps(overrides, "end_date")}
      ></TextField>
      <TextAreaField
        label="Team members"
        isRequired={false}
        isReadOnly={false}
        value={team_members}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              start_date,
              end_date,
              team_members: value,
              next_project,
            };
            const result = onChange(modelFields);
            value = result?.team_members ?? value;
          }
          if (errors.team_members?.hasError) {
            runValidationTasks("team_members", value);
          }
          setTeam_members(value);
        }}
        onBlur={() => runValidationTasks("team_members", team_members)}
        errorMessage={errors.team_members?.errorMessage}
        hasError={errors.team_members?.hasError}
        {...getOverrideProps(overrides, "team_members")}
      ></TextAreaField>
      <TextField
        label="Next project"
        isRequired={false}
        isReadOnly={false}
        value={next_project}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              start_date,
              end_date,
              team_members,
              next_project: value,
            };
            const result = onChange(modelFields);
            value = result?.next_project ?? value;
          }
          if (errors.next_project?.hasError) {
            runValidationTasks("next_project", value);
          }
          setNext_project(value);
        }}
        onBlur={() => runValidationTasks("next_project", next_project)}
        errorMessage={errors.next_project?.errorMessage}
        hasError={errors.next_project?.hasError}
        {...getOverrideProps(overrides, "next_project")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pROJECTModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pROJECTModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
