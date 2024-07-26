import * as React from "react";
const SvgArrowtrianglerightcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.92-7.51c-.83.51-1.8.07-1.8-.89v-7.96c0-.94.98-1.37 1.8-.89l6.55 3.87c.76.46.78 1.55 0 2.02Z" />
  </svg>
);
export default SvgArrowtrianglerightcirclefillBold;
