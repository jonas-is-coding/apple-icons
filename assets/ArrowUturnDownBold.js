import * as React from "react";
const SvgArrowuturndownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.832 0c-4.94 0-8.35 3.34-8.35 8.61v6.58l.12 2.63-1.47-1.77-2.31-2.36c-.3-.32-.68-.54-1.19-.54-.94 0-1.63.67-1.63 1.65 0 .43.19.88.53 1.22l6.39 6.47c.31.31.79.5 1.26.5.46 0 .94-.19 1.24-.5l6.39-6.47c.34-.34.52-.79.52-1.22 0-.98-.69-1.65-1.61-1.65-.53 0-.89.22-1.21.54l-2.3 2.36-1.46 1.77.12-2.63V8.73c0-3.39 2.03-5.4 4.91-5.4 2.87 0 4.92 2.01 4.92 5.4v2.78c0 .99.75 1.72 1.7 1.72.93 0 1.7-.73 1.7-1.72v-3c0-5.22-3.25-8.51-8.27-8.51" />
  </svg>
);
export default SvgArrowuturndownBold;
