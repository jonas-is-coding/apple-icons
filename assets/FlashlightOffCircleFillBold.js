import * as React from "react";
const SvgFlashlightoffcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.28-18.58v-.16c0-.94.47-1.41 1.36-1.41h3.86c.9 0 1.36.47 1.36 1.41v.16Zm2.67 13.97c-.89 0-1.37-.48-1.37-1.41v-7.52c0-.7-.14-1.16-.38-1.53l-.38-.59c-.32-.49-.54-.95-.54-1.55v-.48h6.58v.48c0 .6-.23 1.06-.54 1.55l-.38.59c-.24.37-.39.83-.39 1.53v7.52c0 .93-.48 1.41-1.37 1.41Zm-.58-8.36v2.1c0 .67.52 1.21 1.2 1.21.67 0 1.2-.54 1.2-1.21v-2.1c0-.66-.53-1.19-1.2-1.19-.68 0-1.2.53-1.2 1.19m1.2 2.89c-.44 0-.78-.35-.78-.79 0-.43.34-.77.78-.77s.78.34.78.77c0 .44-.33.79-.78.79" />
  </svg>
);
export default SvgFlashlightoffcirclefillBold;
