import * as React from "react";
const SvgTrainsidemiddlecarBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.426c0 2.67 1.49 4.16 4.18 4.16h22.3c2.7 0 4.19-1.49 4.19-4.16V4.156c0-2.67-1.49-4.16-4.19-4.16h-22.3c-2.69 0-4.18 1.49-4.18 4.16Zm5.79-5.88v-3.62c0-.62.37-.99 1.01-.99h17.07c.63 0 1.01.37 1.01.99v3.62c0 .61-.38 1-1.01 1H6.802c-.64 0-1.01-.39-1.01-1" />
  </svg>
);
export default SvgTrainsidemiddlecarBold;
