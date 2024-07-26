import * as React from "react";
const SvgFlashlightslashcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.07-15.07h6.14v-.16c0-.87-.43-1.3-1.27-1.3h-3.59c-.84 0-1.28.43-1.28 1.3Zm7.7 11.37c.26.24.69.26.95 0a.67.67 0 0 0 0-.96L7.742 6.796c-.25-.27-.7-.27-.97 0-.26.26-.26.69 0 .95Zm-2.79-5.92v-.75c0-.66.15-1.09.38-1.44l.34-.54c.29-.47.51-.89.51-1.45v-.45h-5.7v.14Zm-3.68.67v5.6c0 .84.45 1.29 1.27 1.29h1.15c.82 0 1.26-.45 1.26-1.29v-1.92Z" />
  </svg>
);
export default SvgFlashlightslashcircleBold;
