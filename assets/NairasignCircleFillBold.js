import * as React from "react";
const SvgNairasigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.02-6.87c-.63 0-1-.38-1-1.02v-4.15h-.7a.36.36 0 0 1-.36-.37c0-.2.16-.36.36-.36h.7v-3.84c0-.82.6-1.29 1.37-1.29.75 0 1.21.4 1.46 1.02l1.8 4.11h1.24v-4.12c0-.65.36-1.01.99-1.01s.99.37.99 1.01v4.12h.78c.2 0 .36.16.36.36 0 .21-.16.37-.36.37h-.78v3.86c0 .77-.53 1.31-1.38 1.31-.72 0-1.18-.38-1.44-1.02l-1.83-4.15h-1.22v4.15c0 .64-.36 1.02-.98 1.02m.98-5.9h.91l-.85-1.76h-.06Zm2.98.73.86 1.81h.05v-1.81Z" />
  </svg>
);
export default SvgNairasigncirclefillBold;
