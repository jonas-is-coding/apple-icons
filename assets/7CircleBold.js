import * as React from "react";
const Svg7CircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-1.26-3.83c.59 0 .95-.25 1.36-.95l3.83-6.73c.31-.55.43-.95.43-1.41 0-.93-.68-1.55-1.78-1.55h-5.47c-.74 0-1.21.42-1.21 1.1s.47 1.11 1.21 1.11h4.19v.11l-3.69 6.23c-.17.27-.26.54-.26.86 0 .74.58 1.23 1.39 1.23" />
  </svg>
);
export default Svg7CircleBold;
