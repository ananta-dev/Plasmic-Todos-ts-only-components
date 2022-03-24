// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form6Icon(props: Form6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 135 149"}
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
        d={
          "M74.25 148.5A74.252 74.252 0 010 74.25 74.25 74.25 0 0174.25 0a9.062 9.062 0 010 18.123 56.126 56.126 0 1043.8 91.188 9.058 9.058 0 1114.136 11.334A73.87 73.87 0 0174.25 148.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form6Icon;
/* prettier-ignore-end */
