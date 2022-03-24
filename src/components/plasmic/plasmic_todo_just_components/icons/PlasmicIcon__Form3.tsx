// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form3Icon(props: Form3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 18"}
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
          "M21.422 12.473h3.123a.7.7 0 01.75.634v.264a.7.7 0 01-.75.634h-3.123a.7.7 0 01-.751-.634v-.264a.7.7 0 01.75-.634zm-6.248 0h3.123a.7.7 0 01.75.634v.264a.7.7 0 01-.75.634h-3.123a.7.7 0 01-.751-.634v-.264a.7.7 0 01.75-.634zm-6.248 0h3.123a.7.7 0 01.749.634v.264a.7.7 0 01-.75.634H8.927a.7.7 0 01-.751-.634v-.264a.7.7 0 01.75-.634zm-6.248 0H5.8a.7.7 0 01.75.634v.264a.7.7 0 01-.75.634H2.68a.7.7 0 01-.75-.634v-.264a.7.7 0 01.75-.634h-.003zm.83-9.794h4.107a.837.837 0 01.752.9v1.777a.837.837 0 01-.752.9H3.508a.836.836 0 01-.752-.9V3.579a.836.836 0 01.752-.9zM2.243 0A2.531 2.531 0 00.012 2.757v12.171a2.53 2.53 0 002.23 2.756h22.74a2.531 2.531 0 002.23-2.756V2.757A2.53 2.53 0 0024.983 0H2.242z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form3Icon;
/* prettier-ignore-end */
