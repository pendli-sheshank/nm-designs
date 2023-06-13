/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ShippingCartItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShippingCartItemUpdateFormInputValues = {
    customer_id?: string;
    product_id?: string;
    quantity?: number;
    price?: number;
};
export declare type ShippingCartItemUpdateFormValidationValues = {
    customer_id?: ValidationFunction<string>;
    product_id?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShippingCartItemUpdateFormOverridesProps = {
    ShippingCartItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customer_id?: PrimitiveOverrideProps<TextFieldProps>;
    product_id?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShippingCartItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShippingCartItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shippingCartItem?: ShippingCartItem;
    onSubmit?: (fields: ShippingCartItemUpdateFormInputValues) => ShippingCartItemUpdateFormInputValues;
    onSuccess?: (fields: ShippingCartItemUpdateFormInputValues) => void;
    onError?: (fields: ShippingCartItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShippingCartItemUpdateFormInputValues) => ShippingCartItemUpdateFormInputValues;
    onValidate?: ShippingCartItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShippingCartItemUpdateForm(props: ShippingCartItemUpdateFormProps): React.ReactElement;
