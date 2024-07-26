import * as React from "react";
const Svg4LcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m2.11-7.55c-.67 0-1.02-.44-1.02-1.12v-7.52c0-.69.35-1.11 1.03-1.11.73 0 1.07.44 1.07 1.11v6.9h2c.53 0 .92.31.92.86 0 .59-.44.88-.92.88Zm-4.36.14c-.5 0-.98-.31-.98-1.02v-.89h-2.29c-.75 0-1.19-.43-1.19-1.15 0-.42.09-.83.28-1.33l1.58-3.72c.38-.99.8-1.78 1.99-1.78.98 0 1.6.53 1.6 1.52v4.82h.27c.56 0 .79.31.79.82 0 .43-.21.82-.79.82h-.27v.89c0 .71-.44 1.02-.99 1.02m-.93-3.51v-4.7h-.05l-1.76 4.62v.08Z" />
  </svg>
);
export default Svg4LcirclefillBold;
