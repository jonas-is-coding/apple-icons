import * as React from "react";
const SvgStarcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.26-6.27c-.76.58-1.59.02-1.27-.91l1.27-3.83-3.28-2.37c-.68-.48-.51-1.52.48-1.51l4.05.05 1.23-3.87c.29-.91 1.26-.91 1.56 0l1.24 3.87 4.04-.05c1.02-.01 1.14 1.04.48 1.51l-3.28 2.36 1.28 3.84c.31.96-.52 1.48-1.28.91l-3.26-2.37Z" />
  </svg>
);
export default SvgStarcirclefillBold;
