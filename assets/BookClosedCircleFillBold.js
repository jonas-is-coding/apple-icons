import * as React from "react";
const SvgBookclosedcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.09-6.02c-1.29 0-2-.71-2-2.02v-8.63c0-1.33.71-2.05 2.01-2.05h6.18c1.3 0 2.01.73 2.01 2.05v6.04c0 .58-.17.9-.56 1.22-.73.62-.61 1.64.07 2.01.27.15.5.35.5.7 0 .4-.28.68-.66.68Zm0-4.24c.22 0 .4-.17.4-.4v-6.52c0-.21-.18-.4-.4-.4s-.4.17-.4.4v6.52c0 .23.18.4.4.4m.32 2.9h5.66a2.12 2.12 0 0 1 0-1.84h-5.64c-.65 0-1.02.41-1.02.91 0 .54.34.93 1 .93" />
  </svg>
);
export default SvgBookclosedcirclefillBold;
