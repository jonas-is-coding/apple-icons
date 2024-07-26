import * as React from "react";
const SvgDividecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.01-15.02c-.98 0-1.73-.68-1.73-1.55 0-.93.75-1.63 1.73-1.63 1.03 0 1.76.68 1.76 1.63 0 .87-.73 1.55-1.76 1.55m-4.55 3.94c-.77 0-1.31-.51-1.31-1.27s.53-1.26 1.31-1.26h9.13c.78 0 1.3.5 1.3 1.26s-.54 1.27-1.3 1.27Zm4.55 4.54c-.98 0-1.73-.66-1.73-1.55 0-.94.75-1.62 1.73-1.62 1.03 0 1.76.68 1.76 1.62 0 .88-.73 1.55-1.76 1.55" />
  </svg>
);
export default SvgDividecirclefillBold;
