import * as React from "react";
const SvgLbcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.66-7.8c-.63 0-.99-.4-.99-1.04v-7.22c0-.55.46-1 1-1s1 .45 1 1v6.62h1.95c.45 0 .82.36.82.82 0 .44-.37.82-.82.82Zm5.83 0c-.68 0-1-.43-1-1.04v-7.02c0-.6.32-1.05 1-1.05h2.34c1.36 0 2.27.84 2.27 2.28 0 .92-.61 1.84-1.49 1.98v.06c1.02.08 1.72 1.09 1.72 2.19 0 1.49-.86 2.6-2.42 2.6Zm.99-5.32h.63c.74 0 1.1-.47 1.1-1.18 0-.66-.27-1.14-.99-1.14h-.74Zm0 3.87h.75c.77 0 1.1-.54 1.1-1.33 0-.81-.41-1.28-1.12-1.28h-.73Z" />
  </svg>
);
export default SvgLbcirclefillBold;
