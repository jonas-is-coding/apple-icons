import * as React from "react";
const SvgRectangleonrectanglecirclefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.93-13.93v4.61h-.15c-1.09 0-1.7-.59-1.7-1.72v-5.32c0-1.12.61-1.72 1.73-1.72h7.46c1.13 0 1.73.6 1.73 1.64v.07h-6.63c-1.57 0-2.44.87-2.44 2.44m2.52 7.15c-1.13 0-1.74-.59-1.74-1.72v-5.34c0-1.12.61-1.72 1.74-1.72h7.46c1.13 0 1.73.6 1.73 1.72v5.34c0 1.13-.6 1.72-1.73 1.72Z" />
  </svg>
);
export default SvgRectangleonrectanglecirclefillBold;
