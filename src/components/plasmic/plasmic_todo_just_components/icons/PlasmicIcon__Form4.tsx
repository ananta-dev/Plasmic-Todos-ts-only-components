// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form4Icon(props: Form4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 20"}
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
          "M2.82 19.037A2.807 2.807 0 010 16.224v-2.05c0-.889.054-.85.748-1.035a3.823 3.823 0 000-7.241C.054 5.713 0 5.754 0 4.864V2.813A2.809 2.809 0 012.82 0h21.558a2.81 2.81 0 012.82 2.813v2.051c0 .89-.056.849-.748 1.034a3.824 3.824 0 000 7.241c.692.185.748.146.748 1.035v2.05a2.81 2.81 0 01-2.82 2.813H2.82zm12.339-7.963a2.127 2.127 0 101.536-.624h-.024a2.14 2.14 0 00-1.512.624zm.906-5.585l-6.5 6.491a.843.843 0 000 1.2l.371.367a.845.845 0 001.2 0l6.5-6.489a.847.847 0 000-1.2l-.37-.367a.85.85 0 00-1.2 0l-.001-.002zm-7.04-.536a2.133 2.133 0 101.527-.622h-.026a2.137 2.137 0 00-1.501.623v-.001zm7.093 8.167a.773.773 0 11.25.166.769.769 0 01-.25-.168v.002zM9.986 7.001a.77.77 0 111.09-1.088.77.77 0 01-1.09 1.088z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form4Icon;
/* prettier-ignore-end */
