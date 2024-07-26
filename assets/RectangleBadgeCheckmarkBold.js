import * as React from "react";
const SvgRectanglebadgecheckmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.886 22.402h15.61c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H8.806c-2.68 0-4.14 1.45-4.14 4.11v6.38a6.8 6.8 0 0 1 3.02 0v-6c0-1 .51-1.47 1.44-1.47h19.05c.93 0 1.44.47 1.44 1.47v13.44c0 .99-.51 1.45-1.44 1.45h-14.21a6.8 6.8 0 0 1-1.08 3.02m-6.71 2.03c3.36 0 6.16-2.81 6.16-6.17 0-3.38-2.77-6.17-6.16-6.17s-6.18 2.79-6.18 6.17c0 3.37 2.79 6.17 6.18 6.17m-.76-2.8c-.28 0-.6-.09-.81-.32l-1.93-2.09c-.18-.2-.31-.46-.31-.73 0-.64.49-1.01 1.02-1.01.31 0 .56.11.74.31l1.21 1.37 2.61-3.6a1 1 0 0 1 .84-.45c.55 0 1.01.45 1.01 1.01 0 .18-.06.39-.19.57l-3.37 4.57c-.17.23-.49.37-.82.37" />
  </svg>
);
export default SvgRectanglebadgecheckmarkBold;
