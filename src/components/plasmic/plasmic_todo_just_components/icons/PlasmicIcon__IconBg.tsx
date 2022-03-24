// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBgIcon(props: IconBgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 58"}
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
          "M42 0H16C7.163 0 0 7.163 0 16v26c0 8.837 7.163 16 16 16h26c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBgIcon;
/* prettier-ignore-end */
