/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PROJECTCreateFormInputValues = {
    name?: string;
    start_date?: string;
    end_date?: string;
    team_members?: string;
    next_project?: string;
};
export declare type PROJECTCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    start_date?: ValidationFunction<string>;
    end_date?: ValidationFunction<string>;
    team_members?: ValidationFunction<string>;
    next_project?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PROJECTCreateFormOverridesProps = {
    PROJECTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    team_members?: PrimitiveOverrideProps<TextAreaFieldProps>;
    next_project?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PROJECTCreateFormProps = React.PropsWithChildren<{
    overrides?: PROJECTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PROJECTCreateFormInputValues) => PROJECTCreateFormInputValues;
    onSuccess?: (fields: PROJECTCreateFormInputValues) => void;
    onError?: (fields: PROJECTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PROJECTCreateFormInputValues) => PROJECTCreateFormInputValues;
    onValidate?: PROJECTCreateFormValidationValues;
} & React.CSSProperties>;
export default function PROJECTCreateForm(props: PROJECTCreateFormProps): React.ReactElement;
