import * as React from "react";
const SvgChartbarxaxisascendingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.072 16.136c0 .82.54 1.35 1.36 1.35h2.45c.82 0 1.34-.53 1.34-1.35V1.356c0-.83-.52-1.36-1.34-1.36h-2.45c-.82 0-1.36.53-1.36 1.36Zm-6.49 0c0 .82.52 1.35 1.34 1.35h2.45c.84 0 1.36-.53 1.36-1.35V4.616c0-.84-.52-1.36-1.36-1.36h-2.45c-.82 0-1.34.52-1.34 1.36Zm-6.47 0c0 .82.54 1.35 1.36 1.35h2.45c.82 0 1.34-.53 1.34-1.35v-8.27c0-.82-.52-1.35-1.34-1.35h-2.45c-.82 0-1.36.53-1.36 1.35Zm-6.52 0c0 .82.53 1.35 1.36 1.35h2.45c.81 0 1.35-.53 1.35-1.35v-5.01c0-.83-.54-1.36-1.35-1.36h-2.45c-.83 0-1.36.53-1.36 1.36Zm-.09 6.32h24.82c.84 0 1.5-.61 1.5-1.48 0-.88-.66-1.48-1.5-1.48H1.502c-.85 0-1.5.6-1.5 1.48 0 .87.65 1.48 1.5 1.48" />
  </svg>
);
export default SvgChartbarxaxisascendingBold;
