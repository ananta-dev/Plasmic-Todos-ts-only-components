// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DottedIcon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DottedIcon2Icon(props: DottedIcon2IconProps) {
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
          "M22 3a3 3 0 116.001 0A3 3 0 0122 3zM11 3a3 3 0 116.001 0A3 3 0 0111 3zM0 3a3 3 0 116 0 3 3 0 01-6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DottedIcon2Icon;
/* prettier-ignore-end */
