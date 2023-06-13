/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCategoryCreateFormInputValues = {
    name?: string;
    code?: number;
    description?: string;
    parent_code?: string;
};
export declare type ProductCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    parent_code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCategoryCreateFormOverridesProps = {
    ProductCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    parent_code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onSuccess?: (fields: ProductCategoryCreateFormInputValues) => void;
    onError?: (fields: ProductCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onValidate?: ProductCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCategoryCreateForm(props: ProductCategoryCreateFormProps): React.ReactElement;
