// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form5Icon(props: Form5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 147 147"}
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
          "M73.44 0a73.44 73.44 0 100 146.88A73.44 73.44 0 0073.44 0zm0 129.522a56.084 56.084 0 01-55.004-67.023 56.083 56.083 0 1155.004 67.024v-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form5Icon;
/* prettier-ignore-end */
