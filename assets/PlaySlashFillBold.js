import * as React from "react";
const SvgPlayslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.075 20.466c.39.38 1.03.39 1.4 0 .37-.4.38-1 0-1.39L1.685.286c-.38-.38-1.02-.38-1.4 0s-.38 1.02 0 1.4Zm-.96-5.97 2.55-1.49c1.07-.63 1.6-1.21 1.6-2.11s-.53-1.49-1.6-2.11L6.485.526c-.49-.28-.98-.41-1.43-.41-.39 0-.74.1-1.02.3Zm-4.57 2.66-10.52-10.5v12.76c0 1.5.92 2.26 2.03 2.26.45 0 .94-.14 1.43-.41Z" />
  </svg>
);
export default SvgPlayslashfillBold;
