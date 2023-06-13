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
export declare type ShippingCartItemCreateFormInputValues = {
    customer_id?: string;
    product_id?: string;
    quantity?: number;
    price?: number;
};
export declare type ShippingCartItemCreateFormValidationValues = {
    customer_id?: ValidationFunction<string>;
    product_id?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShippingCartItemCreateFormOverridesProps = {
    ShippingCartItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customer_id?: PrimitiveOverrideProps<TextFieldProps>;
    product_id?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShippingCartItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ShippingCartItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShippingCartItemCreateFormInputValues) => ShippingCartItemCreateFormInputValues;
    onSuccess?: (fields: ShippingCartItemCreateFormInputValues) => void;
    onError?: (fields: ShippingCartItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShippingCartItemCreateFormInputValues) => ShippingCartItemCreateFormInputValues;
    onValidate?: ShippingCartItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShippingCartItemCreateForm(props: ShippingCartItemCreateFormProps): React.ReactElement;
