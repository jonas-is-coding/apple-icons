import * as React from "react";
const SvgFigurestandBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.002 5.519c1.51 0 2.75-1.24 2.75-2.76a2.761 2.761 0 0 0-5.52 0c0 1.52 1.24 2.76 2.77 2.76m-6 11.05a1.184 1.184 0 1 0 2.37 0v-4.66c0-.19.15-.35.35-.35.18 0 .34.16.34.35v14.19c0 .71.57 1.29 1.29 1.29.71 0 1.3-.58 1.3-1.29v-8.66c0-.2.15-.35.35-.35.19 0 .35.15.35.35v8.66c0 .71.57 1.29 1.29 1.29.71 0 1.29-.58 1.29-1.29v-14.19c0-.19.15-.35.34-.35.2 0 .35.16.35.35v4.66a1.184 1.184 0 1 0 2.37 0v-5.21c0-2.75-2.09-4.56-5.07-4.56h-1.86c-2.98 0-5.06 1.81-5.06 4.56Z" />
  </svg>
);
export default SvgFigurestandBold;
