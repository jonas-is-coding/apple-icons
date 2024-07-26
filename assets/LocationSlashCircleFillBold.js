import * as React from "react";
const SvgLocationslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.34-11.64-4.32-4.32 4.96-2.29c1.13-.53 2.16.51 1.65 1.65Zm1.2 4.75L6.892 7.836a.724.724 0 0 1 0-1.02c.29-.29.75-.29 1.05 0l10.01 10.01c.29.28.29.74 0 1.03a.73.73 0 0 1-1.04 0m-10.74-4.51c-1.18 0-1.57-1.4-.36-1.96l2.07-.98 2.96 2.94Zm6.95 5.35c-.52 1.19-1.94.82-1.94-.38v-4.63l2.92 2.92Z" />
  </svg>
);
export default SvgLocationslashcirclefillBold;
