// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Btn2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Btn2Icon(props: Btn2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 28"}
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
          "M26 0H14C6.268 0 0 6.268 0 14s6.268 14 14 14h12c7.732 0 14-6.268 14-14S33.732 0 26 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Btn2Icon;
/* prettier-ignore-end */
