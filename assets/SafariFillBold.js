import * as React from "react";
const SvgSafarifillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.67-6.39c-.96.42-1.71-.33-1.29-1.31l2.99-6.67c.22-.49.51-.78.97-.99l6.67-2.98c1-.44 1.73.31 1.3 1.3l-2.98 6.67c-.21.46-.51.78-.97.98Zm4.68-4.28c.92 0 1.66-.76 1.66-1.68 0-.91-.74-1.66-1.66-1.66s-1.66.75-1.66 1.66c0 .92.74 1.68 1.66 1.68" />
  </svg>
);
export default SvgSafarifillBold;
