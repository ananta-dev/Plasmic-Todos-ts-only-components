// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 23"}
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
          "M10.41 22.412H5.607a27.7 27.7 0 01-2.858-.081 2.585 2.585 0 01-2.66-2.658 27.667 27.667 0 01-.082-2.86V5.611c-.023-.953.004-1.907.08-2.858A2.589 2.589 0 012.747.094a27.674 27.674 0 012.86-.083h4.673a3.8 3.8 0 012.09.29 15.318 15.318 0 013.348 3.352c.239.568.336 1.186.285 1.8a.797.797 0 010 .289V16.81a27.58 27.58 0 01-.084 2.86 2.587 2.587 0 01-2.659 2.657 25.94 25.94 0 01-2.713.083l-.138.003zM2.926 1.682A1.074 1.074 0 001.681 2.93c-.068.6-.072 1.483-.072 2.68v11.2c0 1.2 0 2.084.072 2.681a1.074 1.074 0 001.249 1.247c.6.067 1.482.071 2.678.071h4.856c1.164 0 2.038-.006 2.624-.072a1.075 1.075 0 001.248-1.246c.069-.6.072-1.484.072-2.681V6.41h-4a.8.8 0 01-.8-.8v-4h-4c-1.197 0-2.084.005-2.68.072zM11.21 4.81h3.181a1.16 1.16 0 00-.1-.442 16.865 16.865 0 00-2.633-2.637 1.16 1.16 0 00-.447-.1l-.002 3.18zM8.29 18.614a.848.848 0 01-.666-.32l-3.643-3.645a.855.855 0 111.21-1.209l2.25 2.251V8.435a.85.85 0 01.85-.85h.01a.85.85 0 01.85.85v7.257l2.252-2.25a.855.855 0 011.208 1.208l-3.648 3.648a.85.85 0 01-.662.317h-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
