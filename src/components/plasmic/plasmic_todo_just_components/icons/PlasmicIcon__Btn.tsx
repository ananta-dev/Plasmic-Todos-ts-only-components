// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnIcon(props: BtnIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 310 76"}
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
          "M290 0H20C8.954 0 0 8.954 0 20v36c0 11.046 8.954 20 20 20h270c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BtnIcon;
/* prettier-ignore-end */
