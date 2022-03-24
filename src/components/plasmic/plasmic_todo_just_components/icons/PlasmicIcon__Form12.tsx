// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form12Icon(props: Form12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 28"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M72 0H8a8 8 0 00-8 8v12a8 8 0 008 8h64a8 8 0 008-8V8a8 8 0 00-8-8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form12Icon;
/* prettier-ignore-end */
