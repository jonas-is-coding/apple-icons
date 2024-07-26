import * as React from "react";
const SvgInsetfilledapplewatchcaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.922 24.05h9.23c3.59 0 5.92-2.38 5.92-6.04v-7.07h.21c.86 0 1.42-.59 1.42-1.53V7.45c0-.94-.56-1.54-1.42-1.54h-.21c-.05-3.6-2.37-5.91-5.92-5.91h-9.23C2.342 0 .002 2.37.002 6.01v12c0 3.66 2.34 6.04 5.92 6.04m-.05-2.79c-1.93 0-3.07-1.19-3.07-3.2V6c0-2 1.14-3.19 3.07-3.19h9.33c1.93 0 3.08 1.19 3.08 3.19v12.06c0 2.01-1.15 3.2-3.08 3.2Zm-1.63-3.11c0 1.04.57 1.67 1.55 1.67h9.49c.97 0 1.55-.63 1.55-1.67V5.88c0-1.02-.6-1.65-1.55-1.65h-9.49c-.95 0-1.55.63-1.55 1.65Z" />
  </svg>
);
export default SvgInsetfilledapplewatchcaseBold;
