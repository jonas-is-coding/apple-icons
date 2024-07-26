import * as React from "react";
const SvgBoltfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.001 15.366c0 .54.41.94.98.94h7.09l-3.7 9.79c-.54 1.41.91 2.15 1.85 1.01l11.47-13.95c.23-.29.34-.56.34-.86 0-.54-.42-.94-.98-.94h-7.09l3.7-9.79c.53-1.4-.92-2.15-1.86-1.01L.341 14.506c-.24.29-.34.56-.34.86" />
  </svg>
);
export default SvgBoltfillBold;
