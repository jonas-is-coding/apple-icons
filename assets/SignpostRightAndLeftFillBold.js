import * as React from "react";
const SvgSignpostrightandleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.649 21.354h6.02v3.31h-2.94c-.75 0-1.38.63-1.38 1.38s.62 1.38 1.38 1.38h8.64c.75 0 1.37-.62 1.37-1.38 0-.74-.61-1.38-1.37-1.38h-2.94v-3.31h2.49c1.14 0 1.88-.72 1.88-1.85v-4.66c0-1.14-.74-1.85-1.88-1.85h-2.49v-1.69h5.95c.69 0 1.18-.18 1.64-.63l2.37-2.27c.89-.86.89-1.65-.04-2.56l-2.33-2.27c-.44-.43-.94-.62-1.62-.62h-5.97v-1.58c0-.75-.62-1.37-1.37-1.37s-1.39.61-1.39 1.37v1.58h-2.55c-1.14 0-1.86.7-1.86 1.85v4.65c0 1.14.72 1.85 1.86 1.85h2.55v1.69h-6.02c-.68 0-1.17.19-1.62.62l-2.35 2.28c-.9.88-.9 1.67 0 2.56l2.35 2.28c.45.43.94.62 1.62.62" />
  </svg>
);
export default SvgSignpostrightandleftfillBold;
