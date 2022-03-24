// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4Kopie12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse4Kopie12Icon(props: Ellipse4Kopie12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 6"}
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

      <path d={"M0 0a3 3 0 110 6"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Ellipse4Kopie12Icon;
/* prettier-ignore-end */
