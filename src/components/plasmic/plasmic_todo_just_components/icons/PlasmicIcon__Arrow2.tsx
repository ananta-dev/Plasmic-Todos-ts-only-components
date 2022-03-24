// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow2Icon(props: Arrow2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M2.654 8.924a.893.893 0 010-1.785h3.174L.258 1.523a.9.9 0 010-1.263.882.882 0 011.252 0l5.568 5.616v-3.2a.885.885 0 111.769 0v5.525a.894.894 0 01-.39.571l-.015.01h-.005l-.011.007-.01.006H8.41l-.016.01a.873.873 0 01-.411.1l-5.33.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow2Icon;
/* prettier-ignore-end */
