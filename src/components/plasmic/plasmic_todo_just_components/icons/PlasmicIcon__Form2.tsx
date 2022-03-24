// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Form2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Form2Icon(props: Form2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
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
          "M16.226 22.9a1.9 1.9 0 113.8 0 1.9 1.9 0 01-3.8 0zm-7.558 0a1.9 1.9 0 113.803 0 1.9 1.9 0 01-3.804 0h.001zm10.156-3.169H9.962a4.715 4.715 0 01-4.064-2.544 11.13 11.13 0 01-1.218-3.426L2.632 3.093l-1.74-.614A1.271 1.271 0 011.155 0l2.723.839a1.219 1.219 0 01.825.838l.452 1.379 16.8-.013c1.327 0 2.085.283 1.948 1.713l-2.559 8.7c-.265 1.1-.863 2.054-1.937 2.054h-11.7a2.64 2.64 0 002.255 1.72h8.861a1.252 1.252 0 01.027 2.5l-.026.001zm-1.2-12.362l-1.209 4.506a.586.586 0 00.625.755h.351a1.1 1.1 0 001.03-.755l1.206-4.506a.586.586 0 00-.625-.754h-.35a1.1 1.1 0 00-1.026.752l-.002.002zm-5.37.059l-.458 4.388a.724.724 0 00.741.814h.35a.932.932 0 00.913-.814l.46-4.388a.725.725 0 00-.742-.814h-.35a.932.932 0 00-.912.813l-.002.001zm-5.06 0l.46 4.388a.931.931 0 00.913.814h.351a.723.723 0 00.741-.814L9.2 7.428a.931.931 0 00-.913-.814h-.35a.724.724 0 00-.74.813l-.002.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Form2Icon;
/* prettier-ignore-end */
