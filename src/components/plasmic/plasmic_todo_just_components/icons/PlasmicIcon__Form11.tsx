// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form11Icon(props: Form11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 28"}
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
          "M7.843 0h34.314C46.489 0 50 3.134 50 7v14c0 3.866-3.511 7-7.843 7H7.843C3.511 28 0 24.866 0 21V7c0-3.866 3.511-7 7.843-7z"
        }
        fill={"currentColor"}
        fillOpacity={".4"}
      ></path>
    </svg>
  );
}

export default Form11Icon;
/* prettier-ignore-end */
