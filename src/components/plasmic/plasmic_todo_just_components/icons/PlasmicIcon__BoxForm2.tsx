// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxForm2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxForm2Icon(props: BoxForm2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 400 230"}
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
          "M384 0H16C7.163 0 0 7.163 0 16v198c0 8.837 7.163 16 16 16h368c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxForm2Icon;
/* prettier-ignore-end */
