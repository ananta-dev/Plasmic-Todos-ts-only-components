// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow4Icon(props: Arrow4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M.182 6.136a.64.64 0 010-.894L4.1 1.264H1.867a.632.632 0 010-1.264h3.736c.09 0 .179.02.26.058h.011a.618.618 0 01.27.254l.005.011v.022a.637.637 0 01.064.28v3.793a.623.623 0 01-1.246 0V2.151L1.05 6.129a.617.617 0 01-.88 0l.013.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow4Icon;
/* prettier-ignore-end */
