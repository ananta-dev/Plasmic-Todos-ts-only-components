// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form7Icon(props: Form7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 8"}
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
          "M6.916 5.48l5.23-5.191a.993.993 0 011.613.318.977.977 0 01-.214 1.069L7.617 7.56a.993.993 0 01-1.4 0L.29 1.676a.976.976 0 010-1.387.993.993 0 011.4 0l5.227 5.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form7Icon;
/* prettier-ignore-end */
