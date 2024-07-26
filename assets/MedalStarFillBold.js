import * as React from "react";
const SvgMedalstarfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.352-.003h-1.89c-1.41 0-2.46 1.07-2.46 2.48v7.36c0 1.16.37 1.86 1.24 2.46l3.11 2.13Zm7 0h-4.38v14.57l.11.08.08-.17c.84-1.62 3.12-1.61 4.02 0l.07.15.1-.07Zm4.52 0h-1.88v14.43l3.11-2.13c.89-.6 1.24-1.33 1.24-2.46v-7.36c0-1.41-1.07-2.48-2.47-2.48m-9.93 27.81 3.23-2.38 3.23 2.38c.76.55 1.58.04 1.26-.92l-1.26-3.8 3.25-2.33c.65-.48.54-1.53-.48-1.51l-4 .04-1.22-3.83c-.3-.9-1.27-.9-1.56 0l-1.22 3.83-4.01-.04c-.98-.02-1.15 1.01-.48 1.51l3.26 2.33-1.27 3.8c-.31.92.52 1.47 1.27.92" />
  </svg>
);
export default SvgMedalstarfillBold;
