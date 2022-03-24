// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIconIcon(props: SearchIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M18.211 19.619L13.7 15.108a8.462 8.462 0 111.408-1.408l4.512 4.512a1 1 0 01-1.408 1.408v-.001zM1.99 8.461a6.471 6.471 0 0010.982 4.64.968.968 0 01.128-.128A6.47 6.47 0 101.989 8.461h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIconIcon;
/* prettier-ignore-end */
