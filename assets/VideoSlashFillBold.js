import * as React from "react";
const SvgVideoslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.137 24.515c.38.37 1.02.38 1.38 0 .37-.39.39-1.01 0-1.4L1.687.295a.996.996 0 0 0-1.41 0c-.37.37-.37 1.01 0 1.39Zm-5.36-22.01H6.157l15.82 15.82c.04-.23.07-.54.07-.83V6.685c0-2.66-1.48-4.18-4.27-4.18m6.16 14.12 3.63 3.11c.61.5 1.19.84 1.79.84 1.02 0 1.74-.7 1.74-1.83V6.165c0-1.12-.72-1.83-1.74-1.83-.61 0-1.17.34-1.79.85l-3.63 3.11Zm-18.15 5.64h12.81L1.657 5.315c-.12.37-.19.89-.19 1.41v11.52c0 2.66 1.55 4.02 4.32 4.02" />
  </svg>
);
export default SvgVideoslashfillBold;
