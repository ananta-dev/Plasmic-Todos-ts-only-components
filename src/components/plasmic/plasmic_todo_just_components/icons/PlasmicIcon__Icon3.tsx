// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
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
          "M17.216 12.982v-5a6.082 6.082 0 00-12.162 0v5a3.941 3.941 0 01-.542 2h13.247a3.94 3.94 0 01-.543-2zm4.054 4H1a1 1 0 010-2 2.014 2.014 0 002.027-2v-5a8.109 8.109 0 0116.216 0v5a2.014 2.014 0 002.027 2 1 1 0 110 2zm-7.505 3.5a3.062 3.062 0 01-5.26 0 1 1 0 01.877-1.5h3.507a1 1 0 01.876 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
