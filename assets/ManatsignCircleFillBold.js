import * as React from "react";
const SvgManatsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.52-7.02c-.68 0-1.09-.42-1.09-1.1v-3.2c0-2.88 1.38-4.99 4.05-5.25v-1.26c0-.37.22-.6.56-.6s.55.23.55.6v1.26c2.69.25 4.11 2.35 4.11 5.25v3.2c0 .72-.45 1.1-1.09 1.1-.68 0-1.11-.42-1.11-1.1v-3.22c0-1.66-.48-3.06-1.91-3.32v7.02c0 .37-.21.59-.55.59s-.56-.22-.56-.59v-7c-1.38.28-1.87 1.64-1.87 3.3v3.22c0 .74-.46 1.1-1.09 1.1" />
  </svg>
);
export default SvgManatsigncirclefillBold;
