// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OverviewBackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OverviewBackgroundIcon(props: OverviewBackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1550 1650"}
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
          "M1510 0H40C17.909 0 0 17.909 0 40v1570c0 22.09 17.909 40 40 40h1470c22.09 0 40-17.91 40-40V40c0-22.091-17.91-40-40-40z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OverviewBackgroundIcon;
/* prettier-ignore-end */
