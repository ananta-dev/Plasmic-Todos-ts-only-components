// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DottedIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DottedIconIcon(props: DottedIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 6"}
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
          "M22 3a3 3 0 116 0 3 3 0 01-6 0zM11 3a3 3 0 116 0 3 3 0 01-6 0zM0 3a3 3 0 116 0 3 3 0 01-6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DottedIconIcon;
/* prettier-ignore-end */
