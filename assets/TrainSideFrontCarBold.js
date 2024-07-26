import * as React from "react";
const SvgTrainsidefrontcarBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.426c0 2.67 1.49 4.16 4.18 4.16h23.15c4.02 0 6.35-2.25 6.35-5.28 0-1.8-.86-3.72-2.52-5.38l-4.88-4.82c-3.2-3.17-5.25-4.11-9.02-4.11H4.182c-2.69 0-4.18 1.49-4.18 4.16Zm13.64-5.68v-4c0-.64.37-1 1-1h2.35c3.5 0 4.75.42 6.35 2.02l2.38 2.36c.66.66.32 1.61-.41 1.61h-10.67c-.63 0-1-.38-1-.99" />
  </svg>
);
export default SvgTrainsidefrontcarBold;
