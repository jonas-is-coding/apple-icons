import * as React from "react";
const SvgAirpodgen3RightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.262.002c-3.84-.01-8.26 3.78-8.26 7.42 0 2.98 3.02 5.5 5.58 5.49 3.5-.01 8.08-3.98 8.08-7.28 0-3.18-2.46-5.63-5.4-5.63m-.5 5.75c-.4-.55-.26-1.29.28-1.69l1.65-1.18c.53-.4 1.28-.26 1.65.29.42.55.32 1.28-.24 1.68l-1.64 1.17c-.57.41-1.33.28-1.7-.27m-3.24 5.24c-.68 0-1.74-.86-2.4-1.93-.66-1.09-.63-1.94.06-1.94.67 0 1.73.85 2.39 1.94.65 1.07.63 1.93-.05 1.93m4.35 10.51h1.39c.95 0 1.57-.55 1.57-1.47v-8.41c-1.33 1.19-2.95 2.1-4.55 2.49v5.92c0 .92.63 1.47 1.59 1.47" />
  </svg>
);
export default SvgAirpodgen3RightBold;
