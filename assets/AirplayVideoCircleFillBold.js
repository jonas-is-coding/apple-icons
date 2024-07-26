import * as React from "react";
const SvgAirplayvideocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m4.98-17.43c1.03 0 1.73.68 1.73 1.69v5.81c0 1.02-.7 1.7-1.73 1.7h-.68l-1.47-1.7h1.7c.24 0 .42-.16.42-.42v-4.95c0-.27-.18-.44-.42-.44h-9.05c-.25 0-.42.17-.42.44v4.95c0 .26.17.42.42.42h1.71l-1.5 1.7h-.68c-1.03 0-1.72-.68-1.72-1.7v-5.81c0-1.01.7-1.69 1.72-1.69Zm-1.59 10.96h-6.77c-.45 0-.65-.5-.36-.82l3.36-3.79c.21-.22.57-.23.77 0l3.35 3.79c.29.32.09.82-.35.82" />
  </svg>
);
export default SvgAirplayvideocirclefillBold;
