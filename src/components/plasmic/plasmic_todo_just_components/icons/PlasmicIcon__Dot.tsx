// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotIcon(props: DotIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
        d={"M10 0H4a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V4a4 4 0 00-4-4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotIcon;
/* prettier-ignore-end */
