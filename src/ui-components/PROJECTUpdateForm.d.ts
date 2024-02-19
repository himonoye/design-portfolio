/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PROJECT } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PROJECTUpdateFormInputValues = {
    name?: string;
    start_date?: string;
    end_date?: string;
    team_members?: string;
    next_project?: string;
};
export declare type PROJECTUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    start_date?: ValidationFunction<string>;
    end_date?: ValidationFunction<string>;
    team_members?: ValidationFunction<string>;
    next_project?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PROJECTUpdateFormOverridesProps = {
    PROJECTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    team_members?: PrimitiveOverrideProps<TextAreaFieldProps>;
    next_project?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PROJECTUpdateFormProps = React.PropsWithChildren<{
    overrides?: PROJECTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pROJECT?: PROJECT;
    onSubmit?: (fields: PROJECTUpdateFormInputValues) => PROJECTUpdateFormInputValues;
    onSuccess?: (fields: PROJECTUpdateFormInputValues) => void;
    onError?: (fields: PROJECTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PROJECTUpdateFormInputValues) => PROJECTUpdateFormInputValues;
    onValidate?: PROJECTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PROJECTUpdateForm(props: PROJECTUpdateFormProps): React.ReactElement;
