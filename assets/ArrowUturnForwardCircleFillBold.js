import * as React from "react";
const SvgArrowuturnforwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.13-10.89c0-2.82 1.97-4.69 4.94-4.69h3.49l.97.07-.75-.55-1.17-1.08a.99.99 0 0 1-.32-.73c0-.57.5-1.06 1.06-1.06.28 0 .53.1.73.31l3.23 3.27c.21.23.34.51.34.8 0 .28-.12.56-.34.8l-3.25 3.28c-.18.2-.45.3-.73.3-.57 0-1.05-.49-1.05-1.08 0-.27.12-.52.33-.72l1.3-1.13.62-.42-.97.07h-3.49c-1.62 0-2.69 1.03-2.69 2.56 0 1.59 1.07 2.64 2.68 2.64h1.72c.72 0 1.22.44 1.22 1.09 0 .67-.5 1.13-1.22 1.13h-1.72c-2.96 0-4.93-1.93-4.93-4.86" />
  </svg>
);
export default SvgArrowuturnforwardcirclefillBold;
