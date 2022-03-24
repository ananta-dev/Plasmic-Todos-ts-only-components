// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AvatarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AvatarIcon(props: AvatarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 62"}
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
          "M31 62c17.12 0 31-13.88 31-31C62 13.88 48.12 0 31 0 13.88 0 0 13.88 0 31c0 17.12 13.88 31 31 31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AvatarIcon;
/* prettier-ignore-end */
