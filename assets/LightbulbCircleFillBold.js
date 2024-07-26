import * as React from "react";
const SvgLightbulbcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.09-15.8c0-2.17 1.83-3.77 4.09-3.77 2.28 0 4.1 1.64 4.1 3.8 0 2.2-1.44 2.91-1.6 6.6-.01.38-.28.6-.66.6h-3.68c-.37 0-.63-.22-.64-.6-.18-3.69-1.61-4.43-1.61-6.63m2.25 8.88a.5.5 0 0 1-.5-.49c0-.26.23-.5.5-.5h3.68c.28 0 .52.24.52.5 0 .27-.24.49-.52.49Zm1.85 1.71c-.9 0-1.57-.42-1.62-1.06h3.24c-.07.64-.71 1.06-1.62 1.06" />
  </svg>
);
export default SvgLightbulbcirclefillBold;
