import * as React from "react";
const SvgRollershadeclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 2.543c0 1.41 1.14 2.55 2.54 2.55 1.41 0 2.56-1.14 2.56-2.55S3.952.003 2.542.003c-1.4 0-2.54 1.13-2.54 2.54m9.21 22.63h14.73c1.41 0 2.55-1.15 2.55-2.56V2.543a2.54 2.54 0 0 0-2.55-2.54H5.782c.57.65.89 1.51.89 2.54v20.07c0 1.41 1.13 2.56 2.54 2.56m-7.62-18.19c0 .52.42.95.95.95.54 0 .96-.43.96-.95 0-.54-.42-.96-.96-.96-.53 0-.95.42-.95.96m0 2.81c0 .52.42.95.95.95.54 0 .96-.43.96-.95s-.42-.95-.96-.95a.95.95 0 0 0-.95.95m-.13 5.53a1.084 1.084 0 1 0 2.17 0v-2.56a1.086 1.086 0 1 0-2.17 0Z" />
  </svg>
);
export default SvgRollershadeclosedBold;
