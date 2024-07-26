import * as React from "react";
const SvgBriefcasecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-6.56-14.32v-.34c0-1.26.67-1.94 1.93-1.94h1.06v-.64c0-.98.62-1.55 1.69-1.55h3.79c1.07 0 1.69.57 1.69 1.55v.64h1.04c1.28 0 1.95.68 1.95 1.94v.34c-2.06.85-4.3 1.25-6.58 1.25-2.27 0-4.51-.4-6.57-1.25m4.38-2.28h4.39v-.6c0-.22-.16-.34-.4-.34h-3.6c-.25 0-.39.12-.39.34Zm-4.38 7.49v-3.91c1.82.66 3.34.95 4.91 1.07v.44c0 .47.28.72.76.72h1.8c.48 0 .76-.25.76-.72v-.44c1.57-.12 3.1-.41 4.92-1.07v3.91c0 1.28-.67 1.95-1.95 1.95h-9.27c-1.26 0-1.93-.67-1.93-1.95" />
  </svg>
);
export default SvgBriefcasecirclefillBold;
