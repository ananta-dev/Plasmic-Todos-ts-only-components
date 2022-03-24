// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow3Icon(props: Arrow3IconProps) {
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
          "M.258 8.663a.9.9 0 010-1.262l5.568-5.616H2.652a.893.893 0 110-1.785h5.31c.15 0 .297.039.427.112h.006l.011.006.011.007h.005l.015.01a.894.894 0 01.39.571v.123c0 .006 0 0 0 0v5.397a.885.885 0 11-1.769 0v-3.2L1.49 8.642a.88.88 0 01-1.25 0l.018.021z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow3Icon;
/* prettier-ignore-end */
