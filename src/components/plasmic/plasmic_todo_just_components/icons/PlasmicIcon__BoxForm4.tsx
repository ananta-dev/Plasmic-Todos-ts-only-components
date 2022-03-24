// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxForm4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxForm4Icon(props: BoxForm4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 220 121"}
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
          "M16 0h188a16.002 16.002 0 0116 16v78c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 01204 110h-81.167c-4.481 0-7.994 10.4-13.5 10-5.354-.389-6.725-10-12-10H16A16.002 16.002 0 010 94V16A16 16 0 0116 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxForm4Icon;
/* prettier-ignore-end */
